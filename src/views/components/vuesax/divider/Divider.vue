<!-- =========================================================================================
    File Name: Divider.vue
    Description: Divider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="divider-demo">
        <divider-default></divider-default>
        <divider-text></divider-text>
        <divider-text-position></divider-text-position>
        <divider-color></divider-color>
        <divider-icon></divider-icon>
        <divider-style></divider-style>
    </div>
</template>

<script>
import DividerDefault from './sub/DividerDefault.vue'
import DividerText from './sub/DividerText.vue'
import DividerTextPosition from './sub/DividerTextPosition.vue'
import DividerColor from './sub/DividerColor.vue'
import DividerIcon from './sub/DividerIcon.vue'
import DividerStyle from './sub/DividerStyle.vue'

export default{
    components: {
        DividerDefault,
        DividerText,
        DividerTextPosition,
        DividerColor,
        DividerIcon,
        DividerStyle,
    }   
}
</script>