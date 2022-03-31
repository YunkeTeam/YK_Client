<!-- =========================================================================================
    File Name: Loading.vue
    Description: Loading - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="loading-demo">
        <loading-default></loading-default>
        <loading-type></loading-type>
        <loading-color></loading-color>
        <loading-background></loading-background>
        <loading-contained></loading-contained>
    </div>
</template>

<script>
import LoadingDefault from './sub/LoadingDefault.vue'
import LoadingType from './sub/LoadingType.vue'
import LoadingColor from './sub/LoadingColor.vue'
import LoadingBackground from './sub/LoadingBackground.vue'
import LoadingContained from './sub/LoadingContained.vue'

export default{
    components: {
        LoadingDefault,
        LoadingType,
        LoadingColor,
        LoadingBackground,
        LoadingContained,
    }   
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/loading.scss";
</style>