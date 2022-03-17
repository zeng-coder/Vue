import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import search from '@/components/search'
import nearby from '@/components/nearby'
import chat from '@/components/chat'
import my from '@/components/my'
import Regist from '@/components/Regist'
import productInfo from '@/components/productInfo'
import searchList from '@/components/searchList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: nearby
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/searchList/:value',
      name: 'searchList',
      component: searchList
    },
      {
        path: '/Regist',
        name: 'Regist',
        component: Regist
      },
      {
        path: '/productInfo/:productId',
        name: 'productInfo',
        component: productInfo
      },
  ]
})
