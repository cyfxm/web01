<template>
    <div>
      
        <!-- 分类列表 -->
        <bscroll></bscroll>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/classify/BScroll" 
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        components:{
            bscroll,
            vantabber
        },
        created(){
            this.$store.state.active = 1;
        }
    }
</script>

<style lang="scss" scoped>

</style>