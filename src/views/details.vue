<template>
  <div>
    <van-button
      class="arrowleftgo"
      @click="$router.go(-1)"
      plain
      hairline
      round
      icon="arrow-left"
      type="default"
    />
    <van-button
      class="arrowrightshare"
      @click="showPopup"
      plain
      hairline
      round
      icon="share"
      type="default"
    />
    <!-- 引入轮播图组件 -->
    <swiper :img="Images"></swiper>
    <van-popup class="popShare" v-model="show" position="bottom" :style="{ height: '30%' }">
      <p class="share">分享</p>
      <van-image :src="require('../assets/images/微博.png')" />
      <P class="cancel" @click="cancelPopup">取消</P>
    </van-popup>
    <!-- <sel :poh="poh"></sel> -->
    <div class="detailContainer">
      <h2 class="money">￥{{goods.money}}</h2>
      <p class="name">{{goods.name}}</p>
      <p class="introduce">{{goods.introduce}}</p>
    </div>
    <!-- 首页导航 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p>骁龙</p>
          <span>865</span>
        </div>
        <div class="swiper-slide">
          <p>四摄像头</p>
          <span>10800万+2000万</span>
        </div>
        <div class="swiper-slide">
          <p>超大屏</p>
          <span>6.67英寸</span>
        </div>
        <div class="swiper-slide">
          <p>屏幕分辨率</p>
          <span>2340×1080</span>
        </div>
        <div class="swiper-slide">
          <p>极速畅玩</p>
          <span>8GB</span>
        </div>
        <div class="swiper-slide">
          <p>存储容量</p>
          <span>256GB</span>
        </div>
        <div class="swiper-slide">
          <p>普通厚度</p>
          <span>8.98mm</span>
        </div>
        <div class="swiper-slide">
          <p>超长待机</p>
          <span>4500mAh</span>
        </div>
        <div class="swiper-slide">
          <p>超长待机</p>
          <span>4500mAh</span>
        </div>
         <div class="swiper-slide">
        </div>
         <div class="swiper-slide">
        </div>
      </div>
    </div>
    <!-- 首页导航 end -->
    <!-- <div class="coupon">
        <van-coupon-cell/>
        <van-popup round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
        />
        </van-popup>
    </div> -->
    <div class="goods-select-wrapper">
        <div>
            <span class="flow">流程</span>
            <span class="sel">1.支付预付款-2.支付尾款-3.商品发货</span>
            <span class="fr arrow">></span>
        </div>
        <div>
            <span class="flow">已选</span>
            <span class="sel">小米10 Pro 8GB+256GB 星空蓝 × 1</span>
            <span class="fr arrow">></span>
        </div>
        <div>
            <span class="flow">送至</span>
            <span class="sel">北京市 东城区</span>
            <span class="fr arrow">></span>
        </div>
    </div>
    <div class="detailimg">
      商品介绍
      <img src="../assets/images/66.jpg" alt="">
      <img src="../assets/images/67.jpg" alt="">
      <img src="../assets/images/68.jpg" alt="">
    </div>
    <!-- 底部 -->
     <van-goods-action>
            <van-goods-action-icon icon="chat-o"  is-link @click="Popup"/>
            <van-popup class="speak" v-model="ishow" position="bottom" closeable close-icon="close" :style="{ height: '30%' }">
                <p class="one">人工在线客服</p>
                <span>
                    <h3>商城热线</h3>
                    <p> 400-100-5678</p>
                    <p>8:00 - 18:00</p>
                </span>
                <span>
                    <h3>金融热线</h3>
                    <p> 400-100-3399</p>
                    <p>9:00 - 19:00</p>
                </span>
            </van-popup>
            <van-goods-action-icon 
            @click="$router.push('/cart')"
            icon="cart-o" 
            :badge="num"
            />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" to="/order"  @click="once(goods)" />
            <!-- <van-goods-action-button
              type="warning"
              text="加入购物车"
              @click="add(goods)"
            /> -->
        </van-goods-action>
  </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from "vant";
import swiper from "../components/public/swiper";
import {createNamespacedHelpers} from "vuex";
const {mapState,mapMutations} = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      Images: [
        require("../assets/images/banner01.jpg"),
        require("../assets/images/banner02.jpg"),
        require("../assets/images/banner03.jpg")
      ],
      goods:{
              id:2,
              money:4999,
              name:"小米10Pro",
              introduce:"向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC",
              num:1,
              img:require("../assets/images/banner03.jpg")
          },
      show: false,
      ishow:false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    Popup(){
      this.ishow = true;
    },
    cancelPopup() {
      this.show = false;
    },
    once(){
     // 判断用户名是否为空
     // 为空：跳转登陆界面
     // 不为空：跳转订单页面
    //  if(this.$store.state.username){
    //      this.$router.push('/order')
    //  }else{
    //      this.$router.push({
    //          path:'/login',
    //          query:{
    //              path:"/order"
    //          }
    //      })
    //   }
      },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    ...mapMutations(["add"]),
    ...mapMutations(["once"])
  },
  computed:{
            ...mapState({
                num:state=>state.num
            })
        },
  components: {
    swiper
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 4, //显示个数
      freeMode: true
    });
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fff;
}
.goods-select-wrapper{
  margin-bottom: 10px;
  width: 100%;
}
.goods-select-wrapper>div{
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  margin: 10px;
  height: 40px;
  line-height: 40px;
}
.goods-select-wrapper>div .arrow{
  padding-right: 10px;
}
.goods-select-wrapper>div .flow{
  padding-left: 10px;
}
.goods-select-wrapper>div .sel{
  padding-left: 20px;
}
.detailimg{
  text-align: center;
  font-size: 20px;
  color: #fe9046;
}
.van-goods-action{
  margin: 0 auto;
  // border-radius: 10px;
  // background-color: #f6f6f6;
}
.van-goods-action .van-goods-action-button--last{
  // border-radius:999px 999px 999px 999px;
  width: 50px;
  display: inline-block;
}
.arrowleftgo {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 200;
  font-size: 16px;
  width: 44px;
}
.arrowrightshare {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 200;
  font-size: 16px;
  width: 44px;
}
// .popShare{
//     position: relative;
// }
.popShare .share {
  position: absolute;
  left: 48%;
  top: 10px;
  font-size: 18px;
}
.popShare .van-image {
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  top: 40%;
  left: 48%;
}
.popShare img {
  width: 40px;
  height: 40px;
  display: block;
}
.popShare .cancel {
  position: absolute;
  left: 48%;
  bottom: 10px;
  font-size: 18px;
}
.detailContainer {
  max-width: 830px;
  width: 92%;
  margin: 15px auto;
}
.money {
  font-size: 20px;
  color: #ff6e0b;
}
.name {
  margin-top: 10px;
  font-size: 20px;
}
.introduce {
  margin-top: 10px;
  color: #adadad;
}
.detailTab {
  margin-bottom: 60px;
}

// 导航栏
.swiper-container {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  overflow: hidden;
}
.swiper-slide {
  text-align: center;
  font-size: 12px;
  background: #f3f3f3;
  width: 25%;
  // height: 50px;
  // line-height: 5px;
  border-right: 1px solid #ffffff;
  padding: 22px 10px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide p{
  margin-top: -8px;
}
.swiper-slide span {
  font-size: 8px;
  position: absolute;
  bottom: 3px;
}
.coupon{
    margin-bottom: 60px;
    // overflow: hidden;
}
.van-cell--clickable {
  margin-top: -40px;
}
.van-goods-action{
    z-index: 999;
}

.speak .one{
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
}
.speak span{
    float: left;
    width: 50%;
    text-align: center;
    margin-top: 50px;
}
.speak span p:nth-child(2){
    color: red;
}
</style>