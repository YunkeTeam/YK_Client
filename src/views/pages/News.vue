<!--
  新闻页面
-->


<template>
    <div id="news-page" class="d-theme-border-grey-light rounded relative overflow-hidden">
        <div class="search-page__search-bar flex items-center">
            <vs-input placeholder="搜索内容..." v-model="searchQuery" class="w-full input-rounded-full no-icon-border" icon="icon-search" icon-pack="feather" />
        </div>
        <div class="search-page__serch-menu flex flex-wrap items-center md:justify-between mt-8">
            <div class="flex flex-wrap">
                <span class="search-tab-filter">所有</span>
                <span class="search-tab-filter">热点</span>
                <span class="search-tab-filter">校园</span>
                <span class="search-tab-filter">生活</span>
                <span class="search-tab-filter">公告</span>
                <vs-dropdown vs-trigger-click class="search-tab-filter">
                    <span>更多</span>
                    <vs-dropdown-menu class="search-page__more-dropdown">
                        <vs-dropdown-item>养生</vs-dropdown-item>
                        <vs-dropdown-item>军事</vs-dropdown-item>
                        <vs-dropdown-item>娱乐</vs-dropdown-item>
                        <vs-dropdown-item>体育</vs-dropdown-item>
                        <vs-dropdown-item>科技</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
        </div>
        <div class="search-meta flex flex-wrap justify-between mt-6">
            <span class="mb-4">大约 320 个结果 (0.35s)</span>
            <div>
                <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <span class="flex items-center">
                        <span>发布时间</span>
                        <feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>
                    </span>
                    <vs-dropdown-menu class="w-48">
                        <vs-dropdown-item>任意时间</vs-dropdown-item>
                        <vs-dropdown-item>过去一小时</vs-dropdown-item>
                        <vs-dropdown-item>过去一天</vs-dropdown-item>
                        <vs-dropdown-item>过去一周</vs-dropdown-item>
                        <vs-dropdown-item>过去一个月</vs-dropdown-item>
                        <vs-dropdown-item>过去一年</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
        </div>

        <!-- SEARCH RESULTS -->
        <div class="vx-row mt-4 md:flex-row flex-col-reverse">
            <div class="vx-col md:w-3/5 lg:w-2/3 w-full">
                <vx-card class="search-page__search-results lg:p-2">
                    <div class="vx-row search-Page__search-result" v-for="(result, index) in searchResults" :key="index" :class="{ 'mt-8': index }" @click.stop="openNews(result)">
                        <!--新闻图片-->
                        <div class="vx-col mb-2" :class="result.resultImg? 'lg:w-1/5 md:w-1/4 w-full' : 'w-full'" v-if="result.resultImg">
                            <img :src="require(`@/assets/images/pages/${result.resultImg}`)" alt="result-img" class="responsive" v-if="result.resultImg">
                        </div>
                        <div class="vx-col" :class="result.resultImg ? 'lg:w-4/5 md:w-3/4' : 'w-full'">
                            <!--新闻标题-->
                            <a href="javascript:;" class="inline-block text-2xl"  rel="nofollow">{{ result.title }}</a><br>
                            <!-- 新闻发布时间 -->
                            <span v-if="result.time">{{ result.time | date(true) }} - </span>
                            <!--新闻描述-->
                            <span>{{ result.description | truncate(225) | tailing('...') }}</span>
                        </div>
                    </div>
                </vx-card>

                <vs-pagination :total="40" v-model="currentPage" class="mt-base"></vs-pagination>
            </div>

            <!-- 公告界面 -->
            <div class="vx-col md:w-2/5 lg:w-1/3 w-full mb-base">
              <vx-card
                  title="通告"
                  title-color="#fff"
                  content-color="#fff"
                  card-background="linear-gradient(120deg, #7f7fd5, #86a8e7, #91eae4)"
                  remove-card-action>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>
              </vx-card>
            </div>
        </div>
<!--      <news-detail-->
<!--          :openNewsId = "openNewsId"-->
<!--          :isSidebarActive = "isSidebarActive"-->
<!--          @closeSidebar="closeNewsDetail">-->
<!--      </news-detail>-->
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import newsDetail from './NewsDetail.vue'
import MailItem from "../apps/email/MailItem";
import EmailSidebar from "../apps/email/EmailSidebar";
import EmailView from "../apps/email/EmailView";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default{
    data() {
        return {
            openNewsId: 1,
            isSidebarActive: false,
            searchQuery: '',
            currentPage: 1,
            knowledgePanel: {
                img: ['modern.jpg'],
                title: 'Modern Admin - Clean Bootstrap 4 Dashboard HTML Template',
                subtitle: 'Clean Bootstrap 4 Dashboard HTML Template',
                description: 'Clean Bootstrap 4 Dashboard HTML Template + Bitcoin Dashboard can be used for any type of web applications: Project Management, eCommerce backends, CRM, Analytics, Fitness or any custom admin panels.',
                info: [
                    { title: '1,367', subtitle: 'Sales' },
                    { title: '74', subtitle: 'Comments' },
                    { title: '5', subtitle: 'Ratings' },
                ],
                externalLink: {
                    title: 'View on Themeforest',
                    icon: 'ExternalLinkIcon',
                    url: 'https://themeforest.net/item/modern-admin-clean-bootstrap-4-dashboard-html-template/21430660',
                },
                resultMetaList: [
                    { name: 'Bootstrap', value: 'v4.13 updated' },
                    { name: 'Created', value: 'Mar 8 2018' },
                    { name: 'Last Update', value: 'Nov 28 2018' },
                    { name: 'Documentation', value: 'Well Documented' },
                    { name: 'Layout', value: 'Responsive' },
                ],
                suggestedSearches: [
                    { name: 'Apex', img: '1-apex.png', url: 'https://themeforest.net/item/apex-angular-4-bootstrap-admin-template/20774875'},
                    { name: 'Convex', img: '3-convex.png', url: 'https://themeforest.net/item/convex-angular-bootstrap-admin-dashboard-template/22424619'},
                    { name: 'Materialize', img: '4-materialize.png', url: 'https://themeforest.net/item/materialize-material-design-admin-template/11446068'},
                    { name: 'Stack', img: '2-stack.png', url: 'https://themeforest.net/item/stack-responsive-bootstrap-4-admin-template/20039431'},
                ]
            },
            searchResults: [
                {
                    title: 'Attire bench - Quick win shoot me an email',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    resultImg: 'search-result.jpg',
                    metaData: {
                        ratings: 4.5,
                        info: ['17 reviews', '12 votes', '28.00 USD', 'In Stock']
                    },
                    time: 'Mon Feb 23 2017 07:45:00 GMT+0000 (GMT)',
                    description: 'Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer cheesecake. Sugar plum gingerbread caramels candy canes gummi bears bear claw donut. Oat cake cookie tiramisu sweet halvah sugar plum. Dessert danish oat cake.',
                    author: 'Titos'
                },
                {
                    title: 'The Table - for what do you feel you would',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    resultVideo: [{sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ], poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'}],
                    metaData: {
                        info: ['1M Views', 'Uploaded by PlayStation']
                    },
                    time: 'Mon Jun 25 2016 07:45:00 GMT+0000 (GMT)',
                    description: 'Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer cheesecake. Sugar plum gingerbread caramels candy canes gummi bears bear claw donut. Oat cake cookie tiramisu sweet halvah sugar plum. Dessert danish oat cake.',
                    author: 'Titos'
                },
                {
                    title: 'Microdosing - deep v actually schlitz chia',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    description: 'Wafer liquorice sweet roll jelly beans cake soufflé. Oat cake marzipan chocolate cake sesame snaps jujubes. Dragée biscuit dessert. Chocolate muffin wafer. Sugar plum icing tootsie roll gummi bears marzipan candy canes biscuit.',
                    author: 'Titos'
                },
            ]
        }
    },
    computed: {
        playerOptions() {
            return (media) => {
                return {
                    height: '360',
                    fluid: true,
                    // rmeove this comment if you want to autoplay
                    // autoplay: true,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: media.sources,
                    poster: media.poster,
                }
            }
        }
    },
    methods: {
      openNews(newsDetail) {
        this.$store.commit("updateNewsDetail", newsDetail)
        // 路由
        this.$router.push('/apps/news/newsDetail')
      },
      closeNewsDetail() {
        this.isSidebarActive = false;
      },

    },
    components: {
        videoPlayer,
        newsDetail
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/search.scss";
</style>
