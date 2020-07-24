import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import cart from "./cart";
import address from './address'
import order from './order'
// import vantabbar  from './vantabbar'
export default new Vuex.Store({
  state: {
    vanTabbar:true, //默认显示 底部导航
    active:0,
    username:null,
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    address,
    order,
    // vantabbar
  }
});
