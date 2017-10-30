<template>
    <div class="banner">
        <div class="swiper-container" :class="swiperId">
            <div class="swiper-wrapper">
                <slot name="swiper-con"></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" v-show="paginationShow" :style="{'text-align':paginationPosition}"></div>

            <!-- 如果需要导航按钮 -->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->

            <!-- 如果需要滚动条 -->
            <!--<div class="swiper-scrollbar"></div>-->
        </div>
    </div>

</template>

<script>
    import  '../assets/js/swiper.min.js'
    export default {
        props:{
            swiperId:{
                type:String,
                default:''
            },
            paginationShow:{
                type:Boolean,
                default:true
            },
            paginationPosition:{
                type:String,
                default:'center'
            },
            paginationType:{
                type:String,
                default:'bullets'
            },
            autoPlay:{
                type:Number,
                default:5000,
            },
        },
        mounted:function(){
            var that = this;
            new Swiper('.'+that.swiperId,{
                loop:true,
                pagination:'.swiper-pagination',
                paginationType:that.paginationType,
                autoplay:that.autoPlay,
            })
        }
    }
</script>

<style>
@import "../assets/css/swiper.min.css";
    .banner{
        width:100%;
        /*height: 128px;*/
        overflow: hidden;
    }
    .banner .swiper-container img{
        width:100%;
    }
    .swiper-pagination-bullet-active{
        background: white;
    }
</style>