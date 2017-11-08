<template>
  <div id="app">
    {{msg}}
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name:'Home'}">
            <div><img src="./assets/images/home.svg" alt=""></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Categories'}">
            <div><img src="./assets/images/category.svg" alt=""></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'ShoppingCart'}">
            <div><img src="./assets/images/cart.svg" alt=""></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Me'}">
            <div><img src="./assets/images/me.svg" alt=""></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  @import url('./assets/less/site.less');
</style>
