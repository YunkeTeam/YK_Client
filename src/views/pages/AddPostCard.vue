<!--
  发布帖子信息
 -->
<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>发布帖子</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">

      <div class="p-6">
        <!-- 标题 -->
        <vs-input label="标题" name="name" v-model="name" class="mt-5 w-full" />
        <!-- 描述信息 -->
        <vs-textarea label="描述信息" name="price" v-model="price" class="mt-5 w-full" />

        <!-- IMG -->
        <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" />
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6">发布</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">取消</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      category: 'audio',
      order_status: 'pending',
      price: '',

      category_choices: [
        {text:'未知',value:'未知'},
        {text:'二手商品',value:'二手商品'},
        {text:'兼职信息',value:'兼职信息'},
        {text:'失物招领',value:'失物招领'}
      ],
      order_status_choices: [
        {text:'Running',value:'running'},
        {text:'Completed',value:'completed'},
        {text:'Canceled',value:'canceled'},
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          this.initValues();
        }
      }
    }
  },
  methods: {
    initValues() {
      this.name = '';
      this.category = 'audio';
      this.order_status = 'pending';
      this.price = '';
      this.$refs.fileUpload.srcs = [];
    }
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
