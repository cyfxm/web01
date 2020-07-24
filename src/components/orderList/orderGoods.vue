<template>
    <div>
        <!-- 购物车有否有数据 -->
        <div class="shopping-empty" v-show="!($store.state.order.lists.length)">
            <span><van-icon name="logistics" /></span>
            <span>订单还是空的</span>
            <span @click="$router.push('/home')">去逛逛</span>
        </div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 2">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(add_time)" />
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.money"
                    :desc="value.introduce"
                    :title="value.name"
                    :thumb="value.img"
                    >
                    </van-card>
                </div>
                <div class="orderfooter">
                    <!-- 待收货 -->
                    <van-button size="mini"  type="warning">退款申请</van-button>
                    <van-button size="mini"  type="info" @click="onGoods(index)">已收货</van-button>
        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let moment = require("moment");
// 中文简体
moment.locale('zh-cn');
    import { Toast } from 'vant';
    export default {
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 2); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
                Toast('添加商品');
            }
            this.add_time = moment(this.add_time).format('YYYY-MM-DD')
        },
        methods:{
            onGoods(index){
                // let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货状态，
                Toast('修改已完成');
            }
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
        }
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
</style>