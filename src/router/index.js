import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import SearchCity from '@/pages/SearchCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/citylist',
      name: 'SearchCity',
      component: SearchCity
    }
  ]
})
