<template>
  <div>
    <p class="loginname">麦账号登录</p>
    <!-- 登录 -->
    <div class="login">
    <van-form @submit="onSubmit">
            <van-field
              autocomplete="off"
                v-model="username"
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
            </van-form>
    <p class="passeord">
      <router-link to="/register" tag="span">立即注册</router-link>
      <span>|</span>
      <span>忘记密码?</span>
    </p>
    <p class="otherLogin">其他方式登录</p>
    <div class="loginIcon">
      <van-image
        width="50"
        height="50"
        color="red"
        :src="require('../../assets/images/微博 (1).png')"
      />
      <van-image
        width="50"
        height="50"
        color="red"
        :src="require('../../assets/images/支付宝.png')"
      />
      <van-image
        width="50"
        height="50"
        color="red"
        :src="require('../../assets/images/微信.png')"
      />
      <p class="lang-select-list"><span>简体</span><span>|</span><span>繁体</span><span>|</span><span>English</span><span>|</span><span>常见问题</span><span>|</span><span>隐私政策</span></p>
    </div>
    </div>
  </div>
</template>
<script>
 import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      password: ""
    };
    },
     methods: {
            onSubmit(params) {
                let _this = this;
                // 判断是否传参，修改返回路径
                let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';

                this.$axios.get("login",{params}).then((res)=>{
                    console.log(res);
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                _this.$store.state.username = _this.username;
                                _this.$router.push(path);
                            }
                            });
                    }else{
                        Toast("登陆失败");
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
};
</script>
<style>

.loginname {
  font-size: 22px;
  text-align: center;
  margin: 50px auto;
}
.login .van-form {
  width: 90%;
  margin: 20px auto;
}
.login .van-form .van-cell{
  background-color: #F7f7f7;
}
.login .van-form button {
  background-color: #ff6700;
  border: none;
  border-radius: 5px;
  height: 50px;
  margin-top: 30px;
  font-size: 20px;
}
.login .van-form .register > button {
  border: 1px solid #ccc;
  color: black;
}
.login .van-form .van-cell {
  border-bottom: 1px solid #ccc;
  height: 60px;
  line-height: 50px;
  font-size: 20px;
}
.login .passeord {
  text-align: center;
  font-size: 18px;
}
.login .passeord > span {
  padding-right: 10px;
  color: #9b9b9b;
}
.login .otherLogin{
  text-align: center;
  font-size: 14px;
  color: #9b9b9b;
  margin-top: 20px;
}
.login .loginIcon{
  text-align: center;
  margin-top: 20px;

}
.login .loginIcon>.van-image{
  width: 30px;
  height: 30px;
  padding: 5px;
}
.login .loginIcon>.van-image img{
  width: 30px;
  height: 30px;
}
.login .lang-select-list{
  width: 100%;
  text-align: center;
  font-size: 16px;
  position: absolute;
  margin: 0 auto;
  bottom: 5%;
}
.login .lang-select-list>span{
  padding: 5px;
  color: #9b9b9b;
}
.login .lang-select-list>span:nth-of-type(1){
  color: black;
}
.login .van-field--error .van-field__control{
    color: #9b9b9b;
}
</style>