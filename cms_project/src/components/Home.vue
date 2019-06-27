<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.header" alt="">
      </mt-swipe-item>
    </mt-swipe>


    <!--九宫格-->
    <div class="grid">
      <my-ul>
        <my-li v-for="(module,index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>




  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [],
      modules:[
          {
            title:"新闻资讯",
            className:"back-news",
            route:{
              name:'NewList'
            }
          },
        {
          title:"图文分享",
          className:"back-news",
          route:{
            name:'Home'
          }
        },
        {
          title:"商品展示",
          className:"back-news",
          route:{
            name:'Home'
          }
        },
        {
          title:"留言反馈",
          className:"back-news",
          route:{
            name:'Home'
          }
        },
        {
          title:"搜索咨询",
          className:"back-news",
          route:{
            name:'Home'
          }
        },
        {
          title:"联系我们",
          className:"back-news",
          route:{
            name:'Home'
          }
        },
      ]
    }
  },
  created () {

      //测试自己写的插件
      this.$log = 'abc';
      this.$log();


      this.$axios.get('https://www.apiopen.top/satinGodApi?type=3&page=1')
        .then(res=>{
            console.log(res)
            this.imgs = res.data.data;
        })
        .catch(err=>console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe {
    width:100%;
    height:200px;
  }

  .mint-swipe img{
    width:100%;
    height:100%;
  }

/*九宫格样式*/
/*  img {
    width: 100%;
  }*/
  .grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
  }

  .back-img {
    background-image: url("../../static/img/home.png");
  }

  .back-news {
    background-image: url("../../static/img/member.png");
  }




</style>
