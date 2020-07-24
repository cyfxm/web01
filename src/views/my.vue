<template>
    <div>
        <!-- 头部 -->
        <div class="my-top">
            <van-icon name="user-circle-o" color="#ffb500"/>
            <div v-if="$store.state.username">
                    <h3 v-text="$store.state.username"></h3>
                    <h5 @click="$store.state.username=''">退出</h5>
            </div>
            <div v-else>
                <router-link to="/login" tag="span">登录/注册</router-link>
            </div>
        </div>
        <!-- 订单 -->
        <div class="my-order" @click="$router.push('orderlist')">
            <van-row>
                <van-col span="18">我的订单</van-col>
                <van-col span="6">全部订单<van-icon name="arrow" /></van-col>
            </van-row>
        </div>
        <!-- 待付款 -->
        <div class="my-obligation">
            <van-grid>
                <van-grid-item icon="paid" text="待付款" is-link to="/orderlist/orderPay"/>
                <van-grid-item icon="logistics" text="待收货"  is-link to="/orderlist/orderGoods"/>
                <van-grid-item icon="setting-o" text="退换修" />
            </van-grid>
        </div>

        <!-- 会员中心 -->
        <div class="my-menber">
            <van-cell title="会员中心" to="/member" icon="gem-o">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
            <van-cell title="我的优惠" to='/favourable' icon="pending-payment">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
        </div>

        <!-- 服务中心 -->
        <div class="my-service">
            <van-cell title="服务中心" to="/service" icon="like-o">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
            <van-cell title="我的地址" icon="shop-o" @click="address">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
        </div>

        <!-- 我的f码 -->
        <div class="my-F">
            <van-cell title="我的F码" to="/myF" icon="flag-o">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
            <van-cell title="礼物码兑换" to="/gift" icon="point-gift-o">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
        </div>

        <!-- 设置 -->
        <div class="my-set">
            <van-cell title="设置" icon="setting-o" to="/set">
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
            </van-cell>
        </div>
        <vantabber></vantabber>
    </div>
</template>
<script>
import vantabber from "../components/public/vantabbar.vue"
export default {
    methods:{
            // 定义跳转方法
            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 3;
        }
}
</script>
<style>
body{
    background-color: #f5f5f5 !important;
}
/* 头部 */
.my-top{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    height: 80px;
    background-color: #f37d0f;
}
.my-top .van-icon{
    margin-top: 20px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 40px;
    margin-left: 10px;
}
.my-top span{
    display: block;
    margin-top: -32px;
    margin-left: 60px;
    font-size: 12px;
    color: #fff;
}
.my-top h3{
    display: block;
    margin-top: -32px;
    margin-left: 60px;
    font-size: 12px;
    color: #fff;
}
.my-top h5{
    display: block;
    margin-top: -18px;
    margin-left: 120px;
    font-size: 12px;
}
/* 订单 */
.my-order{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
    color: #212121;
}
.my-order .van-row{
    width: 100%;
    height: 40px;
    background-color: #fff;
    line-height: 40px;
    border-bottom: 1px solid rgb(211, 201, 201);
}
.my-order .van-col--18{
    padding-left: 15px;
}
.my-order .van-col--6 {
    font-size: 12px;
}
.my-order .van-col--6 .van-icon-arrow{
    padding-left: 5px;
    font-size: 18px;
    color: rgb(138, 133, 133);
    /* margin-top: 15px; */
    top: 5px;
}

/* 待付款 */
.my-obligation{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
}
.my-obligation .van-grid-item{
    flex-basis: 33.3% !important;
    color: rgb(138, 133, 133);
}
.my-obligation .van-grid-item .van-icon{
    font-size: 20px;
}

/* 会员中心 */
.my-menber{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
}
.my-menber .van-cell{
    height: 52px;
    border-bottom: 1px solid rgb(226, 220, 220);
}
.my-menber .van-cell:nth-child(2){
    border-bottom:0;
}
.my-menber .van-cell .van-icon-gem-o{
    color: #fdbf2d;
    font-size: 22px;
    padding-right: 28px;
}
.my-menber .van-cell .van-icon-pending-payment{
     color: #51bbe0;
    font-size: 22px;
    padding-right: 28px;
}
.my-menber .van-cell .van-icon-arrow{
    font-size: 18px;
    color: rgb(138, 133, 133);
}
/* 服务中心 */
.my-service{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
}
.my-service .van-cell{
    height: 52px;
    border-bottom: 1px solid rgb(226, 220, 220);
}
.my-service .van-cell:nth-child(2){
    border-bottom:0;
}
.my-service .van-cell .van-icon-like-o {
    color: red;
    font-size: 22px;
    padding-right: 28px;
}
.my-service .van-cell .van-icon-shop-o{
     color: #ff8b43;
    font-size: 22px;
    padding-right: 28px;
}
.my-service .van-cell .van-icon-arrow{
    font-size: 18px;
    color: rgb(138, 133, 133);
}

/* 我的F码 */
.my-F{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
}
.my-F .van-cell{
    height: 52px;
    border-bottom: 1px solid rgb(226, 220, 220);
}
.my-F .van-cell:nth-child(2){
    border-bottom:0;
}
.my-F .van-cell .van-icon-flag-o {
    color: #ffb302;
    font-size: 22px;
    padding-right: 28px;
}
.my-F .van-cell .van-icon-point-gift-o{
     color: #f8c36b;
    font-size: 22px;
    padding-right: 28px;
}
.my-F .van-cell .van-icon-arrow{
    font-size: 18px;
    color: rgb(138, 133, 133);
}

/* 设置 */
.my-set{
    max-width: 720px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 60px;
}
.my-set .van-cell{
    height: 52px;
}
.my-set .van-cell .van-icon-setting-o {
    color: #818c99;
    font-size: 22px;
    padding-right: 28px;
}
.my-set .van-cell .van-icon-arrow{
    font-size: 18px;
    color: rgb(138, 133, 133);
}
</style>