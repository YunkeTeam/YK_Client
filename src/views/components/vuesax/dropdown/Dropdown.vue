<!-- =========================================================================================
    File Name: Dropdown.vue
    Description: Dropdown - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="dropdown-demo">
        <dropdown-default></dropdown-default>
        <dropdown-color></dropdown-color>
        <dropdown-group-option></dropdown-group-option>
        <dropdown-custom-content></dropdown-custom-content>
        <dropdown-button></dropdown-button>
    </div>
</template>

<script>
import DropdownDefault from './sub/DropdownDefault.vue'
import DropdownColor from './sub/DropdownColor.vue'
import DropdownGroupOption from './sub/DropdownGroupOption.vue'
import DropdownCustomContent from './sub/DropdownCustomContent.vue'
import DropdownButton from './sub/DropdownButton.vue'

export default{
    components: {
        DropdownDefault,
        DropdownColor,
        DropdownGroupOption,
        DropdownCustomContent,
        DropdownButton,
    }   
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/dropdown.scss";
</style>