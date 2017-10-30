<template>
    <div>
        <Myheader txt="我的">
            <img src="../../assets/images/ic_settings.png" alt="" class="r-img" slot="right">
        </Myheader>
        <Cell title="提醒" >
            <img src="../../assets/images/ic_mine_notification.png" alt="" slot="icon" class="cell-left">
            <img src="../../assets/images/ic_arrow_gray_small.png" alt="" slot="cell-img" class="cell-right">
        </Cell>
    </div>
</template>

<script>
    import Myheader from '../../components/header.vue'
    import Cell from '../../components/cell.vue'

    export default {
        components:{
            Myheader,
            Cell
        }
    }
</script>

<style>

</style>