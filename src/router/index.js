/*
 路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
// 所有路由

  routes: [
    {
      path: '/msite',
      component: Msite,
      // 用于判断当前路由组件中是否显示底部四个菜单切换项
      meta: {
        showFooter: true
      }
    }, {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/',
      redirect: '/msite'
    }
  ]
})
