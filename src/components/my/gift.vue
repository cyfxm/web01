<template>
    <div>
        <div class="gift">
            <van-nav-bar title="礼物码兑换" left-arrow @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" @click="$router.push('./search')"/>
                </template>
            </van-nav-bar>
            <van-search
                show-action
                placeholder="输入礼物码码兑换"
                >
                <template #action>
                    <div>兑换</div>
                </template>
            </van-search>
        </div>
    </div>
</template>
<style>
 .gift .van-icon{
        color: #999999 !important;
    }
</style>