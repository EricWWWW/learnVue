<template>
    <div id="demo" class="tabbar" >
        <Item txt="首页" mark="1" :nowIndex="nowIndex" @change="getVal">
            <img src="../assets/img/tabbar/tab_bar_01_pre.png" alt="" slot="black">
            <img src="../assets/img/tabbar/1.png" alt="" slot="red">
        </Item>
        <Item txt="分类" mark="2"  :nowIndex="nowIndex"  @change="getVal">
            <img src="../assets/img/tabbar/tab_bar_02_pre.png" alt="" slot="black">
            <img src="../assets/img/tabbar/2.png" alt="" slot="red">
        </Item>
        <Item txt="发现" mark="3" :nowIndex="nowIndex"  @change="getVal">
            <img src="../assets/img/tabbar/tab_bar_03_pre.png" alt="" slot="black">
            <img src="../assets/img/tabbar/3.png" alt="" slot="red">
        </Item>
        <Item txt="购物车" mark="4" :nowIndex="nowIndex"  @change="getVal">
            <img src="../assets/img/tabbar/tab_bar_04_pre.png" alt="" slot="black">
            <img src="../assets/img/tabbar/4.png" alt="" slot="red">
        </Item>
        <Item txt="我的考拉" mark="5" :nowIndex="nowIndex"  @change="getVal">
            <img src="../assets/img/tabbar/tab_bar_05_pre.png" alt="" slot="black">
            <img src="../assets/img/tabbar/5.png" alt="" slot="red">
        </Item>
    </div>
</template>

<script>
import Item from './item'

export default {
    components:{
        Item
    },
    data:function(){
        return {
            nowIndex:-1
        }
    },
    methods:{
        getVal:function(val){
            this.nowIndex = val;
        }
    }

}
</script>

<style>
    .tabbar{
        width:100%;
        height:64px;
        position: fixed;
        left:0;
        bottom:0;
        border-top:1px solid #ccc;
    }
</style>