<template>
  <div id="app">
    <div class="section">
      <div>
        <div class="swiper-container" ref="slider">
          <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="i in slides">
              <router-link  tag="img" :to="{path:'/me',params:{id:i.id}}" :src="i.url" ></router-link>
            </div>

          </div>
          <div class="swiper-pagination" ref="pagination"></div>
        </div>
        <div class="msg">
          <label >快讯</label>
          <span>{{msg}}</span>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="book-list">
        <div class="header">
          <div class="heading">新书上架</div>
          <div class="more">更多...</div>
        </div>
        <div class="book-items">
          <div class="book" v-for="i in latestUpdated">
            <div class="cover">
              <img :src="i.img_url" alt="">
            </div>
            <div class="title">
	            {{i.title}}
            </div>
	          <div class="authors">
		          {{i.authors}}
	          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div>
        编辑推荐
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "./assets/css/swiper.min.css";
  @import './assets/css/list.less';
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    max-width: 100%;
  }



</style>

<script>
  import Swiper from './assets/js/swiper.min.js'

export default {
  name: 'app',
  data () {
    return {
      msg: '今日上架图书全部8折',
      slides:[
          {id:1,url:'./src/assets/img/1.jpg'},
          {id:2,url:'./src/assets/img/2.jpg'},
          {id:3,url:'./src/assets/img/3.jpg'},
          {id:4,url:'./src/assets/img/4.jpg'},
      ]
    }
  },
    mounted(){
      new Swiper(this.$refs.slider,{
          pagination:this.$refs.pagination,
          autoplay:2500,
          autoplayDisableOnInteraction:false,
      })
    }
}
</script>


