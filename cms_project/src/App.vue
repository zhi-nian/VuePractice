<template>
  <div >
    <!--顶部-->
    <mt-header title="信息管理系统"></mt-header>

    <router-view/>

    <!--底部-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/img/member.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="../static/img/shopping_cat.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="../static/img/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data ()  {
      return {
          selected: ''
      }
  },
  watch:{
    selected:function (newV,oldV) {//不能使用箭头函数  应为this 会向上绑定
        console.log(newV)
        this.$router.push({
          name:newV
        })
    }
  }
}
</script>

<style>

</style>
