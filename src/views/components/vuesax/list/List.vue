<!-- =========================================================================================
    File Name: List.vue
    Description: List - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="list-demo">
        <list-basic></list-basic>
        <list-header></list-header>
        <list-icon></list-icon>
        <list-content></list-content>
        <list-avatar></list-avatar>
    </div>
</template>

<script>
import ListBasic from './sub/ListBasic.vue'
import ListHeader from './sub/ListHeader.vue'
import ListIcon from './sub/ListIcon.vue'
import ListContent from './sub/ListContent.vue'
import ListAvatar from './sub/ListAvatar.vue'

export default{
    components: {
        ListBasic,
        ListHeader,
        ListIcon,
        ListContent,
        ListAvatar,
    }   
}
</script>