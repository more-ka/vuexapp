// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

// 创建状态仓库，注意Store,state不能改

var store = new Vuex.Store({
  state: {
    num: 53
  },
  mutations: {
    increase(state) {
      state.num += 1;
    },
    decrease(state) {
      state.num--;
    }
  },
  actions: {
    // context为上下文对象
    decreaseActive(context) {
      // actions中只能对mutations进行操作
      setTimeout(function() {
        context.commit("decrease");
      }, 1000);
    }
  }
});
// 直接通过this.$sore.state.XXX拿到全局状态

// 创建状态仓库
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
