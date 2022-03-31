<!-- =========================================================================================
  File Name: Button.vue
  Description: Buttons - Imports all page portions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="button-demo">
    <button-group-basic></button-group-basic>
    <button-group-toolbar></button-group-toolbar>
    <button-group-size></button-group-size>
    <button-group-vertical></button-group-vertical>
  </div>
</template>

<script>
import ButtonGroupBasic from './sub/ButtonGroupBasic.vue'
import ButtonGroupToolbar from './sub/ButtonGroupToolbar.vue'
import ButtonGroupSize from './sub/ButtonGroupSize.vue'
import ButtonGroupVertical from './sub/ButtonGroupVertical.vue'

export default {
  components: {
    ButtonGroupBasic,
    ButtonGroupToolbar,
    ButtonGroupSize,
    ButtonGroupVertical,
  }
}

</script>
