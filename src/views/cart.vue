<template>
    <div class="page">
        <!-- <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="$router.go(-1)"
        /> -->
        <van-nav-bar title="购物车" left-arrow @click-left="$router.push('./home')">
            <template #right>
                <van-icon name="search" size="18" @click="$router.push('./search')"/>
            </template>
            </van-nav-bar>
        <!-- 商品列表 -->
        <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
            <van-col span="2">
                <van-checkbox  :value="item.isSelect" @click="inputselect(index)"></van-checkbox>
                <!-- <input type="checkbox" :checked="item.isSelect" @click="inputselect(index)" > -->
            </van-col>
            <van-col span="7">
                <van-image
                height="100"
                fit="cover"
                :src="item.img" 
                />
            </van-col>
                <!-- :src="requrie('../assets/img/goodslist.jpg')" -->
            <van-col span="15">
                <div class="content">
                    <h1>{{item.name}}</h1>
                    <h5>{{item.introduce}}</h5>
                    <p class="price">售价：{{item.money}}</p>
                    <p>
                        <van-button type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
                        <span>{{item.num}}</span>
                        <van-button type="default" size="mini" @click="item.num++">+</van-button>
                        <van-button type="danger" class="danger" size="mini" @click="del(index)"><img src="../assets/images/删除.png" alt=""></van-button>
                    </p>
                </div>
            </van-col>
        </van-row>
        <van-submit-bar :price="total * 100" button-text="提交订单" @submit="onsubmit" v-show="($store.state.cart.lists.length)">
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>
        <!-- 购物车有否有数据 -->
        <div class="shopping-empty" v-show="!($store.state.cart.lists.length)">
            <span><van-icon name="cart-o" /></span>
            <span>购物车还是空的</span>
            <span @click="$router.push('/home')">去逛逛</span>
        </div>
        <!-- 猜你喜欢 -->
        <div class="shopping-like">
            <div class="like">
                <van-image :src="require('../assets/images/52.jpg')" />
            </div>
            <div class="contain">
                <ul>
                    <router-link to="/details" tag="li">
                        <a href="script:;">
                            <van-image :src="require('../assets/images/53.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </router-link>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/54.jpg')" />
                            <p class="dec">米家直流变频落地扇1X</p>
                            <p class="money">￥289</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/55.jpg')" />
                            <p class="dec">手机USB micro 数据线</p>
                            <p class="money">￥9.9</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/56.jpg')" />
                            <p class="dec">Redmi Note 8 Pro 6GB...</p>
                            <p class="money">￥1199</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/57.jpg')" />
                            <p class="dec">Redmi 8 4GB+64GB</p>
                            <p class="money">￥799</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                   <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/58.jpg')" />
                            <p class="dec">Redmi 8 6GB+64GB</p>
                            <p class="money">￥1099</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/59.jpg')" />
                            <p class="dec">飞利浦吸顶灯卧室28W</p>
                            <p class="money">￥299</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/60.jpg')" />
                            <p class="dec">小米手环</p>
                            <p class="money">￥1669</p>
                        </a>
                    </li>
                    <li>
                        <a href="script:;">
                            <van-image :src="require('../assets/images/61.jpg')" />
                            <p class="dec">米家驱蚊器</p>
                            <p class="money">￥59</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    // import {createNamespacedHelpers} from "vuex";
    // const {mapState} = createNamespacedHelpers("cart");
    export default {
        data() {
            return {
                checked:true,
                total:0,
                lists:[
                ]
                // lists:[]
            }
        },
        methods:{
            del(index){
                this.lists.splice(index,1)
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.money) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            },
            onsubmit(){
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：跳转订单页面
                if(this.$store.state.username){
                    this.$router.push('/order')
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/order"
                        }
                    })
                }
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            this.sum();
        },
        beforeUpdate(){
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
        }
    }
</script>

<style lang="scss" scoped>
.goodslist{
    position: relative;
    background-color: #fff;
    .van-checkbox{
        position: relative;
        left:5px;
        top:37px;
    }
    .content{
        padding-left:10px;
        h1{
            font-size: 16px;
            color: #686868;
            font-weight: normal;
        }
        h5{
            max-width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: normal;
            color: #a699b3;
        }
        .price{
            font-size: 12px;
            color:#a699b3;
        }
        span{
            display: inline-block;
            width: 30px;
            font-size: 14px;
            text-align: center;
        }
        .danger{
            span{
                font-size: 12px;
            }
        }
    }
}
.goodslist{
    width: 100%;
    height: 100px;
}
.van-col--7>.van-image{
    width: 60px;
    height: 60px !important;
    display: block;
    margin: 15px auto;
}

body{
    background-color: #fff;
}
.van-submit-bar{
    bottom: 50px;
}
.page{
    margin-bottom: 50px;
}
.page .van-nav-bar__left>.van-nav-bar__text,
.page .van-nav-bar__left>.van-icon,
.page .van-nav-bar__title{
    color :#939393;
}
.page .van-nav-bar{
    background-color: #f2f2f2;
    border-bottom: 1px solid rgb(228, 225, 225);
}
/* 猜你喜欢 */
.shopping-like{
    max-width: 860px;
    width: 100%;
    margin: 40px auto;
    top: 50px;
}
.shopping-like .like,
.shopping-like .like img{
    width: 100%;
    height: 60px;
}
.shopping-like ul li{
    width: 49%;
    height: 235px;
    float: left;
    margin-top: 20px;
}
.shopping-like ul li img{
   width: 100%; 
   height: 178px;
   margin-top: 5px;
}
.shopping-like ul li:nth-of-type(2n){
    float: right;
}
.shopping-like ul li .dec{
    color: rgb(58, 56, 56);
    text-indent: 1em;
    margin-top: 10px;
    font-size: 14px;
}
.shopping-like ul li .money{
    text-indent: 0.7em;
    margin-top: 8px;
    color: #ff6700;
}
.shopping-empty{
    width: 100%;
    height: 80px;
    text-align: center;
    position: relative;
    margin-top: 20px;
    // background-color: #fff;
}
.shopping-empty span{
    color: #ababab;
    height: 40px;
    line-height: 40px;
    padding-right: 15px;
}
.shopping-empty span:nth-child(2){
    position: absolute;
    top: 5px;
    display: inline-block;
    left: 37%;
}
.shopping-empty span:nth-child(3){
    position: absolute;
    display: inline-block;
    right: 18%;
    top: 10px;
    height: 20px;
    border: 1px solid #ccc;
    padding: 3px 10px;
    line-height: 20px;
    text-align: center;
    color: black;
}
.shopping-empty span .van-icon{
    position: absolute;
   font-size: 40px;
   left: 20%;
}
.van-col--15 .danger{
    background-color: #ffffff;
    border: none;
}
.van-col--15 .danger img{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0px;
    bottom: 5px;
}
.van-col--15 .van-button--default{
    width: 10px;
    height: 30px;
    background-color: #f4f4f4;
}
.van-nav-bar .van-nav-bar__left .van-nav-bar__arrow{
    color: #939393 !important;
    background-color: #fff;
}

.van-submit-bar{
    bottom: 0;
}
.van-nav-bar .van-icon{
    color: #939393 !important;
}
</style>