<template>
    <div>
        <div class="set">
            <van-nav-bar title="设置" left-arrow @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" @click="$router.push('./search')"/>
                </template>
            </van-nav-bar>
            <p @click="$router.push('/address')">地址管理</p>
            <p>经营证照</p>
            <p>协议规划</p>
            <p>麦商城用户协议</p>
            <p>麦商城隐私政策</p>
            <p>麦账号使用协议</p>
            <p>麦账号隐私政策</p>
        </div>
    </div>
</template>
<style>
    .set .van-icon{
        color: #999999 !important;
    }
    .set p{
        width: 90%;
        display: block;
        margin: 10px auto;
        font-size: 16px;
        height: 40px;
        line-height: 30px;
        padding-left: 10px;
        border-bottom: 1px solid rgb(230, 227, 227);
   }
</style>