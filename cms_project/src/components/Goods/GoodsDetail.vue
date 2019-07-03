<template>
  <div>
    <nav-bar title="商品详情"></nav-bar>
    <div class="outer-swiper">
      <div class="swiper">
        <!--这里采取直接传递轮播图数据对象的方法-->
        <my-swipe :data="imgs"></my-swipe>
      </div>
    </div>
    <div class="product-desc">
      <ul>
        <li>
          <span class="product-desc-span">
                    {{ info.text }}
          </span>
        </li>
        <li class="price-li">市场价：
          <s>￥{{ info.up }}</s> 销售价：<span>￥{{ info.down }}</span></li>
        <li class="number-li">购买数量：<span @click="subtract">-</span><span>{{ buyNum }}</span><span @click="add">+</span></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addShopCart">加入购物车</mt-button>
        </li>
      </ul>
    </div>

    <!--加入购物车后的 过度效果-->
    <transition name="ball" @after-enter="ballAfterEnter">
      <div class="ball" v-if="isShow"></div>
    </transition>
    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：{{ info.uid }}</li>
        <li>库存情况：{{ info.forward }}件</li>
        <li>上架时间：{{ info.passtime  && info.passtime.substring(0,10)}}</li>
      </ul>
    </div>
    <div class="product-info">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain @click="goGoodsDetail">图文介绍</mt-button>
        </li>
        <li>
          <mt-button type="danger" size="large" plain @click="goGoodsComment">商品评论</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  import Bus from '@/eventBus'
  export default {
      data () {
          return {
              goodsId:this.$route.query.id,
              imgs:[],//轮播图
              info:{},//商品信息
              isShow:false,
              buyNum:1
          }
      },
      created () {
          //这里模拟两个请求
          //1、获取轮播图
          //2、获取商品详情内容
          let imgReq = this.$axios.get(`https://www.apiopen.top/satinGodApi?type=3&page=${this.goodsId}`);
          let infoReq = this.$axios.get(`https://www.apiopen.top/satinGodApi?type=3&page=${this.goodsId}`);
          //3、合并两个请求
          this.$axios.all([imgReq,infoReq])
            .then(this.$axios.spread(
              (resImg,resInfo) => {
                  this.imgs = resImg.data.data;
                  this.info = resInfo.data.data[0];
              }
            ))
            .catch(console.log)
      },
      methods : {
        ballAfterEnter () {
          this.isShow = false;
          Bus.$emit('addBuyNum',this.buyNum)
        },
        addShopCart () {
            this.isShow = true;
        },
        subtract () {

          this.buyNum > 1 && this.buyNum--;
        },
        add () {
          this.buyNum < this.info.forward && this.buyNum++;
        },
        goGoodsDetail () {
            this.$router.push({
              name:'NewsDetail',
              params:{
                uid:this.goodsId
              }
            })
        },
        goGoodsComment () {
            this.$router.push({
              name : 'GoodsComment',
              query : {
                  sid : this.info.soureid
              }
            })
        }
      }
  }

</script>
<style scoped>

  防止闪烁 与js部分同步
  .ball-leave {
    opacity: 0;
  }

  .ball-enter-active {
    animation: bounce-in 1s;
  }

  @keyframes bounce-in {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(140px, -50px, 0);
    }
    75% {
      transform: translate3d(160px, 0px, 0);
    }
    100% {
      transform: translate3d(140px, 300px, 0);
    }
  }

  .swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
  }

  .outer-swiper,
  .product-desc,
  .product-props,
  .product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
  }


  /*请ulpadding*/

  .outer-swiper ul,
  .product-desc ul,
  .product-props ul,
  .product-info ul {
    padding: 0;
  }

  .product-desc ul li,
  .product-props ul li,
  .product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
  }

  .product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
  }

  .product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .product-desc ul,
  .product-info ul,
  .product-props ul {
    padding-left: 10px;
  }

  .price-li span {
    color: red;
    font-size: 25px;
  }

  .price-li s {
    margin-right: 16px;
  }


  /*加减*/

  .number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
  }


  /*商品参数*/

  .product-props ul >:nth-child(1) {
    text-align: left;
  }

  .product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
  }

  .product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
  }

  .number-li span {
    text-align: center;
  }

  .number-li >:nth-child(2) {
    width: 40px;
  }

  .ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
  }
</style>
