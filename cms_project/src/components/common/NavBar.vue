<template>
  <div>
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
      name:'nav-bar',
      props:['title'],
      created () {

      },
      methods:{
        goback () {
          this.$router.go(-1);
        }
      },
      data () {
          return {

          }
      }
  }
</script>

<style scoped>
  .mint-header {
    background-color: #cccccc;
  }
</style>
