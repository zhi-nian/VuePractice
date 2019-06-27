import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewList from '@/components/News/NewList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Member/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Shopcart/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/Search/Search',
      name: 'Search',
      component: Search
    },
    {
      path:'/news/List',
      name:'NewList',
      component:NewList
    }
  ]
})
