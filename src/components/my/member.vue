<template>
    <div>
        <div class="member">
            <van-nav-bar
                title="会员中心"
                left-arrow
                @click-left="$router.go(-1)"
            />
            <p>请前往麦App查看会员福利</p>
            <van-button type="danger">立即下载App</van-button>
        </div>
    </div>
</template>
<script>
export default {
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
<style >

.member .van-nav-bar{
    background-color:#f2f2f2;
}
.member .van-icon{
    color: #999999 !important;
    font-size: 20px;
}
.member p{
    font-size: 18px;
    text-align: center;
    margin-top: 50px;
}
.member button{
    background-color: #ff6700 !important;
    width: 90%;
    height: 52px !important;
    display: block !important;
    margin: 30px auto !important;
}
</style>