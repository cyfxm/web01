<template>
    <div>
        <!-- 广告页advertpage.vue -->
        <h1 class="go" @click="goHome">跳过广告<font style="font-size:12px;color:red;padding-left:5px">{{num}}</font></h1>
        <img class="logo" src="../../assets/images/xmad_15323220713837_GLBVX.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home");//跳转首页
                }else{
                    this.num--;
                }
            },1000)

            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style>
 /* div{
    width: 100%;
    height: 100%;
} */
.logo{
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
 }
.go{
    position: absolute;
    top: 15px;
    right: 5px;
    z-index: 300;
    vertical-align: middle;
    color: red;
    font-size: 10px;
    background-color: rgba(56, 77, 132, 0.8);
    padding: 3px;
} 
</style>