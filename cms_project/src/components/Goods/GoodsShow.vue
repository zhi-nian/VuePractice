<template>
  <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <nav-bar title="商品列表"></nav-bar>
    <mt-loadmore :auto-fill="autoFill" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul>

      <li v-for="(item , index) in goods" :key="index">
        <router-link :to="{name:'GoodsDetail',query:{id:index}}">
        <a>
          <img :src="item.header">
          <div class="title">{{ item.text | controllShow(10) }}</div>
          <div class="desc">
            <div class="sell">
              <span> ￥{{ item.down }}</span>
              <s>￥{{ item.up }}</s>
            </div>
            <div class="detail">
              <div class="hot">
                热卖中
              </div>
              <div class="count">
                剩{{ item.forward }}件
              </div>
            </div>
          </div>
        </a>
        </router-link>
      </li>


    </ul>
    </mt-loadmore>>
  </div>
</template>
<script>

  export default {
      methods:{
        loadBottom () {
            let addMore = [];
            console.log('下拉了');
            this.loadGoodsByPage();
            this.$refs.loadmore.onBottomLoaded();
        }  ,
        handleBottomChange (status) {
            this.bottomStatus = status;
            console.log(this.bottomStatus)
        },
        loadGoodsByPage () {
          this.$axios.get(`https://www.apiopen.top/satinGodApi?type=3&page=${this.page}`)

            .then (res => {

              if(res.data.data.length < 20) {
                  this.allLoaded = true;
                  this.$toast('没有更多数据了！')
                  return;
              }



              if (this.page === 1) {//初始数据
                this.goods = res.data.data
              } else {//下拉加载更多  追加数据
                this.goods = this.goods.concat(res.data.data);
              }



              this.page ++;
            })
            .catch(console.log)
        }
      },
      created () {
          this.loadGoodsByPage();

      },
      mounted() {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      },
      data () {
          return {
              goods : [],
              allLoaded: false,
              bottomStatus: '',
              wrapperHeight: 0,
              autoFill:false,//关闭自动检测
              page:this.$route.params.page,
          }
      }
  }

</script>
<style scoped>

  ul {
    /*height: calc(100% - 150px);*/
    overflow: scroll;
    padding: 0;
  }
  li {
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
  }


  li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;


  }

  li > a:not(.mui-btn) img {
    width: 100%;
  }

  .sell > span {
    float: left;
    color: red;
    text-align: left;
  }

  .detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
  }

  .detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
  }


  /*撑开，去除浮动没有的高度*/

  .detail {
    overflow: hidden;
  }

  .desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
  }

  img {
    height: 200px;
  }
</style>
