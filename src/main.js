/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用 vue-router
  store // 使用 vuex
})
