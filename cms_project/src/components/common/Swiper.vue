<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in data || imgs " :key="index">
      <img :src="item.header || item.image" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>

  export default {
      name:'my-swipe',
      props:['url','data'],//这接收父传递子的参数
      data () {
          return {
              imgs:[]
          }
      },
      created () {
        if (this.url) {
          this.$axios.get(this.url)
            .then(res=>{
              this.imgs = res.data.data;
            })
            .catch(err=>console.log(err))
        }
      }
  }

</script>

<style scoped>

  .mint-swipe {
    width:100%;
    height:200px;
  }

  .mint-swipe img{
    width:100%;
    height:100%;
  }

</style>
