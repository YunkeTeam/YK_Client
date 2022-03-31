<!-- 信息平台界面 -->

<template>
  <div>
    <ais-instant-search
        :search-client="searchClient"
        index-name="instant_search" id="algolia-instant-search-demo">

      <!-- AIS CONFIG -->
      <ais-configure :hits-per-page.camel="9" />

      <div class="algolia-header mb-4">
        <div class="flex md:items-end items-center justify-between flex-wrap">
          <!-- TOGGLE SIDEBAR BUTTON -->
          <feather-icon
              class="inline-flex lg:hidden cursor-pointer mr-4"
              icon="MenuIcon"
              @click.stop="toggleFilterSidebar" />

          <p class="lg:inline-flex hidden font-semibold algolia-filters-label">过滤</p>

          <div class="flex justify-between items-end flex-grow">
            <!--查询结果提示信息-->
            <p class="font-semibold md:block hidden">5个结果在5ms被发现</p>

            <div class="flex flex-wrap">

              <!-- 排序 -->
              <vs-select
                  :value="currentRefinement"
                  @input="(val) => refine(val)"
                  class="mr-4 vs-input-shadow-drop vs-select-no-border d-theme-input-dark-bg w-48">
                <vs-select-item v-for="item in sortType" :key="item.value" :value="item.value" :text="item.label" />
              </vs-select>
              <!-- ITEM VIEW - GRID/LIST -->
              <div>
                <feather-icon
                    icon="GridIcon"
                    @click="currentItemView='item-grid-view'"
                    class="p-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer"
                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-grid-view'}" />
                <feather-icon
                    icon="ListIcon"
                    @click="currentItemView='item-list-view'"
                    class="p-2 ml-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer hidden sm:inline-flex"
                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-list-view'}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="algolia-content-container" class="relative clearfix">
        <vs-sidebar
            class="items-no-padding vs-sidebar-rounded background-absolute"
            parent="#algolia-content-container"
            :click-not-close="clickNotClose"
            :hidden-background="clickNotClose"
            v-model="isFilterSidebarActive">

          <div class="p-6 filter-container">
            <!-- MULTI RANGE -->
            <h6 class="font-bold mb-3">不同范围</h6>
            <filter-radio></filter-radio>

            <vs-divider />

            <!-- CATEGORIES -->
            <h6 class="font-bold mb-4">信息类型</h6>
            <info-type></info-type>

            <vs-divider />

            <vs-button @click.prevent="true" :disabled="false">CLEAR ALL FILTERS</vs-button>
          </div>
        </vs-sidebar>

        <!-- RIGHT COL -->
        <div :class="{'sidebar-spacer-with-margin': clickNotClose}">
          <!-- 搜索框 -->
          <div class="relative mb-8">

            <!-- SEARCH INPUT -->
            <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Search here" v-model="currentRefinement" @input="refine($event)" @keyup.esc="refine('')"  size="large" />

            <!-- SEARCH LOADING -->
            <span :hidden="!isSearchStalled">Loading...</span>

            <!-- SEARCH ICON -->
            <div slot="submit-icon" class="absolute top-0 right-0 py-4 px-6" v-show="!currentRefinement">
              <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
            </div>

            <!-- CLEAR INPUT ICON -->
            <div slot="reset-icon" class="absolute top-0 right-0 py-4 px-6" v-show="currentRefinement">
              <feather-icon icon="XIcon" svgClasses="h-6 w-6 cursor-pointer" @click="refine('')" />
            </div>
          </div>
          <!-- SEARCH RESULT -->
            <div>
              <!-- GRID VIEW -->
              <template v-if="currentItemView == 'item-grid-view'">
                <div class="items-grid-view vx-row match-height">
                  <div class="vx-col lg:w-1/3 sm:w-1/2 w-full" v-for="item in info" :key="item.objectID">
                    <item-grid-view :item="item"></item-grid-view>
                  </div>
                </div>
              </template>

              <!-- LIST VIEW -->
              <template v-else>
                <div class="items-list-view" v-for="item in info" :key="item.objectID">
                  <item-list-view :item="item"></item-list-view>
                </div>
              </template>
            </div>

          <!-- 翻页 -->
          <vs-pagination
              :total="nbPages"
              :max="7"
              :value="currentRefinement + 1"
              @input="(val) => { refine(val - 1) }" />
        </div>
      </div>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import FilterRadio from './FilterRadio.vue'
import InfoType from "./InfoType";

export default {
  components: {
    ItemGridView: () => import("./ItemGridView.vue"),
    ItemListView: () => import("./ItemListView.vue"),
    FilterRadio,
    InfoType
  },
  data() {
    return {
      searchClient: algoliasearch(
          'latency',
          '6be0576ff61c053d5f9a3225e2a90f76'
      ),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      windowWidth: window.innerWidth,
      currentItemView: 'item-grid-view',
      sortType: [
        { value: 'sort', label: '排序' },
        { value: 'latest_release', label: '最新发布' },
        { value: 'earliest_release', label: '最早发布' },
      ],
      info: [
        { imgUrl: require(`@/assets/images/pages/404.png`), title: '皮鞋', description: '这是在意大利进口的', username: 'Titos', email: '634522023@qq.com', type: '二手商品', releaseTime: '2022-03-22'},
        { imgUrl: require(`@/assets/images/pages/404.png`), title: '招小牛马', description: '这是在意大利进口的', username: 'Titos', email: '634522023@qq.com', type: '兼职信息', releaseTime: '2022-03-22'},
        { imgUrl: require(`@/assets/images/pages/404.png`), title: '丢失一卡通', description: '这是在意大利进口的', username: 'Titos', email: '634522023@qq.com', type: '失物招领', releaseTime: '2022-03-22'},
        { imgUrl: require(`@/assets/images/pages/404.png`), title: '零食', description: '这是在意大利进口的', username: 'Titos', email: '634522023@qq.com', type: '二手商品', releaseTime: '2022-03-22'}
      ]
    };
  },
  computed: {
    toValue() {
      return (value, range) =>
          [
            value.min !== null ? value.min : range.min,
            value.max !== null ? value.max : range.max,
          ];
    },

    // GRID VIEW
    isInCart() {
      return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
    },
    isInWishList() {
      return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
  },
  methods: {
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth() {
      if(this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false;
      }else {
        this.isFilterSidebarActive = this.clickNotClose = true;
      }
    },

    // GRID VIEW - ACTIONS
    toggleFilterSidebar() {
      if(this.clickNotClose) return
      this.isFilterSidebarActive = !this.isFilterSidebarActive;
    },
    toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    },
    additemInCart(item) {
      this.$store.dispatch('eCommerce/additemInCart', item)
    },
    cartButtonClicked(item) {
      if(this.isInCart(item.objectID)) this.$router.push('/apps/eCommerce/checkout')
      else this.additemInCart(item)
    }
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleWindowResize);
    })
    this.setSidebarWidth();
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
};
</script>

<style lang="scss">
#algolia-instant-search-demo {
  .algolia-header {
    .algolia-filters-label {
      width: calc(260px + 2.4rem);
    }
  }

  #algolia-content-container {

    .vs-sidebar {
      position: relative;
      float: left;
    }
  }

  .algolia-search-input-right-aligned-icon {
    padding: 1rem 1.5rem;
  }

  .algolia-price-slider {
    min-width: unset;
  }

  .item-list-view {
    .algolia-result-img {

    }
  }

  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
    min-width: 50%;
  }

  .item-view-secondary-action-btn {
    min-width: 50%;
  }
}

.theme-dark {
  #algolia-instant-search-demo {
    #algolia-content-container {
      .vs-sidebar {
        background-color: #10163a;
      }
    }
  }
}

@media (min-width: 992px) {
  .vs-sidebar-rounded {
    .vs-sidebar { border-radius: .5rem; }
    .vs-sidebar--items {border-radius: .5rem; }
  }
}

@media (max-width: 992px) {
  #algolia-content-container {
    .vs-sidebar {
      position: absolute !important;
      float: none !important;
    }
  }
}
</style>
