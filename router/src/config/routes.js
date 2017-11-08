import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home.vue'
import HomeProfile from '../profile.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'


Vue.use(VueRouter);

const HomeChildren = [
    {
        name:'HomeProfile',
        path:'profile',
        component:HomeProfile
    }
]

const router = new VueRouter({
    base:__dirname,
    linkActiveClass:'active',
    routes:[
        {name:'Home',path:'/home/:id',component:Home,children:HomeChildren},
        {name:'Categories',path:'/explorer/:id',component:Explorer},
        {name:'ShoppingCart',path:'/cart/:id',component:Cart},
        {name:'Me',path:'/me/:id',component:Me},
    ]
});


export default router
