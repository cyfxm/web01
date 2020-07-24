<template>
    <div>
        <div class="favourable">
            <van-nav-bar title="优惠卷列表" left-arrow @click-left="$router.go(-1)">
                <template #right>
                    <van-icon name="search" size="24" @click="$router.push('./search')"/>
                </template>
            </van-nav-bar>
            <van-tabs v-model="activeName">
                <van-tab title="未使用" name="a">你没有未使用的优惠卷</van-tab>
                <van-tab title="已使用/已过期" name="b">你没有未使用的优惠卷</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'a',
        };
  },
   created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
}
</script>
<style>
.favourable .van-nav-bar{
    background-color:#f2f2f2;
}
.favourable .van-icon{
    color: #999999 !important;
    font-size: 20px;
}
.favourable .van-tabs__nav{
    font-size: 16px;
    background-color:#f2f2f2;
}
.favourable .van-tab--active{
    color: #ee0a24;
}
.favourable .van-tab__pane{
    text-align: center;
    line-height: 100px;
}
</style>