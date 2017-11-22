<template>
  <div class="header">
    <div class="content-container">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon iconfont icon-zuoyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-container" @click="showDetail()">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon iconfont icon-zuoyoujiantou"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow" @click="hideDetail()" transition="fade">
        <div class="detail-wrapper">
          <div class="detail-title">
            {{seller.name}}
          </div>
          <div class="detail-star">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="detail-slogan">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="detail-slogan">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click.stop="hideDetail()">
          <i class="iconfont icon-cha"></i>
        </div>
      </div>

    </transition>
  </div>
</template>
<script>
  import star from '../star/star.vue'
  export default {
      props:{
          seller:{
              type:Object
          },
      },
      data(){
          return {
              detailShow:false,
          }
      },
      methods:{
          showDetail(){
              this.detailShow = true;
              console.log(1);
          },
          hideDetail(){
              this.detailShow = false;
              console.log(this.detailShow);
          }
      },
      created(){
          this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
      components:{
          star
      }
  };
</script>
<style lang="less">
.header{
  position:relative;
  color: #fff;
  overflow:hidden;
  background: rgba(7, 17, 27, 0.5);
  .content-container{
    position: relative;
    padding:24px 12px 18px 24px;
    .avatar{
      display: inline-block;
      vertical-align: top;
      img{
        border-radius: 2px;
      }
    }
    .content{
      display: inline-block;
      font-size: 14px;
      margin-left:16px;
      .title{
        margin:2px 0 8px;
        .brand{
          display:inline-block;
          vertical-align :top;
          width :30px;
          height :18px;
          background-image:url('brand@2x.png');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name{
          margin-left: 6px;
          font-size: 16px;
          line-height:18px;
          font-weight: bold;
        }
      }
      .description{
        margin-bottom:10px;
        line-height:12px;
        font-size: 12px;
      }
      .support{
        .icon{
          display: inline-block;
          width:12px;
          height:12px;
          vertical-align: top;
          margin-right:4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{background-image: url('decrease_1@2x.png')}
          &.discount{background-image: url('discount_1@2x.png')}
          &.guarantee{background-image: url('guarantee_1@2x.png')}
          &.invoice{background-image: url('invoice_1@2x.png')}
          &.special{background-image: url('special_1@2x.png')}
        }
        .text{
          line-height:12px;
          font-size:12px;
        }
      }
    }
    .supports-count{
      position:absolute;
      right:12px;
      bottom:14px;
      padding:0 8px;
      height:24px;
      line-height:24px;
      border-radius:12px;
      background-color: rgba(0,0,0,0.2);
      text-align: center;
      .count{
        font-size:10px;
        vertical-align: top;
      }
      .icon{
        margin-left: 2px;
        height: 24px;
        line-height:24px;
        font-size:10px;
      }
    }
  }
  .bulletin-container{
    @height:28px;
    position:relative;
    background-color: rgba(7,17,27,0.2);
    height: @height;
    line-height: @height;
	padding:0 22px 0 12px;
    white-space:normal;
    overflow:hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    .bulletin-title{
      display: inline-block;
      vertical-align: top;
      margin-top:8px;
      width:22px;
      height:12px;
      background-image:url('bulletin@2x.png');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text{
      vertical-align: top;
      margin:0 4px;
      font-size:10px;
    }
    .icon{
      position: absolute;
      font-size:20px;
      right:12px;
      top:0
    }
  }
  .background{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    filter:blur(10px);
  }
  .detail{
    position:fixed;
    z-index:100;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgba(7, 17, 27, 0.8);
    overflow:auto;
    padding-top:64px;
    padding-bottom:32px;
    &.fade-enter-active{
      animation:bounce-in .5s;
    }
    &.fade-leave-active{
      animation:bounce-out .5s;
    }
    @keyframes bounce-in{
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
    .detail-title,.detail-star{
      text-align: center;
    }
    .detail-star{
      padding:2px 0;
      margin-top:18px;
    }
    .detail-slogan{
      width:80%;
      display:flex;
      margin:28px auto 0 auto;
      .line{
        flex:1;
        position:relative;
        top:-6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .text{
        padding:0px 12px;
        font-size:16px;
        font-weight:700px;
      }
    }
    .supports{
      width:80%;
      margin:22px auto;
      .support-item{
        padding:0 12px;
        font-size:0px;
        margin-bottom: 12px;
        &:last-child{
          margin-bottom:0px;
        }
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: top;
          margin-right: 6px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          &.decrease {
            background-image: url('decrease_2@2x.png')
          }
          &.discount {
            background-image: url('discount_2@2x.png')
          }
          &.guarantee {
            background-image: url('guarantee_2@2x.png')
          }
          &.invoice {
            background-image: url('invoice_2@2x.png')
          }
          &.special {
            background-image: url('special_2@2x.png')
          }
        }
        .text{
          line-height: 12px;
          font-size:12px;
          color:#ffffff;
        }
      }
    }
    .bulletin{
      width:80%;
      height:200px;
      margin:22px auto;
      .content{
        padding:0 12px;
        line-height:24px;
        font-size:12px;
      }
    }
  }
  .detail-close{
    position:relative;;
    width:32px;
    height:32px;
    margin:-64px auto 0 auto;
    clear:both;
    font-size:32px;
  }
}
</style>
