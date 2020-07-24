<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <p class="loginname">麦账号注册</p>
        <div class="register">
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                autocomplete="off"
                name="username"
                placeholder="邮箱/手机号码/小米ID"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                placeholder="再次输入密码"
                :rules="[{ required: true, }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                注册
                </van-button>
            </div>
            </van-form>
            </div>
    </div>
</template>

<script>

    import { Toast } from 'vant';
    export default {
        data() {
            return {
            username: '',
            password: '',
            password2: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                this.$axios.get("register",{params}).then((res)=>{
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                _this.$router.push("/login");
                            }
                            });
                    }else{
                        Toast("注册失败");
                    }
                })
            },
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

<style lang="scss" scoped>
.register .van-nav-bar .van-icon{
    color: #9b9b9b;
}
.register .van-form{
    width: 90%;
    margin: 20px auto;
}
.register .van-button{
    background-color: #ff6700;
    border: 0;
    height: 50px;
    margin-top: 50px;
    border-radius: 10px;
}
.register .van-field{
    height: 60px;
    line-height:40px;
    // padding-bottom: 10px;
    background-color: #f7f7f7;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
}
.register input{
    padding-bottom: 5px;
}
</style>