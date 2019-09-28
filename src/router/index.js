import Vue from 'vue'
import Router from 'vue-router'

import business from '@/view/business'

import home from '@/view/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
