/**
 * Created by sgs on 2019/7/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import num from './num'

Vue.use(Vuex);

let myStore = new Vuex.Store({

  modules:{
    num:num
  }

})

export default myStore;
