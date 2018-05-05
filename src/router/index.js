import Vue from 'vue'
import Router from 'vue-router'
// @指的是当前src目录
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
