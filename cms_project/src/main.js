// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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
//axios 结束


//九宫格组件  开始
import MyUl from '@/components/common/MyUl';
import MyLi from '@/components/common/MYLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);

//九宫格组件  结束





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
