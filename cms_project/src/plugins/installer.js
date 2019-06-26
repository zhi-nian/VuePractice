/**
 * Created by sgs on 2019/6/26.
 */
// vue插件  必须具备 install函数
function Installer() {
  //自身初始化行为
}

Installer.install = function (Vue) {
  //接收Vue的构造函数 ，给原型挂在属性或者注册全局组件
  console.log(Vue);
  //1、注册全局组件
  Vue.component('test',{
    template:'<h1>哈哈</h1>'
  });
  //2、挂在属性
  // Vue.prototype.$log = function () {
  //   console.log('hahahhahahahah');
  // }
  // this.$log = 'nnnnnnnnnnnn' 子类对象可以修改父类的属性


  let log = function () {
    console.log('我们自己的插件log函数')
  }


  //给原型定义属性的获取和设置  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  Object.defineProperty(Vue.prototype,'$log',{
    set:function (newV) {
      console.log('就是不给你设置');
      // log = newV
    },
    get:function () {
      return log;
    }
  })

}

export default Installer;
