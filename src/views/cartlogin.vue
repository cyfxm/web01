<template>
    <div>
        <!-- 头部导航栏 -->
        <div class="shopping-nav">
            <van-nav-bar title="购物车" left-arrow  @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" color="#b2b2b2"/>
                </template>
            </van-nav-bar>
        </div>
        <!-- 登录 -->
        <div class="shopping-login">
            <van-cell title="登录后享受更多优惠" is-link value="去登陆" @click="login" />
        </div>
        <!-- 猜你喜欢 -->
        <div class="shopping-like">
            <div class="like">
                <van-image :src="require('../assets/images/52.jpg')" />
            </div>
            <div class="contain">
                <ul>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/53.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/54.jpg')" />
                            <p class="dec">米家直流变频落地扇1X</p>
                            <p class="money">￥289</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/55.jpg')" />
                            <p class="dec">手机USB micro 数据线</p>
                            <p class="money">￥9.9</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/56.jpg')" />
                            <p class="dec">Redmi Note 8 Pro 6GB...</p>
                            <p class="money">￥1199</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/57.jpg')" />
                            <p class="dec">Redmi 8 4GB+64GB</p>
                            <p class="money">￥799</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                   <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        login(){
                this.$router.push("/login");
        }
    }
}
</script>
<style>
/* 头部导航栏 */
.shopping-nav{
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
}
.shopping-nav .van-nav-bar{
    height: 50px;
    background-color: #f2f2f2;
}
.shopping-nav .van-nav-bar .van-icon,
.shopping-nav .van-nav-bar .van-nav-bar__title{
    color:#767676;
}
/* 登录 */
.shopping-login{
    max-width: 860px;
    width: 100%;
    margin:0 auto;
}
.shopping-login .van-cell__value>span{
    font-size: 12px;
}
/* 猜你喜欢 */
.shopping-like{
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
    top: 50px;
}
.shopping-like .like,
.shopping-like .like img{
    width: 100%;
    height: 60px;
}
.shopping-like ul li{
    width: 49%;
    height: 235px;
    float: left;
    margin-top: 20px;
}
.shopping-like ul li img{
   width: 100%; 
   height: 178px;
   margin-top: 5px;
}
.shopping-like ul li:nth-of-type(2n){
    float: right;
}
.shopping-like ul li .dec{
    color: rgb(58, 56, 56);
    text-indent: 1em;
    margin-top: 10px;
    font-size: 14px;
}
.shopping-like ul li .money{
    text-indent: 0.7em;
    margin-top: 8px;
    color: #ff6700;
}
</style>