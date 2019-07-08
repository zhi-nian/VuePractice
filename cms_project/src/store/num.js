/**
 * Created by sgs on 2019/7/8.
 */
export default {

  state : {
    num : 0
  },
  getters : {
    getNum (state) {
      return state.num;
    }
  },
  mutations : {
    addNum (state,num) {
      state.num += num;
    },
    changeNum (state,num) {
      state.num = num
    }
  },
  actions : {
    addNumByAction ({ commit },num) {
      commit('addNum',num)
    },
    changeNumByAction ({ commit },num) {
      commit('changeNum',num)
    }
  }

}
