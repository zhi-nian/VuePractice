<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>

    <div class="content-photo-detail">
      <div v-if="details[0]">
        <p>{{ details[0].top_commentsName }}</p>
        <span>作者：{{ details[0].username }}</span>
        <span>{{ details[0].up }}次预览</span>
        <span>{{ details[0].comment }}次下载</span>
      </div>
      <!--预览-->
      <vue-preview :slides="setPreview()" class="preview"></vue-preview>
      <!--没有预览-->
      <!--<my-ul>-->
        <!--<my-li v-for="(item,index) in details" :key="index">-->
          <!--<img v-lazy="item.header" alt="item.header">-->
        <!--</my-li>-->
      <!--</my-ul>-->

      <!--图文详情内容-->
      <div class="clear">
        <p v-for="(item,index) in details" :key="index">{{ item.text }}</p>
      </div>
    </div>


    <!--使用评论组件-->
    <comment :sid="$route.params.sid"></comment>

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
              details:[],
          }
      },
      methods:{
        setPreview:function () {
          //给预览图设置参数
          this.details.forEach( img => {
            img.src = img.header;
            img.msrc = img.header;
            img.alt = img.top_commentsName;
            img.title = img.top_commentsName;
            img.w = 200;//这是大图的宽
            img.h = 200;
          } )
          return this.details;
        }
      }
  }

</script>

<style scoped>

  /*清除浮动*/
  .clear {
    clear: both;
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

