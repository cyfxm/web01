<template>
    <div>
        <div class="service">
            <van-nav-bar title="服务" left-arrow @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" @click="$router.push('./search')"/>
                </template>
            </van-nav-bar>
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
        </div>
    </div>
</template>
<style>
    .service .one{
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
    }
    .service span{
        float: left;
        width: 50%;
        text-align: center;
        margin-top: 50px;
    }
    .service span p:nth-child(2){
        color: red;
    }
    .service .van-icon{
        color: #999999 !important;
    }
</style>