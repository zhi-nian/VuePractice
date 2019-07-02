<template>
  <div>
    <nav-bar title="商品列表"></nav-bar>
    <ul>
      <li v-for="(item , index) in goods" :key="index">
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
      </li>


    </ul>
  </div>
</template>
<script>

  export default {
      created () {
          //获取页码
          let  { page } = this.$route.params;

          this.$axios.get(`https://www.apiopen.top/satinGodApi?type=3&page=${page}`)

            .then (res => {
                this.goods = res.data.data
            })
            .catch(console.log)

      },
      data () {
          return {
              goods : [],
          }
      }
  }

</script>
<style scoped>

  ul {
    height: calc(100% - 150px);
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
