<template>
    <div>
        <Myheader isFirst="首页">
            <img src="../../assets/images/ic_chat_white.png" alt="" class="r-img" slot="right">
            <div slot="search" class="searchBar">
                <input type="text" placeholder="影视 图书 唱片 小组">
                <img src="../../assets/images/ic_group_search_small.png" alt="" class="searchImg">
                <img src="../../assets/images/ic_scan_gray.png" alt="" class="scanImg">
            </div>
        </Myheader>
        <Banner swiperId="go" paginationPosition="right">
            <div slot="swiper-con" class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
            <div slot="swiper-con" class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
            <div slot="swiper-con" class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
        </Banner>
        <Cell title="热点" :hot='true'>

        </Cell>

    </div>
</template>

<script>
    import Myheader from '../../components/header.vue'
    import Banner from '../../components/banner.vue'
    import Cell from '../../components/cell.vue'

    export default {
        components:{
            Myheader,
            Banner,
            Cell
        }
    }
</script>

<style>

</style>