// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

//mint-ui 开始
//引入全局样式
import '../static/css/global.css'
//引入Mint-ui
import MintUI from 'mint-ui';
//安装插件
Vue.use(MintUI);
//引入css
import 'mint-ui/lib/style.css';
//mint-ui 结束



//axios 开始
import Axios from 'axios';
//引入自己的插件安装器
import Installer from '@/plugins/installer';
Vue.use(Installer);
//给Vue的原型 挂在$axios属性
Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL = 'https://www.apiopen.top/'这里由于我们的就扣都是网上找的免费的接口  就不设置baseURL了

//定义拦截器
//1、请求发起前显示loading，
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  MintUI.Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

//2、响应回来后就隐藏loading，
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  MintUI.Indicator.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});




//axios 结束



//vue-preview 开始
import VuePreview from 'vue-preview';

// defalut install
Vue.use(VuePreview)

//vue-preview 结束













//全局组件  开始
import MyUl from '@/components/common/MyUl';
import MyLi from '@/components/common/MYLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
import NavBar from '@/components/common/NavBar'
Vue.component(NavBar.name,NavBar);
import Comment from '@/components/common/Comment'
Vue.component(Comment.name,Comment);
import Swipe from '@/components/common/Swiper'
Vue.component(Swipe.name,Swipe)

//全局组件  结束




//定义全局的过滤器 开始
import Moment from 'moment'
Moment.locale('zh-cn');
Vue.filter('convertTime',function (data,formatStr) {
  //由于这个日期的格式过老  所以下面我们用当前日期
  return Moment(data).format(formatStr)
})
Vue.filter('relTime',function (data) {
  return Moment(data).fromNow()
})
//定义全局的过滤器 结束



//控制字数显示的过滤器 开始

Vue.filter('controllShow',function (str,num) {

  if (str.length <= num) {
    return str;
  } else {
    return str.substring(0,num - 1) + '...';
  }

})

//控制字数显示的过滤器 结束








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
