import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index'

import home from '@/view/home'
import tuijian from '@/components/base/zu/tuijian'
import country from '@/components/base/zu/country'
import dahao from '@/components/base/zu/dahao'
import finance from '@/components/base/zu/finance'
import game from '@/components/base/zu/game'
import guan from '@/components/base/zu/guan'
import life from '@/components/base/zu/life'
import politics from '@/components/base/zu/politics'
import sociology from '@/components/base/zu/sociology'
import sport from '@/components/base/zu/sport'
import zheng from '@/components/base/zu/zheng'
import zhuan from '@/components/base/zu/zhuan'
import newsbus from '@/components/base/zu/newsbus'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/index',
      name: 'index',
      component: index,
      redirect:"/index/tuijian",
      children:[
      	 {
	      path: 'tuijian',
	      name: 'tuijian',
	      component: tuijian
	     },
	     {
	      path: 'country',
	      name: 'country',
	      component: country
	     },
	     {
	      path: 'zhuan',
	      name: 'zhuan',
	      component: zhuan
	     },
      {
	      path: 'finance',
	      name: 'finance',
	      component: finance
	     },
	     {
	      path: 'game',
	      name: 'game',
	      component: game
	     },
	     {
	      path: 'guan',
	      name: 'guan',
	      component: guan
	     },
	     {
	      path: 'life',
	      name: 'life',
	      component: life
	     },
	     {
	      path: 'dahao',
	      name: 'dahao',
	      component: dahao
	     },
	     {
	      path: 'politics',
	      name: 'politics',
	      component: politics
	     },
	     {
	      path: 'sociology',
	      name: 'sociology',
	      component: sociology
	     },
	     {
	      path: 'sport',
	      name: 'sport',
	      component: sport
	     },
	     {
	      path: 'zheng',
	      name: 'zheng',
	      component: zheng
	     }
	     
      ]
     },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path: '/newsbus',
      name: 'newsbus',
      component: newsbus
    }
  ]
})
