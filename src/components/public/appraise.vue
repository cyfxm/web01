<template>
    <div>
      <!-- <div class="orderapp" v-for="(item,index) in lists" :key="index"> -->
            <!-- <div v-for="(value,key) in item.goodsList" :key="key"> -->
            <div class="appraisei">
              <van-nav-bar
                title="订单页"
                left-arrow
                @click-left="$router.go(-1)"
              />
            <div class="orderapp">
               <van-card
                    :num="value.num"
                    price="4999"
                    desc="向往的生活同款 / 骁龙865处理器 / 1亿像素..."
                    title="小米10Pro"
                    >
                  </van-card>
            </div>
            </div>
      <!-- </div> -->
        <div class="appraise">
          <ul>
            <li>
            <span>商品评价：</span>
            <van-rate
            v-model="value"
            :size="25"
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
            />
            </li>
            <li>
            <span>物流评价：</span>
            <van-rate
            v-model="value1"
            :size="25"
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
            />
            </li>
            <li>
            <span>服务态度：</span>
            <van-rate
            v-model="value2"
            :size="25"
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
            />
            </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      value: 1,
      value1: 1,
      value2: 1,
    };
  },
  created(){
          this.lists = this.$store.state.order.lists;
      },
}
</script>
<style>
.orderapp{
  margin-top: -10px;
}
.appraise{
  margin-top: 10px;
}
.appraise .van-rate{
  /* display: block;
  /* margin-top: 20px; */
  /* transform:rotate(90deg); */
  padding-left: 80px;
}
.appraise ul li{
  font-size: 14px;
  margin-top: 10px;
  padding-left: 20px;
  position: relative;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.appraise ul span{
  position: absolute;
  margin-top: 4px;
}
.appraisei .van-nav-bar__left .van-icon{
  color: black;
}
.appraisei .van-nav-bar{
  background-color: #f7f7f7;
}
</style>



