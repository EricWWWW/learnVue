<template>
    <div id="tabbar">
    <Item txt="首页" index="home" :nowIndex="nowIndex" @trans="getVal">
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normal">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="active">
    </Item>
    <Item txt="书影音" index="audio" :nowIndex="nowIndex" @trans="getVal">
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="active">
    </Item>
    <Item txt="广播" index="broadcast" :nowIndex="nowIndex" @trans="getVal">
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="active">
    </Item>
    <Item txt="小组" index="group" :nowIndex="nowIndex" @trans="getVal">
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normal">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="active">
    </Item>
    <Item txt="我的" index="mine" :nowIndex="nowIndex" @trans="getVal">
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="active">
    </Item>
    </div>
</template>

<script>
    import  Item from './item.vue'
    export default {
        components:{
            Item
        },
        data:function(){
            return {nowIndex:'home'}
        },
        methods:{
            getVal:function(val){
                this.nowIndex = val;
            }
        }
    }
</script>

<style>
    #tabbar{
        width:100%;
        height:64px;
        border-top: 1px solid #999;
        position:fixed;
        left:0;
        bottom:0;
    }
</style>