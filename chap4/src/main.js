import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Explorer from './Explorer.vue'
import ShoppingCart from './ShoppingCart.vue'
import Me from './Me.vue'
import BookList from './components/BookList.vue'

Vue.use(VueRouter);

const routes = [
    {path:'/home',component:Home,name:'Home',
        children:[{
            path:'bookList',component:BookList,name:'BookList'
    }]
    },
    {path:'/explorer',component:Explorer,name:'Explorer'},
    {path:'/shoppingCart',component:ShoppingCart,name:'ShoppingCart'},
    {path:'/me',component:Me,name:'Me'},
]
const router =  new VueRouter({
    base:__dirname,
    routes
})

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})


