import Vue from 'vue'
import App from './App'
import router from './config/routes.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
