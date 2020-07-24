<template>
  <div>
      <!-- 头部导航栏 -->
    <div class="top">
      <van-row gutter="20">
        <van-col span="4">
          <van-image color="red" :src="require('../assets/images/159118565417432.png')"/>
        </van-col>
        <van-col span="17">
          <van-search @focus="getSearch" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col span="3">
          <van-icon @click="login" background-color="#fff" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </van-col>
      </van-row>
      <!-- <van-tabs>
        <van-tab title="推荐"></van-tab>
        <van-tab title="手机"></van-tab>
        <van-tab title="智能"></van-tab>
        <van-tab title="电视"></van-tab>
        <van-tab title="笔记本"></van-tab>
        <van-tab title="家电"></van-tab>
      </van-tabs> -->
    </div>
    <!-- 轮播图 -->
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><van-image :src="require('../assets/images/images/img1.jpg')" /></van-swipe-item>
            <van-swipe-item><van-image :src="require('../assets/images/images/img2.jpg')" /></van-swipe-item>
            <van-swipe-item><van-image :src="require('../assets/images/images/img3.jpeg')" /></van-swipe-item>
            <van-swipe-item><van-image :src="require('../assets/images/images/3.jpg')" /></van-swipe-item>
        </van-swipe>
    </div>
     <!-- 分类 -->
    <div class="classify">
        <div class="w">
            <ul>
                <li><a href="script:;"><img src="../assets/images/1.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/2.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/3.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/4.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/5.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/6.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/7.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/8.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/9.png"></a></li>
                <li><a href="script:;"><img src="../assets/images/10.png"></a></li>
            </ul>
        </div>
    </div>

    <!-- 内容 -->
    <div class="container">
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image :src="require('../assets/images/11.jpg')"  />
            </van-grid-item>
            <van-grid-item>
                <van-image :src="require('../assets/images/12.jpg')"  />
            </van-grid-item>
            <van-grid-item>
                <van-image :src="require('../assets/images/13.jpg')"  />
            </van-grid-item>
        </van-grid>
        <!-- <van-image :src="require('../assets/images/15.jpg')" /> -->
    </div>
    <div class="mi-one">
        <van-image :src="require('../assets/images/14.jpg')" />
    </div>
    <!-- 商品介绍 -->
    <div class="mi-two">
        <van-image :src="require('../assets/images/15.jpg')" />
        <div class="product">
                <ul>
                    <router-link to="/details" tag="li">
                       <van-image :src="require('../assets/images/16.jpg')" />
                        <p>小米10Pro</p>
                        <p>骁龙865/50倍变焦</p>
                        <p>￥4999起</p>
                        <button>立即购买</button>
                    </router-link>
                    <router-link to="/details" tag="li">
                       <van-image :src="require('../assets/images/17.jpg')" />
                        <p>小米10</p>
                        <p>骁龙865/1亿像素相机</p>
                        <p>￥3999起</p>
                        <button>立即购买</button>
                    </router-link>
                    <router-link to="/details" tag="li">
                        <van-image :src="require('../assets/images/18.jpg')" />
                        <p>Redmi K30</p>
                        <p>120Hz流速屏，全速热爱</p>
                        <p>￥1599起</p>
                        <button>立即购买</button>
                    </router-link>
                    <router-link to="/details" tag="li">
                        <van-image :src="require('../assets/images/19.jpg')" />
                        <p>Redmi K30 5G</p>
                        <p>双模5G，120Hz流速屏</p>
                        <p>￥1999起</p>
                        <button>立即购买</button>
                    </router-link>
                    <router-link to="/details" tag="li">
                        <van-image :src="require('../assets/images/20.jpg')" />
                        <p>Redmi Note 8Pro</p>
                        <p>6400万全场景四摄</p>
                        <p>￥1199起</p>
                        <button>立即购买</button>
                    </router-link>
                    <router-link to="/details" tag="li">
                        <van-image :src="require('../assets/images/21.jpg')" />
                        <p>Redmi Note 8</p>
                        <p>千元4800万四摄</p>
                        <p>￥899起</p>
                        <button>立即购买</button>
                    </router-link>
                </ul>
        </div>
    </div>

    <!-- 电视产品 -->
    <div class="mi-tvProducts">
        <van-image :src="require('../assets/images/22.png')" />
        <div class="product">
                <ul>
                    <li>
                       <van-image :src="require('../assets/images/23.png')" />
                        <p>小米电视4A 65寸</p>
                        <p>4K HDR，人工智能语音系统</p>
                        <p>￥2599起</p>
                        <button>立即购买</button>
                    </li>
                    <li>
                       <van-image :src="require('../assets/images/24.jpg')" />
                        <p>小米电视4X 43寸</p>
                        <p>FHD全高清屏，人工智能语音</p>
                        <p>￥1199起</p>
                        <button>立即购买</button>
                    </li>
                    <li>
                        <van-image :src="require('../assets/images/25.jpg')" />
                        <p>小米电视4C 50英寸</p>
                        <p>4K HDR，钢琴烤漆</p>
                        <p>￥1599起</p>
                        <button>立即购买</button>
                    </li>
                    <li>
                        <van-image :src="require('../assets/images/26.jpg')" />
                        <p>小米电视4C 55寸</p>
                        <p>4K HDR，人工智能系统</p>
                        <p>￥1799起</p>
                        <button>立即购买</button>
                    </li>
                    <li>
                        <van-image :src="require('../assets/images/27.jpg')" />
                        <p>小米电视4A 32寸</p>
                        <p>人工智能系统，高清液晶屏</p>
                        <p>￥699起</p>
                        <button>立即购买</button>
                    </li>
                    <li>
                        <van-image :src="require('../assets/images/28.png')" />
                        <p>小米电视4A 50寸</p>
                        <p>4K HDR，人工智能语音系统</p>
                        <p>￥1599起</p>
                        <button>立即购买</button>
                    </li>
                </ul>
                <div class="productMore">更多小米电视产品 ></div>
        </div>
    </div>
    <!--  电脑产品 -->
    <div class="mi-pcProduct">
        <van-image :src="require('../assets/images/29.jpg')" />
        <van-image :src="require('../assets/images/30.jpg')" />
        <ul>
            <li>
               <van-image :src="require('../assets/images/31.jpg')" />
                <p>Air 13.3" 2019款</p>
                <p>新一代独立显卡</p>
                <p>￥4999起</p>
                <button>立即购买</button>
            </li>
            <li>
                <van-image :src="require('../assets/images/32.jpg')" />
                <p>小米笔记本15.6" MX...</p>
                <p>全面均衡的国民轻薄本</p>
                <p>￥3899起</p>
                <button>立即购买</button>
            </li>
            <li>
                <van-image :src="require('../assets/images/33.jpg')" />
                <p>小米游戏本</p>
                <p>冷酷的性能怪兽</p>
                <p>￥8999起</p>
                <button>立即购买</button>
            </li>
            <li>
                <van-image :src="require('../assets/images/34.jpg')" />
                <p>Pro 15.6" GTX显卡</p>
                <p>更强悍的专业笔记本/p>
                <p>￥7999起</p>
                <button>立即购买</button>
            </li>
        </ul>
        <div class="productMore">更多小米电脑产品 ></div>
    </div>
    <!-- 空调产品 -->
    <div class="mi-airProduct">
        <van-image :src="require('../assets/images/35.jpg')" />
        <van-image :src="require('../assets/images/36.png')" />
        <ul>
            <li>
                <van-image :src="require('../assets/images/37.png')" />
                <p>空调 （1.5匹/变频/...</p>
                <p>变频节能，高效制冷热</p>
                <p>￥2099起</p>
            </li>
            <li>
                <van-image :src="require('../assets/images/38.jpg')" />
                <p>米家洗烘一体机Pro</p>
                <p>智能洗烘，省心省力</p>
                <p>￥2999起</p>
            </li>
            <li>
               <van-image :src="require('../assets/images/39.jpg')" />
                <p>空调 （大1匹/定频...</p>
                <p>出众静音，快速制冷热</p>
                <p>￥1499起</p>
            </li>
            <li>
                <van-image :src="require('../assets/images/40.jpg')" />
                <p>米家洗烘一体机</p>
                <p>智能烘干，高效净衣</p>
                <p>￥2099起</p>
            </li>
            <li>
                <van-image :src="require('../assets/images/41.png')" />
                <p>空调C1（1.5匹/...</p>
                <p>变频节能省电，自清洁</p>
                <p>￥2099起</p>
            </li>
            <li>
               <van-image :src="require('../assets/images/42.png')" />
                <p>Redmi波轮洗衣机1A</p>
                <p>一键操作，父母都爱用</p>
                <p>￥799起</p>
            </li>
        </ul>
        <div class="productMore">更多米家家电产品 ></div>
    </div>
     <!-- 产品分类 -->
    <div class="mi-productClassify">
            <ul>
               <li><van-image :src="require('../assets/images/43.png')" /></li>
               <li><van-image :src="require('../assets/images/44.png')" /></li>
               <li><van-image :src="require('../assets/images/45.png')" /></li>
               <li><van-image :src="require('../assets/images/46.png')" /></li>
               <li><van-image :src="require('../assets/images/47.png')" /></li>
                <li><van-image :src="require('../assets/images/48.png')" /></li>
            </ul>
            <div class="bottom"><van-image :src="require('../assets/images/50.png')" /></div>
            <p>了解小米</p>
    </div>
    <vantabber></vantabber>
  </div>
</template>
<script>
import vantabber from "../components/public/vantabbar.vue"
export default {
    methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            },
            login(){
                this.$router.push("/my");
            }
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 0;
        }
};
</script>
<style>
body {
  background-color: #f3f3f3;
  padding: 0;
}
/* 头部 */
.top {
  max-width: 860px;
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
}
.top .van-row {
  height: 42px;
  width: 100%;
}
.top .van-col {
  height: 42px;
  line-height: 42px;
}
.top .van-image .van-image__img {
  margin-top: 5px;
  text-align: center;
  display: block;
  /* color :red; */
}
.top .van-search {
  padding: 0;
  border: 1px solid #ccc;
  width: 250px;
  height: 32px;
  margin-top: 8px;
}
.top .van-search__content {
  background-color: #ffffff !important;
}
.top .van-col--4{
    font-size: 20px;
    text-align: center;
}
.top .van-col--3 .van-icon img {
  width: 20px;
  height: 20px;
  display: block;
  margin-top: 14px;
}
.van-tabs--line .van-tabs__wrap {
  height: 0px;
  /* background-color: #f3f3f3; */
}
.van-tabs--line,
.van-tabs__wrap,
.van-tabs__nav,
.van-tabs__nav {
  width: 100%;
  height: 30px !important;
  background-color: #f3f3f3 !important;
}
.van-tab {
  width: 26px;
  height: 30px;
  flex-basis: 15% !important;
}
.van-tab span {
  font-size: 12px;
}
.van-tabs__line {
  background-color: #ed5b00 !important;
}

/* 轮播图 */
.banner{
    max-width: 860px;
    width: 100%;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 180px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

  /* 分类 */
.classify{
    max-width: 860px;
    width: 100%;
    /* height: 500px; */
    margin: 10px auto;
    overflow: hidden;
}
.classify ul{
    width: 100%;
    float: left;
}
.classify ul li{
    width: 20%;
    height: 76px;
    float: left;
    box-sizing: border-box;
}
.classify ul li img{
    width: 100%;
    height: 76px;
    display: block;
    /* box-sizing: border-box; */
}

/* 内容 */
.container{
    max-width: 860px;
    width: 100%;
    /* height: 160px; */
    height: 254px;
    margin: 10px auto;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 100px;
}
.container .van-grid{
    width: 100%;
}
.container .van-grid .van-grid-item:nth-of-type(1){
    width: 100%;
    height: 254px;
}
.container .van-grid .van-grid-item:nth-of-type(1) img {
    width:  168%;
    height: 254px;
    display: block;
     top: 0px;
    right: 0px;
}
.container .van-grid .van-grid-item:nth-of-type(2){
    width: 50%;
    height: 126px;
    float: right;
    display:block;
    position: absolute;
    margin-left: 1px;
    top: 0px;
    right: 0px;
}
.container .van-grid .van-grid-item:nth-of-type(2) img {
    width: 100%;
    height: 126px;
    float: right;
    display:block;
    margin-left: 1px;
     top: 0px;
    right: 0px;
}
.container .van-grid .van-grid-item:nth-of-type(3){
    width: 50%;
    height: 126px;
    float: right;
    position: absolute;
    display:block;
    top: 126px;
    right: 0;
    margin-left: 1px;
}
.container .van-grid .van-grid-item:nth-of-type(3) img {
    width: 100%;
    height: 126px;
    float: right;
    display:block;
    top: -126px;
    right: -179px;
    margin-left: 1px;
}

.mi-one{
    margin-top: -90px;
}

/* 产品介绍 */
.mi-tvProducts{
    max-width: 860px;
    width: 100%;
    margin: 10px auto;
    height: 1130px;
    overflow: hidden;
}
.mi-tvProducts .product{
    width: 100%;
    /* height: 900px; */
    background-color: white;
}
.mi-tvProducts .product ul li{
    width: 48%;
    float: left;
    /* margin: 5px; */
    box-sizing: border-box;
}
.mi-tvProducts .product ul li:nth-child(2n-1){
    margin: 5px;
}
.mi-tvProducts .product ul li:nth-child(2n){
    margin-top: 5px;
}
.mi-tvProducts .product ul li img{
    width: 100%;
    height: 140px;
}
.mi-tvProducts .product ul li p{
    text-align: center;
}
.mi-tvProducts .product ul li p:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
}
.mi-tvProducts .product ul li p:nth-child(3){
    font-size: 12px;
    color: rgb(163, 158, 158);
    margin-top: 5px;
}
.mi-tvProducts .product ul li p:nth-child(4){
    font-size: 14px;
    margin-top: 5px;
    color: rgb(248, 99, 45);
}
.mi-tvProducts .product ul li button{
    background-color: rgb(248, 99, 45);
    border: 0;
    padding: 7px 22px;
    text-align: center;
    display: block;
    margin: 10px auto;
    color: white;
    border-radius: 5px;
}
.mi-tvProducts .product .productMore{
    color: rgb(163, 158, 158);
    font-size: 14px;
    width: 100%;
    right: 15%;
    position: relative;
    line-height: 50px;
}
/* 电视产品 */
.mi-two{
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
}
.mi-two .product{
    width: 100%;
    /* height: 900px; */
    background-color: white;
}
.mi-two .product ul li{
    width: 48%;
    float: left;
    /* margin: 5px; */
    box-sizing: border-box;
}
.mi-two .product ul li:nth-child(2n-1){
    margin: 5px;
}
.mi-two .product ul li:nth-child(2n){
    margin-top: 5px;
}
.mi-two .product ul li img{
    width: 100%;
    height: 140px;
}
.mi-two .product ul li p{
    text-align: center;
}
.mi-two .product ul li p:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
}
.mi-two .product ul li p:nth-child(3){
    font-size: 12px;
    color: rgb(163, 158, 158);
    margin-top: 5px;
}
.mi-two .product ul li p:nth-child(4){
    font-size: 14px;
    margin-top: 5px;
    color: rgb(248, 99, 45);
}
.mi-two .product ul li button{
    background-color: rgb(248, 99, 45);
    border: 0;
    padding: 7px 22px;
    text-align: center;
    display: block;
    margin: 10px auto;
    color: white;
    border-radius: 5px;
}
.mi-two .product .productMore{
    color: rgb(163, 158, 158);
    font-size: 14px;
    width: 100%;
    right: 15%;
    position: relative;
    line-height: 50px;
}
/* 电脑产品 */
.mi-pcProduct{
    margin-top: 10px;
    max-width: 860px;
    width: 100%;
    margin: 10px auto;
    overflow: hidden;
}
.mi-pcProduct img{
    height: 220px;
}
.mi-pcProduct ul li{
    width: 48%;
    float: left;
    /* margin: 5px; */
    box-sizing: border-box;
}
.mi-pcProduct ul li:nth-child(2n-1){
    margin: 5px;
}
.mi-pcProduct  ul li:nth-child(2n){
    margin-top: 5px;
}
.mi-pcProduct ul li img{
    width: 100%;
    height: 140px;
}
.mi-pcProduct ul li p{
    text-align: center;
}
.mi-pcProduct ul li p:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
}
.mi-pcProduct ul li p:nth-child(3){
    font-size: 12px;
    color: rgb(163, 158, 158);
    margin-top: 5px;
}
.mi-pcProduct ul li p:nth-child(4){
    font-size: 14px;
    margin-top: 5px;
    color: rgb(248, 99, 45);
}
.mi-pcProduct ul li button{
    background-color: rgb(248, 99, 45);
    border: 0;
    padding: 7px 22px;
    text-align: center;
    display: block;
    margin: 10px auto;
    color: white;
    border-radius: 5px;
}
.mi-pcProduct .productMore{
    color: rgb(163, 158, 158);
    font-size: 14px;
    width: 100%;
    right: 15%;
    position: relative;
    line-height: 50px;
}
.mi-pcProduct .first img{
    height: 140px;
    /* margin-top: 50px; */
}

/* 空调产品 */
.mi-airProduct{
    max-width: 860px;
    width: 100%;
    margin: 10px auto;
    background-color: white;
    margin-top: 10px;
}
.mi-airProduct img{
    height: 220px;
}
.mi-airProduct  ul li{
    width: 48%;
    float: left;
    /* margin: 5px; */
    box-sizing: border-box;
}
.mi-airProduct  ul li:nth-child(2n-1){
    margin: 5px;
}
.mi-airProduct   ul li:nth-child(2n){
    margin-top: 5px;
}
.mi-airProduct ul li img{
    width: 100%;
    height: 180px;
}
.mi-airProduct ul li p{
    text-indent: 1em;
}
.mi-airProduct ul li p:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
}
.mi-airProduct ul li p:nth-child(3){
    font-size: 12px;
    color: rgb(163, 158, 158);
    margin-top: 5px;
}
.mi-airProduct ul li p:nth-child(4){
    font-size: 14px;
    margin-top: 5px;
    color: rgb(248, 99, 45);
}
.mi-airProduct .productMore{
    color: rgb(163, 158, 158);
    font-size: 14px;
    width: 100%;
    right: 15%;
    position: relative;
    line-height: 50px;
}
.mi-airProduct .first img{
    height: 140px;
    /* margin-top: 50px; */
}

.mi-productClassify{
    max-width: 860px;
    width: 100%;
    height: 940px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}
.mi-productClassify ul li{
    width: 49.5%;
    display: block;
    box-sizing: border-box;
    float: left;
}
.mi-productClassify ul li,
.mi-productClassify ul li img{
    /* width: 179px; */
    height: 240px;
    float: left;
}
.mi-productClassify ul li{
    margin-left: 2px;
    margin-bottom: 2px;
}
.mi-productClassify ul li:nth-of-type(2n-1){
    margin-left: 0;
}
.mi-productClassify ul li:nth-of-type(5){
    margin-bottom:10px;
}
.mi-productClassify ul li:nth-of-type(6){
    margin-bottom:10px;
}
.mi-productClassify .bottom,
.mi-productClassify .bottom img{
    width: 100%;
    height: 140px;
}
.mi-productClassify p{
    position: absolute;
    top: 880px;
    width: 100%;
    text-align: center;
    line-height: 53px;
    height: 53px;
    background-color: white;
    margin-bottom: 60px;
}
</style>