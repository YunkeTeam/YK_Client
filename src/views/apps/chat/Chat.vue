<!--
  聊天板块
-->
<template>
    <div id="chat-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
        <vs-sidebar class="items-no-padding" parent="#chat-app" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isChatSidebarActive" id="chat-list-sidebar">

            <!-- USER PROFILE SIDEBAR -->
            <user-profile :active="activeProfileSidebar" :userId="userProfileId" class="user-profile-container" @closeProfileSidebar="closeProfileSidebar"></user-profile>

            <div class="chat__profile-search flex p-4">
                <div class="relative inline-flex">
                    <vs-avatar class="m-0 border-2 border-solid border-white" color="primary" text="Titos" :src="$store.state.avatar" size="40px" @click="showProfileSidebar(activeUserId)" />
                    <div class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0" :class="'bg-' + getStatusColor(true)"></div>
                </div>
                <!--好友搜索-->
                <vs-input icon="icon-search" icon-pack="feather" class="w-full mx-5 input-rounded-full no-icon-border" placeholder="搜索好友" v-model="searchQuery"/>
            </div>

            <vs-divider class="d-theme-border-grey-light m-0" />
            <VuePerfectScrollbar class="chat-scroll-area pt-4" :settings="settings">

                <!-- 正在聊天列表 -->
                <div class="chat__chats-list mb-8">
                    <h3 class="text-primary mb-5 px-4">正在聊天</h3>
                    <ul class="chat__active-chats bordered-items">
                        <li class="cursor-pointer" v-for="contact in sorted" :key="contact.id" @click="updateActiveChatUser(contact.id)">
                            <chat-contact :contact="contact" :lastMessaged="chatLastMessaged(contact.id).time" :unseenMsg="chatUnseenMessages(contact.id)" :isActiveChatUser="isActiveChatUser(contact.id)"></chat-contact>
                        </li>
                    </ul>
                </div>


                <!-- 好友列表 -->
                <div class="chat__contacts">
                    <h3 class="text-primary mb-5 px-4">好友列表</h3>
                    <ul class="chat__contacts bordered-items">
                        <li class="cursor-pointer" v-for="contact in chatContacts" :key="contact.id" @click="updateActiveChatUser(contact.id)">
                            <chat-contact :contact="contact"></chat-contact>
                        </li>
                    </ul>
                </div>
            </VuePerfectScrollbar>
        </vs-sidebar>

        <!-- RIGHT COLUMN -->
        <div class="chat__bg app-fixed-height chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0" :class="{'sidebar-spacer--wide': clickNotClose, 'flex items-center justify-center': activeChatUser === null}">
            <template v-if="activeChatUser">
                <div class="chat__navbar">
<!--                    <chat-navbar :isSidebarCollapsed="!clickNotClose" :user-id="activeChatUser" :isPinnedProp="isChatPinned" @openContactsSidebar="toggleChatSidebar(true)" @showProfileSidebar="updateUserProfileId" @toggleIsChatPinned="toggleIsChatPinned"></chat-navbar>-->
                    <chat-navbar :isSidebarCollapsed="!clickNotClose" :user-id="activeChatUser" :isPinnedProp="isChatPinned" @openContactsSidebar="toggleChatSidebar(true)"  @toggleIsChatPinned="toggleIsChatPinned"></chat-navbar>
                </div>
                <VuePerfectScrollbar class="chat-content-scroll-area border border-solid d-theme-border-grey-light" :settings="settings" ref="chatLogPS">
                    <div class="chat__log" ref="chatLog">
                        <chat-log :userId="activeChatUser" v-if="activeChatUser"></chat-log>
                    </div>
                </VuePerfectScrollbar>
                <div class="chat__input flex p-4 bg-white">
                    <vs-input class="flex-1" placeholder="输入消息" v-model="typedMessage" @keyup.enter="sendMsg" />
                    <vs-button class="bg-primary-gradient ml-4" type="filled" @click="sendMsg">发送</vs-button>
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col items-center">
                    <feather-icon icon="MessageSquareIcon" class="mb-4 bg-white p-8 shadow-md rounded-full" svgClasses="w-16 h-16"></feather-icon>
                    <h4 class=" py-2 px-4 bg-white shadow-md rounded-full cursor-pointer" @click.stop="toggleChatSidebar(true)">Start Conversation</h4>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import contacts from './contacts'
import ChatContact from "./ChatContact.vue"
import UserProfile from "./UserProfile.vue"
import ChatNavbar from './ChatNavbar.vue'
import ChatLog from './ChatLog.vue'

export default{
    name: 'vx-sidebar',
    data() {
        return {
            wsUrl: 'ws://127.0.0.1:8080/conversation/chat',
            websocket: null,
            active: true,
            isHidden: false,
            contacts: contacts,
            searchContact: "",
            activeProfileSidebar: false,
            activeChatUser: null, // 点击通信的好友
            userProfileId: -1,
            typedMessage: "",
            isChatPinned: false,
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.70,
            },
            clickNotClose: true,
            isChatSidebarActive: true,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        chatLastMessaged() {
            return (userId) => this.$store.getters['chat/chatLastMessaged'](userId);
        },
        chatUnseenMessages() {
            return (userId) => {
                const unseenMsg = this.$store.getters['chat/chatUnseenMessages'](userId);
                if(unseenMsg) return unseenMsg
            };
        },
        sorted() {
            return this.chats.slice().sort((x,y) => {
                const xId = x.id;
                const yId = y.id;
                const chatDataX = this.$store.getters['chat/chatDataOfUser'](xId);
                const chatDataY = this.$store.getters['chat/chatDataOfUser'](yId);
                return (chatDataY.isPinned - chatDataX.isPinned)
            })
        },
        activeUserId() {
            return this.$store.state.AppActiveUser.id;
        },
        activeUserImg() {
            return this.$store.state.AppActiveUser.img;
        },
        activeUserStatus() {
            return this.$store.state.AppActiveUser.status;
        },
        getStatusColor() {
            return (isActiveUser) => {
                const userStatus = this.getUserStatus(isActiveUser)

                if(userStatus == "online"){
                    return "success"
                }else if(userStatus == "do not disturb"){
                    return "danger"
                }else if(userStatus == "away"){
                    return "warning"
                }else{
                    return "grey"
                }
            }
        },
        chats() {
            return this.$store.getters['chat/chats'];
        },
        chatContacts() {
            return this.$store.getters['chat/chatcontacts'];
        },
        searchQuery: {
            get() {
                return this.$store.state.chat.chatSearchQuery;
            },
            set(val) {
                this.$store.dispatch('chat/setChatSearchQuery', val);
            }
        },
        isActiveChatUser() {
            return (userId) => userId == this.activeChatUser
        }
    },
    methods: {
        getUserStatus(isActiveUser) {
            return (isActiveUser) ? this.$store.state.AppActiveUser.status : this.contacts[this.activeChatUser].status;
        },
        closeProfileSidebar(value) {
            this.activeProfileSidebar = value
        },
        updateUserProfileId(userId) {
            this.userProfileId = userId;
            this.activeProfileSidebar = !this.activeProfileSidebar;
        },
        updateActiveChatUser(contactId) {
            this.activeChatUser = contactId;
            // if(this.$store.getters['chat/chatDataOfUser'](this.activeChatUser)) {
            //     this.$store.dispatch('chat/markSeenAllMessages', contactId)
            // }
            // let chatData = this.$store.getters['chat/chatDataOfUser'](this.activeChatUser);
            // if(chatData) this.isChatPinned = chatData.isPinned;
            // else this.isChatPinned = false
            // this.toggleChatSidebar();
            // this.typedMessage = '';
        },
        showProfileSidebar(userId) {
            this.userProfileId = userId;
            this.activeProfileSidebar = !this.activeProfileSidebar;
        },
        sendMsg() {
            if(!this.typedMessage) return
            const payload = {
                isPinned: this.isChatPinned,
                'msg': {
                    'textContent': this.typedMessage,
                    'time': String(new Date()),
                    'isSent': true,
                    'isSeen': false,
                },
                'id': this.activeChatUser
            }
            this.$store.dispatch('chat/sendChatMessage', payload)
            this.typedMessage = '';
            this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
        },
        toggleIsChatPinned(value) {
            this.isChatPinned = value;
        },
        handleWindowResize(event) {
            this.windowWidth = event.currentTarget.innerWidth;
            this.setSidebarWidth();
        },
        setSidebarWidth() {
            if(this.windowWidth < 1200) {
                this.isChatSidebarActive = this.clickNotClose = false;
            }else {
                this.isChatSidebarActive = this.clickNotClose = true;
            }
        },
        toggleChatSidebar(value = false) {
            if(!value && this.clickNotClose) return
            this.isChatSidebarActive = value;
        },
        // 初始化websocket
        initWebSocket() {
          if (typeof WebSocket === 'undefined') {
            return console.log("你的浏览器不支持websocket")
          }
          this.websocket = new WebSocket(this.wsUrl + "/" + localStorage.getItem("userId"),[localStorage.getItem("token")]);
          this.websocket.onmessage = this.websocketOnMessage;
          this.websocket.onopen = this.websocketOnOpen;
          this.websocket.onerror = this.websocketOnError;
          this.websocket.onclose = this.websocketOnClose;
        },
      websocketOnMessage(e) {
        // 接收服务器返回的信息
        let data = JSON.parse(e.data);
        if (data.isSystem) {
          // 系统消息
          console.log("接收到系统消息", data.message)
        } else {

        }
      },
      websocketOnOpen() {
        console.log("连接成功")
        this.websocketOnSend({name: '张三'})
      },
      websocketOnError() {
        // 连接建立失败
        setTimeout(() => {
          this.initWebSocket()
        }, 2000)
      },
      websocketOnClose(e) {
        // console.log('断开连接', e)
        // // 关闭
        // // 离开路由之后断开websocket连接
        // this.websocket.onclose();
      },
      websocketOnSend(data) {
          this.websocket.send(JSON.stringify(data))
      }
    },
    components: {
        VuePerfectScrollbar,
        ChatContact,
        UserProfile,
        ChatNavbar,
        ChatLog,
    },
    created() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.handleWindowResize);
        })
        this.setSidebarWidth();
    },
    mounted() {
      this.initWebSocket()
    },
    beforeDestroy: function () {
        // 离开路由之后断开websocket连接
        this.websocket.onclose();
        window.removeEventListener('resize', this.handleWindowResize)
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/apps/chat.scss";
</style>
