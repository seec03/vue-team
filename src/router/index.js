import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import baoliao from '@/view/baoliao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baoliao',
      component: baoliao
    }
  ]
})
