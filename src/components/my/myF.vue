<template>
    <div>
        <div class="myF">
            <van-nav-bar title="我的F码" left-arrow @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" @click="$router.push('./search')"/>
                </template>
            </van-nav-bar>
            <van-search
                show-action
                placeholder="输入F码兑换"
                >
                <template #action>
                    <div>兑换</div>
                </template>
                </van-search>
        </div>
    </div>
</template>
<style>
 .myF .van-icon{
        color: #999999 !important;
    }
</style>