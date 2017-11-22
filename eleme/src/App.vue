<template>
  <div id="app">
    <myHeader :seller="seller"></myHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="'/goods'">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="'/ratings'">
          评价
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="'/seller'">
          商家
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller">

      </router-view>
    </keep-alive>

  </div>
</template>

<script>
  import myHeader from './components/header/header'
  import data from './common/json/data.json'

export default {
  name: 'app',
    data(){
      return {

      }
    },
    created(){
        this.seller = data.seller;
    },
    components:{
        myHeader,
    }
}
</script>

<style lang="less">
  @url:'./common/css';
  @import '@{url}/reset.css';
  @import '@{url}/common.less';

.tab{
  @height:40px;
  display:flex;
  width:100%;
  height: @height;
  line-height: @height;
  .tab-item{
    flex:1;
    text-align: center;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .active{
      color:#f01414;
    }
    a{
      font-size:14px;
      :link{
        color:#4d555d;
      }
    }
  }
}

</style>
