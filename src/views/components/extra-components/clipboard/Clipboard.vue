<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="page-clipboard-demo">
        <clipboard-directive></clipboard-directive>
        <clipboard-without-directive></clipboard-without-directive>
    </div>
</template>

<script>
import ClipboardDirective from './sub/ClipboardDirective.vue'
import ClipboardWithoutDirective from './sub/ClipboardWithoutDirective.vue'

export default{
    components: {
        ClipboardDirective,
        ClipboardWithoutDirective
    }   
}
</script>