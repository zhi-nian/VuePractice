<template>
  <div>
    <nav-bar :title="title"></nav-bar>
    <!--新闻列表-->
    <div>
      <ul>
        <li v-for="(news,index) in newsList" :key="index">
          <a href="#">
            <img :src="news.header" alt="">
            <div>
              <span>{{news.text}}</span>
              <div>
                <p>{{news.comment}}</p>
                <p>{{news.passtime | convertTime('YYYY-MM-DD')}}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
//      name:'新闻列表',
      data () {
          return {
              title:'新闻列表',
              newsList:[],
          }
      },
    created () {
          this.$axios.get('https://www.apiopen.top/satinGodApi?type=3&page=2')
            .then(res=>{
                this.newsList = res.data.data;
            })
            .catch(err=>console.log(err))
    }
  }
</script>

<style scoped>

  ul {
    padding: 0;
    height: calc(100% - 136px);
    margin: 0;
    overflow: scroll;
  }

  li {
    float: left;
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
  }

  a img {
    float: left;
    height: 100px;
  }

  p:first-child {
    float: left;
  }

  p:last-child {
    float: right;
  }
</style>
