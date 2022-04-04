<!--
  个人中心页面
-->

<template>
    <div id="demo-basic-card">
        <div class="vx-row">
          <!--COL 1-->
          <div class="vx-col w-full lg:w-1/4">
            <vx-card class="p-2 mt-base">
              <div class="text-center">
                <h4>{{ card.name }}</h4>
              </div>
              <vs-avatar class="mx-auto my-6 block" size="80px" :src="require(`@/assets/images/portrait/small/${ card.userImg }`)" />
              <div class="flex justify-between text-center">
                <span>
                    <p class="text-xl font-semibold">{{ card.user_meta_1_title }}</p>
                    <small class="text-grey">{{ card.user_meta_1_label }}</small>
                </span>
                <span>
                    <p class="text-xl font-semibold">{{ card.user_meta_2_title }}</p>
                    <small class="text-grey">{{ card.user_meta_2_label }}</small>
                </span>
                <span>
                    <p class="text-xl font-semibold">{{ card.user_meta_3_title }}</p>
                    <small class="text-grey">{{ card.user_meta_3_label }}</small>
                </span>
              </div>
              <vs-button type="gradient" class="w-full mt-6" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card.profession }}</vs-button>
            </vx-card>
            <vx-card class="overlay-card overflow-hidden mt-base">
              <template slot="no-body">
                <img :src="require(`@/assets/images/pages/${card_7.overlay_img}`)" alt="user-profile-cover" class="responsive">
                <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-white mb-4">{{ card_7.title }}</h4>
                  <p>{{ card_7.text }}</p>
                </div>
              </template>
            </vx-card>
          </div>
          <!--COL 2-->
          <div class="vx-col w-full lg:w-3/4">
            <vx-card class="mt-base">
              <vs-tabs vs-alignment="fixed" alignment="fixed">
                <!--修改个人资料模块-->
                <vs-tab vs-label="PersonalInformation" vs-icon="account_circle" label="个人资料">
                  <div class="mt-3">
                    <div class="vx-col w-full mb-base">
                      <vx-card>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>头像</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                              <img v-if="imageUrl" :src="imageUrl" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>用户名</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <vs-input class="w-full"  v-model="input5" />
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>出生日期</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <div style="display: flex;justify-content: left">
                              <span style="margin-right: 1rem">
                                <datepicker ref="programaticOpen" :language="languages[language]" format="yyyy年MM月dd日"></datepicker>
                              </span>
                              <vs-button class="mb-4" @click="$refs.programaticOpen.showCalendar()">编辑</vs-button>
                            </div>
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>性别</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                              <ul style="display: flex;">
                                <li style="margin-right: 1.5rem">
                                  <vs-radio v-model="radios1" vs-value="男">男</vs-radio>
                                </li>
                                <li>
                                  <vs-radio v-model="radios1" vs-value="女">女</vs-radio>
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>邮箱</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <vs-input type="email" class="w-full" v-model="input6" />
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>电话号码</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <vs-input class="w-full" v-model="input7" />
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>职位</span>
                          </div>
                          <div class="vx-col sm:w-2/3 w-full">
                            <vs-input type="text" class="w-full" v-model="input8" />
                          </div>
                        </div>
                        <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                            <span>标语</span>
                          </div>
                          <div class="vx-col lg:w-1/2 w-full">
                            <div>
                              <vs-textarea counter="20" label="最大字数: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
                            </div>
                          </div>
                        </div>
                        <div class="vx-row">
                          <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button class="mr-3 mb-2">保存</vs-button>
                          </div>
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </vs-tab>
                <!--修改个人密码模块-->
                <vs-tab vs-label="ResetPassword" vs-icon="message" label="更改密码">
                  <div class="mt-3">
                    <vx-card>
                      <div class="mt-5">
                        <form>
                          <div class="flex justify-center mt-base">
                            <div class="vx-row lg:w-1/2 w-full">
                              <div class="vx-col w-full">
                                <vs-input v-validate="'required|alpha'" placeholder="Your Name" name="name" v-model="name" class="mt-5 w-full" />
                                <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                              </div>

                              <div class="vx-col lg:w-1/2 w-full">
                                <vs-input v-validate="'required|email'" placeholder="Your Email" name="email" v-model="email" class="mt-5 w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                              </div>

                              <div class="vx-col lg:w-1/2 w-full">
                                <vs-input v-validate="'required|alpha_dash'" placeholder="Old Username" name="old_password" v-model="old_password" class="mt-5 w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('old_password')">{{ errors.first('old_password') }}</span>
                              </div>

                              <div class="vx-col lg:w-1/2 w-full">
                                <vs-input type="password" v-validate="'required|min:8|max:15'" ref="password" placeholder="New Password" name="password" v-model="password" class="mt-5 w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                              </div>

                              <div class="vx-col lg:w-1/2 w-full">
                                <vs-input type="password" v-validate="'required|min:8|max:15|confirmed:password'" data-vv-as="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
                              </div>

                            </div>
                          </div>
                          <div class="flex justify-center mt-base">
                            <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">更改</vs-button>
                          </div>
                        </form>
                      </div>
                    </vx-card>
                  </div>
                </vs-tab>
              </vs-tabs>
            </vx-card>
          </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Datepicker from 'vuejs-datepicker';
import * as lang from 'vuejs-datepicker/src/locale';

export default{
    data() {
        return {
            card: {
                userImg: 'avatar-s-12.png',
                name: 'Titos',
                profession: '后端工程师',
                user_meta_1_title: 568,
                user_meta_1_label: '帖子量',
                user_meta_2_title: '78',
                user_meta_2_label: '信息发布量',
                user_meta_3_title: 12,
                user_meta_3_label: '博客量',
            },

            card_7: {
                overlay_img: 'card-image-6.jpg',
                title: '标语',
                text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop.',
            },

            name: '',
            email: '',
            msg: '',
            password: "",
            confirm_password: "",
            old_password: "",
            textarea: '',
            counterDanger: false,
            languages: lang,
            language: "zh",
            radios1: '男',
            imageUrl: 'https://i.imgur.com/ezM6SJ5.png',

            playerOptions: {
                height: '460',
                fluid: true,
                autoplay: false,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ],
                poster: 'https://goo.gl/xcCsDd',
            },
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            wasSidebarOpen: null,
        }
    },
    components: {
        VuePerfectScrollbar,
        videoPlayer,
        Datepicker
    },
    // mounted() {
    //     this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    // },
    methods: {
      submitForm() {
        this.$validator.validateAll().then(result => {
          if(result) {
            // if form have no errors
            alert("form submitted!");
          }else{
            // form have errors
          }
        })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>
