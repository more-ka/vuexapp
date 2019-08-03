import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


// 创建状态仓库，注意Store,state不能改

export default new Vuex.Store({
  state: {
    num: 30
  },
  mutations: {
    increase(state) {
      state.num += 10;
    },
    decrease(state) {
      state.num -= 10;
    }
  },
  actions: {
    decreaseActive(context) {
      context.commit("decrease");
    }
  },
  getters: {
    getNum(state) {
      return state.num > 0 ? state.num : 0;
    }
  }
});
// 直接通过this.$sore.state.XXX拿到全局状态
