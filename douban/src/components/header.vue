<template>
    <header :class="{green:isHome}">
        <span>{{txt}}</span>
        <slot name="left"></slot>
        <slot name="right"></slot>
        <slot name="search"></slot>
    </header>
</template>

<script>
export default {
    props:['txt','isFirst'],
    computed:{
        isHome:function(){
            return this.isFirst=="首页"?true:false;
        }
    }
}
</script>

<style>
header{
    width:100%;
    height:44px;
    border-bottom:1px solid #ccc;
    background: #f7f7f7;
    text-align:center;
    line-height:44px;
    position:relative;
}
    header img{
        width:25px;
        position:absolute;
        top:10px;
    }
    .r-img{
        right:10px;
    }
    .l-img{
        right:45px;
    }
    .green{
        background: #42bd56;
    }
    .searchBar input{
        width:85%;
        height:28px;
        position:absolute;
        left:7px;
        bottom:7px;
        border-radius: 5px;
        border:none;
        text-indent:2.5em;
    }
    .searchBar img{
        position:absolute;
        width:20px;
    }
    .searchImg{
        left:13px;
        top:13px;
    }
    .scanImg{
        right:16%;
        top:13px;
    }

</style>