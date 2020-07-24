<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />
        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
        />
    </div>
</template>

<script>
    // 引入地址
    import areaList from "./erea.js";
    export default {
        data() {
            return {
            areaList,
            searchResult: [],
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                // 调用vuex方法
                this.$store.commit("address/add",{
                    name,
                    tel,
                    address:province+city+county+addressDetail,
                    province,
                    city,
                    county,
                    areaCode,
                    addressDetail
                });
                this.$router.go(-1); //回到上一页
            },
        },
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 组件内路由守卫
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            if(to.path == "/my"){
                this.$store.state.vanTabbar = true; 
            }
            next();
        }
    };
</script>