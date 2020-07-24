import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vant from "vant";
import "./assets/css/base.css";
import "./assets/font/iconfont.css"
// 时间
// import moment from 'moment/moment'
// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";
import "swiper/css/swiper.min.css";
// 历史记录
import bm_search_input from 'bm_search_input'

Vue.component('bm_search_input',bm_search_input);
import "vant/lib/index.css";
// 配置axios
// cnpm i axios -S
import axios from "axios";
axios.defaults.baseURL = "http://49.234.116.224:3201/"
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(vant);
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
// var express = require("express");
// var app = express();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
