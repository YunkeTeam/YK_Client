<!-- =========================================================================================
    File Name: Sidebar.vue
    Description: Sidebar - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="sidebar-demo">
        <sidebar-default></sidebar-default>
        <sidebar-parent></sidebar-parent>
        <sidebar-static></sidebar-static>
        <sidebar-group-collapsed></sidebar-group-collapsed>
        <sidebar-right></sidebar-right>
        <sidebar-reduce-expand></sidebar-reduce-expand>
        <sidebar-custom></sidebar-custom>
    </div>
</template>

<script>
import SidebarDefault from './sub/SidebarDefault.vue'
import SidebarParent from './sub/SidebarParent.vue'
import SidebarStatic from './sub/SidebarStatic.vue'
import SidebarGroupCollapsed from './sub/SidebarGroupCollapsed.vue'
import SidebarRight from './sub/SidebarRight.vue'
import SidebarReduceExpand from './sub/SidebarReduceExpand.vue'
import SidebarCustom from './sub/SidebarCustom.vue'

export default{
    components: {
        SidebarDefault,
        SidebarParent,
        SidebarStatic,
        SidebarGroupCollapsed,
        SidebarRight,
        SidebarReduceExpand,
        SidebarCustom,
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/sidebar.scss";
</style>
