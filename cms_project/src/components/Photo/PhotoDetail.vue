<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>

    <div class="content-photo-detail">
      <div>
        <p>{{ details[0].top_commentsName }}</p>
        <span>作者：{{ details[0].username }}</span>
        <span>{{ details[0].up }}次预览</span>
        <span>{{ details[0].comment }}次下载</span>
      </div>
      <my-ul>
        <my-li v-for="(item,index) in details" :key="index">
          <img v-lazy="item.header" alt="item.header">
        </my-li>
      </my-ul>
      <div>
        <p v-for="(item,index) in details" :key="index">{{ item.text }}</p>
      </div>
    </div>


  </div>
</template>

<script>

  export default {
      created () {
        let  pid = this.$route.params.id;
        //发送请求
        this.$axios.get('https://www.apiopen.top/satinGodApi?type=3&page=' + pid)
          .then(res=>{
              this.details = res.data.data;
          })
          .catch(console.log)
      },
      data () {
          return {
              details:[]
          }
      }
  }

</script>

<style scoped>

  img {
    width: 100%;
  }

  p {
    margin: 0;
    text-align: center;
  }

  .content-photo-detail {
    height: calc(100% - 134px);
    overflow: scroll;
  }

</style>

