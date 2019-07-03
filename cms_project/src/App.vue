<template>
  <div >
    <!--顶部-->
    <mt-header title="信息管理系统"></mt-header>

    <router-view/>

    <!--底部-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Home">
        <div @click="change('Home')">
          <img slot="icon" src="../static/img/home.png">
        </div>
          首页

      </mt-tab-item>
      <mt-tab-item id="Member">
        <div @click="change('Member')">
          <img slot="icon" src="../static/img/member.png">
        </div>
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <div @click="change('Shopcart')">
          <img slot="icon" src="../static/img/shopping_cat.png">
        </div>
        购物车<mt-badge type="error" size="small">{{ buyNum }}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="Search">
        <div @click="change('Search')">
          <img slot="icon" src="../static/img/search.png">
        </div>
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Bus from './eventBus'
export default {
  name: 'App',
  data ()  {
      return {
          selected: '',
          buyNum:0
      }
  },
  created () {
    Bus.$on('addBuyNum', (num) => {
        this.buyNum += num;
    });
    Bus.$on('changeShopCartNum', (num) => {
      this.buyNum = num;
    })
  },
  methods:{
      change:function (val) {
        this.$router.push({
          name:val
        })
      }
  },
  watch:{
    selected:function (newV,oldV) {//不能使用箭头函数  应为this 会向上绑定

//      监听属性 跳转  会导致内部内容与tabbar存在一样的路由不能进行跳转
//      如：进入新闻资讯 然后点击tabbar中的首页 不能跳回主页bug
//        console.log(newV)
//        this.$router.push({
//          name:newV
//        })
    }
  }
}
</script>

<style scoped>

  img {
    width: 25%;
    margin-bottom: 5px;
  }

</style>
