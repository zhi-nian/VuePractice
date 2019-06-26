<template>
  <div >
    <!--顶部-->
    <mt-header title="信息管理系统"></mt-header>

    <router-view/>

    <!--底部-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../static/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="../static/img/member.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../static/img/shopping_cat.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="查找">
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
  }
}
</script>

<style>

</style>
