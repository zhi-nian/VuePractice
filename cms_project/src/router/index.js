import Vue from 'vue'
import Router from 'vue-router'

// router懒加载
const Home = () => import('@/components/Home')
const Member = () => import('@/components/Member/Member')
const Shopcart = () => import('@/components/Shopcart/Shopcart')
const Search = () => import('@/components/Search/Search')
const NewList = () => import('@/components/News/NewList')
const NewsDetail = () => import('@/components/News/NewsDetail')
const PhotoList = () => import('@/components/Photo/PhotoList')
const PhotoDetail = () => import('@/components/Photo/PhotoDetail')
const GoodsShow = () => import('@/components/Goods/GoodsShow')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail')
const GoodsComment = () => import('@/components/Goods/GoodsComment')

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
    },
    {
      path:'/news/detail/:uid',//params
      name:'NewsDetail',
      component:NewsDetail
    },
    {
      path:'/photo/list',
      name:'PhotoList',
      component:PhotoList
    },
    {
      path:'/photo/detail/:id/:sid',
      name:'PhotoDetail',
      component:PhotoDetail
    },
    {//商品列表
      path:'/goods/list/:page',
      name:'GoodsShow',
      component:GoodsShow
    },
    {//商品详情
      path:'/goods/detail',
      name:'GoodsDetail',
      component:GoodsDetail
    },
    {//商品评价
      path:'/goods/comment',
      name:'GoodsComment',
      component:GoodsComment
    }
  ]
})
