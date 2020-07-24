<template>
    <div>
        <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
        <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
        <!-- http://localhost:8080/guidepage  引导页 -->
        <!-- http://localhost:8080/advertpage  广告页 -->
        <!-- Swiper -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/images/71.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/70.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/69.jpg" alt="">
                    <van-button plain type="primary" size="small" to="/home">点击体验</van-button>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
        mounted(){
            new Swiper('.guidepagecontainer', {
                // direction: 'vertical',
                pagination: {
                    el: '.guidepagepagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>  
    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width:100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        img{
            // margin: 200px auto 0 auto;
            width:100%;
            height:100%;
        }
        h3{
            font-size: 20px;
            color:#404040;
        }
    }
    .van-button__text{
        width: 120px;
        height: 30px;
        line-height: 30px;
        z-index: 200;
        position: absolute;
        color: #31b3f5;
        bottom: 90px;
        border: 1px solid #ccc;
        background-color: #fefefe;
        border-radius: 20px;
        // padding: 50px;
        padding: 5px;
    }
</style>