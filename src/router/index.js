import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./routes/home";
import classify from "./routes/classify";
import star from "./routes/star";
import cart from "./routes/cart";
import my from "./routes/my";
import search from './routes/search'
import detail from './routes/detail'
import publics from "./routes/publics";
import address from "./routes/address";
import order from "./routes/order";
import Router from 'vue-router';
 
Vue.use(Router)

  const routes = [
    {
      path:"/",
      redirect:"/advertpage",
    },
    home,
    classify,
    star,
    ...cart,
    ...my,
    search,
    ...detail,
    ...publics,
    ...address,
    ...order,
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default router;
