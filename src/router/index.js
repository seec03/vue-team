import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import listen from '@/view/zw-listen'
import boke from '@/view/zw-boke'
import radio from '@/view/zw-radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path: '/zw-listen',
      name: 'listen',
      component: listen,
      redirect:'zw-listen/zw-boke',
      children:[
      	{
      		path: 'zw-boke',
      		name: 'boke',
      		component: boke,
      	},
      	{
      		path: 'zw-radio',
      		name: 'radio',
      		component: radio,
      	}
      ]
    },
  ]
})
