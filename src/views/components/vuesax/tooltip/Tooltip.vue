<!-- =========================================================================================
    File Name: Tooltip.vue
    Description: Tooltip - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="tooltip-demo">
        <tooltip-default></tooltip-default>
        <tooltip-position></tooltip-position>
        <tooltip-delay></tooltip-delay>
        <tooltip-color></tooltip-color>
        <tooltip-title></tooltip-title>
    </div>
</template>

<script>
import TooltipDefault from './sub/TooltipDefault.vue'
import TooltipPosition from './sub/TooltipPosition.vue'
import TooltipDelay from './sub/TooltipDelay.vue'
import TooltipColor from './sub/TooltipColor.vue'
import TooltipTitle from './sub/TooltipTitle.vue'

export default{
    components: {
        TooltipDefault,
        TooltipPosition,
        TooltipDelay,
        TooltipTitle,
        TooltipColor,
    }   
}
</script>