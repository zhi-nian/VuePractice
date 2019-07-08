<template>
  <div>
    <nav-bar title="购物车"></nav-bar>
    <div class="pay-detail">
      <ul>
        <li class="p-list" v-for="(item , index) in selectedGoods" :key="index">
          <mt-switch v-model="item.switchValue"></mt-switch>
          <img :src="item.header">
          <div class="pay-calc">
            <p>{{ item.text }}</p>
            <div class="calc">
              <span>￥{{ item.down }}</span>
              <span @click="subtract(item)">-</span>
              <span>{{ item.buyNum }}</span>
              <span @click="add(item)">+</span>
              <a href="javascript:;"  @click="del(item,index)">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="show-price">
      <div class="show-1">
        <p>总计(不含运费):</p>
        <span>已经选择商品{{ payment.count }}件，总价￥{{ payment.total }}元</span>
      </div>
      <div class="show-2">
        <mt-button type="danger" size="large">去结算</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/eventBus'
  export default {
      created () {
          console.log('这里是内存中的购物车数据↓↓↓↓↓↓↓↓↓↓');
          console.log(test);
          //因为接口原因 写死购物车数据  模拟test的格式{ 商品id  ： 加入的数量 }
          let currentCart = {
            27808778:3,
            26903089:10,
            27395147:1,
            26770826:5,
            28021047:1
          }
          //获取购物车商品列表  因没有对应数据  所以其他数据模拟就取第一页
          this.$axios.get(`https://www.apiopen.top/satinGodApi?type=3&page=1`)
            .then( res=> {
                res.data.data.forEach( (goods) => {
//                    if (currentCart[goods.soureid]) {
//                      goods.buyNum = currentCart[goods.soureid];
//                      this.selectedGoods.push(goods);
//                    }
//                  假装整个列表都是购物车内容
                  goods.buyNum = Math.floor(Math.random()*10);
                  goods.switchValue = true;




                  this.selectedGoods.push(goods);
                })
            })
            .catch(console.log)

      },
      methods:{
          subtract (goods) {
              goods.buyNum > 0 && goods.buyNum--;
              goods.buyNum > 0 && this.$store.dispatch('addNumByAction',-1);
          },
          add (goods) {
            goods.buyNum < goods.forward && goods.buyNum++;
            goods.buyNum < goods.forward && this.$store.dispatch('addNumByAction',1);
          },
          del (goods,index) {
              this.selectedGoods.splice(index,1);
            this.$store.dispatch('addNumByAction',0 - goods.buyNum);
          }

      },
      computed:{
        payment () {
            let count = 0;//件数
            let total = 0;//金额
            this.selectedGoods.forEach((goods)=> {
                if (goods.switchValue) {
                  count += goods.buyNum;
                  total += goods.buyNum*goods.down;
                }
            });

            return {count,total}

        }

      },
      data () {
          return {
              selectedGoods:[]//获取假的已加入购物车的商品
          }
      },
    beforeRouteLeave (to, from , next) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
      let total = 0;
      if (answer) {
          //保存当前的数据 计算总数
        this.selectedGoods.forEach( (res) => {
          total += res.buyNum;
        })

        //通讯
//        Bus.$emit('changeShopCartNum',total);
        this.$store.dispatch('changeNumByAction',total)
        next()
      } else {
        next(false)
      }
    }
  }

</script>
<style scoped>
  .pay-detail {
    height: calc(100% - 222px);
    overflow: scroll;
  }
  .pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
  }

  .pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
  }

  .pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
  }

  .pay-detail ul li >:nth-child(1),
  .pay-detail ul li >:nth-child(3) {
    display: inline-block;
  }

  .pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
  }

  .pay-detail ul li >:nth-child(1) {
    line-height: 80px;
  }

  .calc:nth-child(1) {
    color: red;
    font-size: 20px;
  }

  .calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
  }

  .calc a {
    margin-left: 20px;
  }

  .show-1,
  .show-2 {
    display: inline-block;
  }

  .show-1,
  .show-2 {
    margin-left: 30px;
  }

  .show-price {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
