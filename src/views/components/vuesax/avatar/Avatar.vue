<!-- =========================================================================================
    File Name: Avatar.vue
    Description: Avatars
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="avatar-demo">
        <avatar-default></avatar-default>
        <avatar-size></avatar-size>
        <avatar-color></avatar-color>
        <avatar-with-badge></avatar-with-badge>
        <avatar-icon></avatar-icon>
    </div>
</template>

<script>
import AvatarDefault from './sub/AvatarDefault.vue'
import AvatarSize from './sub/AvatarSize.vue'
import AvatarColor from './sub/AvatarColor.vue'
import AvatarWithBadge from './sub/AvatarWithBadge.vue'
import AvatarIcon from './sub/AvatarIcon.vue'

export default{
    components: {
        AvatarDefault,
        AvatarSize,
        AvatarColor,
        AvatarWithBadge,
        AvatarIcon,
    }   
}
</script>