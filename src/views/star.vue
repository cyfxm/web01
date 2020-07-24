<template>
    <div>
        <!-- 头部导航栏 -->
        <div class="star-nav">
            <van-nav-bar title="" left-text="推荐 小米智能生活    ">
            <template #right>
                <van-icon name="user-circle-o" size="24" />
            </template>
            </van-nav-bar>
            <van-cell title="兴趣圈" is-link value="2.4万人已加入" />
            <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <p>10X系列</p>
                <p>全芯超越</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <p>有奖征集</p>
                <p>智能乐活方案</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                <p>米10青春版</p>
                <p>轻薄5G手机</p>
            </van-grid-item>
            </van-grid>
        </div>
        <!-- 内容 -->
        <div class="star-conintainer">
            <van-grid :border="false" :column-num="4">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <p>10X系列</p>
                <p>全芯超越</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <p>有奖征集</p>
                <p>智能乐活方案</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                <p>米10青春版</p>
                <p>轻薄5G手机</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                <p>米10青春版</p>
                <p>轻薄5G手机</p>
            </van-grid-item>
            </van-grid>
        </div>
        <!-- 商品 -->
        <div class="star-shopping">
            <van-grid :border="false" :column-num="2">
            <van-grid-item>
                <van-image  :src="require('../assets/images/62.jpg')" />
                <p># 11.11你打算买什么?</p>
                <p>只要9.9,米家又一款不可错过的随身好物</p>
            </van-grid-item>
            <van-grid-item>
                <van-image  :src="require('../assets/images/63.jpg')" />
                <p># 晒出最近你买了啥?</p>
                <p>小米U盘美极了</p>
            </van-grid-item>
            <van-grid-item>
                <van-image  :src="require('../assets/images/64.jpg')" />
                <p># 11.11你打算买什么?</p>
                <p>小米9 Pro:全面升级,价格 依旧很4G</p>
            </van-grid-item>
            <van-grid-item>
                <van-image  :src="require('../assets/images/65.png')" />
                <p># 小米10周年米粉节~新品上市</p>
                <p>小米真无线蓝牙耳机 Ari 2s,全面升级</p>
            </van-grid-item>
            </van-grid>
        </div>
        <vantabber></vantabber>
    </div>
</template>
<script>
import vantabber from "../components/public/vantabbar.vue"
export default {
     components:{
            vantabber
        },
        created(){
            this.$store.state.active = 2;
        }
}
</script>
<style>
/* 头部导航栏 */
.star-nav .van-nav-bar__text{
    font-size: 16px; 
    color: black !important;
    font-weight: bold !important;
}
.star-nav .van-nav-bar__title{
    padding-left: 30px;
    font-size: 16px; 
    color: black !important;
    font-weight: bold !important;
}
.star-nav .van-icon-user-circle-o{
    color: #e8e8e8 !important;
}
.star-nav .van-cell .van-cell__title{
    font-weight: bold;
}
.star-nav .van-cell .van-cell__value{
    font-weight: bold;
    font-size: 12px;
    color: black;
}
.star-nav .van-grid{
    width: 95%;
    margin: 0 auto;
}
.star-nav .van-grid .van-grid-item img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
}
.star-nav .van-grid .van-grid-item .van-grid-item__content p:nth-child(2){
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
}
.star-nav .van-grid .van-grid-item .van-grid-item__content p:nth-child(3){
    font-size: 10px;
    margin-top: 5px;
    color: #c0c0c0;
}
/* 内容 */
.star-conintainer{
    width: 100%;
    max-width: 720px;
    min-width: 320px;
    margin:10px auto;
}
.star-conintainer .van-grid{
    width: 98%;
    margin: 0 auto;
    overflow: hidden;
}
.star-conintainer .van-grid-item__content{
    width: 100%;
    margin-left: 5px;
}
.star-conintainer .van-grid .van-grid-item{
    width: 24%;
}
.star-conintainer .van-image img{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.star-conintainer .van-grid-item__content p:nth-child(2){
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
}
.star-conintainer .van-grid-item__content p:nth-child(3){
    font-size: 10px;
    margin-top: 5px;
    color: #c0c0c0;
}
/* 商品 */
.star-shopping{
    width: 100%;
    max-width: 720px;
    min-width: 320px;
    margin:10px auto;
    margin-bottom: 60px;
}
.star-shopping .van-grid{
    width: 95%;
    margin: 0 auto;
}
.star-shopping .van-grid-item__content img{
    border-radius: 8px;
}
.star-shopping .van-grid-item__content p:nth-child(2){
    font-size: 12px;
    margin-top: 5px;
    color: #c0c0c0;
    text-align: left;
    /* margin-left: -20px; */
}
.star-shopping .van-grid-item__content p:nth-child(3){
    font-size: 14px;
    margin-top: 5px;
    text-align: left;
}
</style>