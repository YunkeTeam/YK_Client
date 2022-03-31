<!--  -->


<template>
    <vx-card noShadow="true">
        <ul class="centerx">
            <li>
                <vs-radio v-model="radios1" vs-value="noban">无限制</vs-radio>
            </li>
            <li>
                <vs-radio v-model="radios1" vs-value="today">今天</vs-radio>
            </li>
            <li>
                <vs-radio v-model="radios1" vs-value="yesterday">昨天</vs-radio>
            </li>
<!--            <li class="op-block">-->
<!--                {{radios1}}-->
<!--            </li>-->
        </ul>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            radios1: 'luis',
        }
    }
}
</script>