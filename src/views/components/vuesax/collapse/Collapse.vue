<!-- =========================================================================================
    File Name: Collapse.vue
    Description: Collapse - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="collapse-demo">
        <collapse-default></collapse-default>
        <collapse-accordion></collapse-accordion>
        <collapse-type></collapse-type>
        <collapse-open-hover></collapse-open-hover>
        <collapse-change-arrow-icon></collapse-change-arrow-icon>
    </div>
</template>

<script>
import CollapseDefault from './sub/CollapseDefault.vue'
import CollapseAccordion from './sub/CollapseAccordion.vue'
import CollapseType from './sub/CollapseType.vue'
import CollapseOpenHover from './sub/CollapseOpenHover.vue'
import CollapseChangeArrowIcon from './sub/CollapseChangeArrowIcon.vue'

export default{
    components: {
        CollapseDefault,
        CollapseAccordion,
        CollapseType,
        CollapseChangeArrowIcon,
        CollapseOpenHover,
    }   
}
</script>