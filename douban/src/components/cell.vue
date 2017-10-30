<template>
    <div class="cell-wrap"  :class="{hot:hot}">
        <div>
            <span><slot name="icon"></slot></span>
            {{ title }}
            <span><slot name="cell-img"></slot></span>
        </div>
        <!--<div>-->
            <!--<slot name="cell-right"></slot>-->
        <!--</div>-->
    </div>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
            default:'',
        },
        hot:{
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style>
    .cell-wrap{
        /*width:100%;*/
        height:40px;
        position:relative;
        border-bottom:1px solid lightgray;
        padding-left:15px;
        line-height:40px;
    }
    .cell-wrap img{
        width:25px;
        position:relative;
    }
    .cell-left{
        right:8px;
        top:7px;
    }
    .cell-right{
        top:7px;
        right:5px;
        float:right;
    }
    .hot{
        border-bottom: none;
    }
    .hot:after{
        content:'';
        width:5px;
        height:20px;
        background-color: orange;
        position:absolute;
        top:8px;
        left:0;
    }
</style>