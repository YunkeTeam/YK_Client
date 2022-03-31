<!-- =========================================================================================
    File Name: CheckboxArrayValue.vue
    Description: Create array using checked checkboxes
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card noShadow="true">
        <ul class="demo-alignment">
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="allType">全部类型</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="goods">二手商品</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="job">兼职信息</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="lost">失物招领</vs-checkbox>
            </li>
            
<!--            <li class="op-block">-->
<!--                {{checkBox1}}-->
<!--            </li>-->
        </ul>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            checkBox1: ['luis']
        }
    }
}
</script>