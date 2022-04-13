<!--
  菜单个人数据对应的页面
-->

<template>
  <div id="dashboard-analytics">
    <!--轮播图-->
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <home-carousel></home-carousel>
      </div>
    </div>
    <div class="vx-row">
      <!-- CARD 1: CONGRATS -->
      <div class="vx-col w-full lg:w-1/2 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="../../assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="../../assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
          <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">Congratulations Titos,</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">欢迎来到<strong>云客在线服务系统</strong></p>
        </vx-card>
      </div>

      <!-- CARD 2: 帖子获赞数量可视化展示 -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="HeartIcon" statistic="300K" statisticTitle="帖子获赞量" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
      </div>

      <!-- CARD 3: 帖子发布数量可视化展示 -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="TwitterIcon" statistic="20K" statisticTitle="帖子发布量" :chartData="analyticsData.ordersRecevied" color='warning' type='area'></statistics-card-line>
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 4: 系统人数情况 -->
      <div class="vx-col w-full md:w-1/3 mb-base">
        <vx-card title="系统在线人数">
            <template slot="actions">
                <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
            </template>

            <!-- CHART -->
            <template slot="no-body">
                <div class="mt-10">
                    <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                </div>
            </template>

            <!-- DATA -->
            <div class="flex justify-between text-center" slot="no-body-bottom">
                <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                    <p class="mt-4">活跃用户</p>
                    <p class="mb-4 text-3xl font-semibold">617</p>
                </div>
                <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                    <p class="mt-4">系统总人数</p>
                    <p class="mb-4 text-3xl font-semibold">13,561</p>
                </div>
            </div>
        </vx-card>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
      <div class="vx-col w-full md:w-2/3 mb-base">
        <vx-card title="博客数据统计">
          <template slot="actions">
              <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
          </template>
          <div slot="no-body" class="p-6 pb-0">
              <div class="flex">
                  <div class="mr-6">
                      <p class="mb-1 font-semibold">今日发布数量</p>
                      <p class="text-3xl text-success">8<sup class="text-base mr-1">篇</sup></p>
                  </div>
                  <div>
                      <p class="mb-1 font-semibold">总的发布数量</p>
                      <p class="text-3xl">120<sup class="text-base mr-1">篇</sup></p>
                  </div>
              </div>
              <vue-apex-charts type=line height=266 :options="analyticsData.revenueComparisonLine.chartOptions" :series="analyticsData.revenueComparisonLine.series" />
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from '../../analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import HomeCarousel from './HomeCarousel.vue'

export default {
    name: 'PersonalData',
    data() {
        return {
            analyticsData: analyticsData,
            isImp: false,
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            show: false,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
            users: [{
                    "orderNo": 879985,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Cinar Knowles",
                    "operatorImg": "avatar-s-2.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' }
                    ],
                    "location": "Anniston, Alabama",
                    "distance": "130 km",
                    "distPercent": 80,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 156897,
                    "status": "Pending",
                    "statusColor": "warning",
                    "operator": "Britany Ryder",
                    "operatorImg": "avatar-s-4.png",
                    usersLiked: [
                        { name: 'Trina Lynes', img: 'avatar-s-1.png' },
                        { name: 'Lilian Nenez', img: 'avatar-s-2.png' },
                        { name: 'Alberto Glotzbach', img: 'avatar-s-3.png' }
                    ],
                    "location": "Cordova, Alaska",
                    "distance": "234 km",
                    "distPercent": 60,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 568975,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Kishan Ashton",
                    "operatorImg": "avatar-s-1.png",
                    usersLiked: [
                        { name: 'Lai Lewandowski', img: 'avatar-s-6.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Jeffrey Gerondale', img: 'avatar-s-9.png' },
                    ],
                    "location": "Florence, Alabama",
                    "distance": "168 km",
                    "distPercent": 70,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 245689,
                    "status": "Canceled",
                    "statusColor": "danger",
                    "operator": "Anabella Elliott",
                    "operatorImg": "avatar-s-6.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' }
                    ],
                    "location": "Clifton, Arizona",
                    "distance": "125 km",
                    "distPercent": 95,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                }

            ]
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown,
        HomeCarousel,
    },
}
</script>

<style lang="scss">
#dashboard-analytics {
  .greet-user{
    position: relative;
    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
</style>
