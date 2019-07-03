/**
 * Created by sgs on 2019/7/3.
 */
let obj = {
  goodsObj : {},
  addShopCart (id,num) {

    if (this.goodsObj[id]) {
      this.goodsObj[id] += num;
    } else {
      this.goodsObj[id] = num;
    }

  },
  deleteGoods () {

  }

}


//挂在给window
window.test = obj;
export default obj;

