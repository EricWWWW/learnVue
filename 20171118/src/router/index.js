import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Content from '@/page/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
      {
        path:'/content/:id',
        component:Content

      }
  ]
})
