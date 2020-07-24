<template>
    <div>
        <div class="nav">
            <van-nav-bar
                title="用户结算"
                left-text="返回"
                left-arrow
                @click-left="cartvue"
            />
            <!-- 地址 -->
            <van-contact-card  
            :type="cardType" 
            :name="name" 
            :tel="tel" 
            add-text="添加联系人"
            @click="address1"
            :editable="true" />
        </div>
              <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.money"
            :title="item.name"
            :thumb="item.img"
            />
        </div>
        <van-radio-group v-model="radio" v-show="($store.state.cart.lists.length)">
            <van-cell-group>
                <van-cell title="支付宝" clickable @click="radio = '1'">
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                </van-cell>
                <van-cell title="微信" clickable @click="radio = '2'">
                    <template #right-icon>
                        <van-radio name="2" />
                    </template>
                </van-cell>
                <van-cell title="小米钱包" clickable @click="radio = '3'">
                    <template #right-icon>
                        <van-radio name="3" />
                    </template>
                </van-cell>
                <van-cell title="银联支付" clickable @click="radio = '4'" v-if="isshow">
                    <template #right-icon>
                        <van-radio name="4" />
                    </template>
                </van-cell>
                 <van-cell title="异支付" clickable @click="radio = '5'" v-if="isshow">
                    <template #right-icon>
                        <van-radio name="5" />
                    </template>
                </van-cell>
                 <van-cell title="信用卡分期" clickable @click="radio = '6'" v-if="isshow">
                    <template #right-icon>
                        <van-radio name="6" />
                    </template>
                </van-cell>
                 <van-cell title="花呗分期" clickable @click="radio = '7'" v-if="isshow">
                    <template #right-icon>
                        <van-radio name="7" />
                    </template>
                </van-cell>
                <van-cell class="pay" title="使用其他支付方式" is-link arrow-direction="down"  @click="isshow = !isshow" v-show="!isshow"/>
                <van-cell class="pay" title="收起其他支付方式" is-link arrow-direction="up"  @click="isshow = !isshow" v-show="isshow"/>
            </van-cell-group>
        </van-radio-group>

        <!-- 详情 -->
        <van-cell-group>
            <van-cell title="运费" value="包邮" />
        </van-cell-group>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="包邮" name="2" value="不限送货时间">
                包邮--不限送货时间
            </van-collapse-item>
        </van-collapse>
         <van-collapse v-model="activeNames">
            <van-collapse-item title="电子普通发票" name="3" value="个人">
                下载麦app领取
            </van-collapse-item>
        </van-collapse>
         <van-collapse v-model="activeNames">
            <van-collapse-item title="优惠劵" name="4" value="已优惠0元">
                没有可用优惠劵
            </van-collapse-item>
        </van-collapse>

        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单" @submit="onsubmit" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:"",
                radio: '1',
                tel:"",
                isshow:false,
                activeNames: ['1'],
            }
        },
      
        methods:{
            
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    // if(!item.isSelect) return total;
                     //返回默认价格
                    return total + parseInt(item.money) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            address1(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);

                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                if(this.$store.state.username){
                    this.$router.push('/orderList/orderAll')
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/order"
                        }
                    })
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                // this.$router.push("/orderList/orderAll")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        // beforeDestroy(){
        //     this.$store.state.vanTabbar = true;
        // }
    }
</script>
<style>
body{
    background-color: #f7f7f7;
}
.nav .van-nav-bar__left>.van-nav-bar__text,
.nav .van-nav-bar__left>.van-icon,
.nav .van-nav-bar__title{
    color :#939393;
}
.nav .van-hairline--bottom{
    background-color: #f2f2f2;
}
.van-radio-group{
    margin-top: 10px;
}
.pay{
    font-size: 12px;
    text-align: center;
    color: #c3bdcc;
}
.van-radio__icon--checked .van-icon{
    background-color:#ff5722;
    border-color: #ff5722;
}
.van-cell-group{
    margin-top: 10px;
}
.van-hairline--top-bottom .van-cell__value>span{
    font-size: 12px;
    color: #c3bdcc;
}
.van-car{
    margin-bottom: 50px;
}
.van-card,
.van-card__header{
    margin-top:10px;  
    height: 80px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
}
.van-card__thumb{
    height: 60px;
}
.van-card .van-card__thumb .van-image,
.van-card .van-card__thumb .van-image img{
    width: 41px !important;
    height: 41px !important;
    display: block;
    /* top: -5px; */
    margin: 0 auto;
    z-index: 500;
}
.van-card .van-card__content .van-card__price{
    position: absolute;
    right: 20px;
    top: 0;
    line-height: 50px;
}
.van-card .van-card__content .van-card__num{
    position: absolute;
    right: 0;
    top: 0;
    line-height: 50px;
}
.van-card .van-multi-ellipsis--l2{
    position: absolute;
    line-height: 50px;
    font-size: 14px;
}
</style>