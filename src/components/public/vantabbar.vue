<template>
    <div>

    <!-- 导航 -->
    <van-tabbar id="vanTabbar" v-model="$store.state.active" :route="true" >
        <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/classify" icon="bar-chart-o">分类</van-tabbar-item>
       <!-- <van-tabbar-item icon="circle" to="/star">星球</van-tabbar-item> -->
        <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/login" icon="user-o" route v-show="!$store.state.username">我的</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o" route v-show="$store.state.username">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 路由显示位置 -->
    </div>
</template>

<script>
    export default {
        methods:{
             onsubmit(){
                this.active = this.$store.state.active;

                console.log(this.active)
                // this.activeColor=red;
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：跳转订单页面
                if(this.$store.state.username){
                    this.$router.push('/my')
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/my"
                        }
                    })
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>

#vanTabbar{
  z-index: 999;
  background-color: #fff;
}
</style>