import Vue from 'vue'
import Router from 'vue-router'
// @指的是当前src目录
// import Home from '@/pages/home/Home.vue'
// import City from '@/pages/city/City.vue'
// import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // async component
      component: () => import('@/pages/home/Home.vue')
    },
    {
      path: '/city',
      name: 'city',
      // async component
      component: () => import('@/pages/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // async component
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  // scroll to top when switching pages
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
