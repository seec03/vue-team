import Vue from 'vue'
import Router from 'vue-router'
import business from '@/view/business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'business',
      component: business
    }
  ]
})
