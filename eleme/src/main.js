// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import axios from 'axios'
import Goods from './components/goods/goods.vue'

Vue.use(VueRouter);
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

let routes = [
    {
        path:'/goods',
        component:Goods
    }
];
let router = new VueRouter({
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('/goods')
