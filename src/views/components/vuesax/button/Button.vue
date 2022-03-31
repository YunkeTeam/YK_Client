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
        <button-filled></button-filled>
        <button-border></button-border>
        <button-flat></button-flat>
        <button-line-down></button-line-down>
        <button-gradient></button-gradient>
        <button-relief></button-relief>
        <button-color></button-color>
        <button-text-color></button-text-color>
        <button-icon></button-icon>
        <button-icon-only></button-icon-only>
        <button-size></button-size>
        <button-router></button-router>
        <button-link></button-link>
    </div>
</template>

<script>
import ButtonFilled from './sub/ButtonFilled.vue'
import ButtonBorder from './sub/ButtonBorder.vue'
import ButtonFlat from './sub/ButtonFlat.vue'
import ButtonLineDown from './sub/ButtonLineDown.vue'
import ButtonGradient from './sub/ButtonGradient.vue'
import ButtonRelief from './sub/ButtonRelief.vue'
import ButtonColor from './sub/ButtonColor.vue'
import ButtonTextColor from './sub/ButtonTextColor.vue'
import ButtonIcon from './sub/ButtonIcon.vue'
import ButtonIconOnly from './sub/ButtonIconOnly.vue'
import ButtonSize from './sub/ButtonSize.vue'
import ButtonRouter from './sub/ButtonRouter.vue'
import ButtonLink from './sub/ButtonLink.vue'

export default{
    components: {
        ButtonFilled,
        ButtonBorder,
        ButtonFlat,
        ButtonLineDown,
        ButtonGradient,
        ButtonRelief,
        ButtonColor,
        ButtonTextColor,
        ButtonIcon,
        ButtonIconOnly,
        ButtonSize,
        ButtonRouter,
        ButtonLink,
    }   
}
</script>