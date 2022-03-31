<!-- =========================================================================================
	File Name: ItemGridView.vue
	Description: Item Component - Grid VIew
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <!-- <div class="item-grid-view vx-row match-height">
        <div class="vx-col" :class="gridColumnWidth" v-for="item in items" :key="item.objectID"> -->
            <vx-card class="grid-view-item mb-base overflow-hidden">
                <template slot="no-body">
                  <div slot="no-body">
                    <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
                  </div>
                  <h5 class="mb-2">{{ card_1.title }}</h5>
                  <p class="text-grey">{{ card_1.subtitle }}</p>
                  <p class="text-grey">{{ card_1.subtitle_2 }}</p>
                  <div class="flex justify-between flex-wrap">
                    <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Download</vs-button>
                    <vs-button class="mt-4" type="border" color="#b9b9b9">View All</vs-button>
                  </div>
                </template>
            </vx-card>
       <!--  </div>
    </div> -->
</template>

<script>
export default{
    props: {
        item: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }        
    }
}
</style>