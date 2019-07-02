<template>
  <div>
    <nav-bar :title="myTitle"></nav-bar>
    <div>
      <h3>{{ newsInfo.text }}</h3>
      <div>
        <span>{{newsInfo.comment}}次点击</span>
        <span>作者：{{newsInfo.username}}</span>
        <br>
        <span>添加时间：2016-08-25</span>
      </div>
    </div>
    <hr>
    <div class="detail_content">
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
      {{newsInfo.top_commentsContent}}
    </div>
  </div>
</template>


<script>
  export default {
      created () {
//        console.log(this.$route.params)
          //获取路由参数
          let { uid } = this.$route.params;
          //发起请求
          let url = 'https://www.apiopen.top/satinGodApi?type=3&page=2&' + uid;
          this.$axios.get(url)
            .then(res => {
                this.newsInfo = res.data.data[Math.floor(Math.random() * 10) + 1]//随机数模拟不同数据
          })
            .catch(err=>console.log(err))
          //数据填充到页面
      },
      data () {
          return {
              newsInfo:{},//新闻详情数据
              myTitle:''

          }
      },
      beforeRouteEnter (to, from, next) {
        //判断路由的来源
        let title = '详情';
        if (from.name === 'NewList') {
            title = '新闻详情';
        } else if ( from.name === 'GoodsDetail' ) {
            title = '图文详情';
        }


        //// 不！能！获取组件实例 `this`
        next(vm => {
         // 通过 `vm` 访问组件实例
          vm.myTitle = title;
        })
      }
  }
</script>


<style scoped>
  h3 {
    text-align: center;
  }

  .detail_content {
    height: calc(100vh - 269px);
    overflow: scroll;
  }

  span:first-child {
    float: right;
  }
</style>
