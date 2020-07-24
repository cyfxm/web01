<template>

  <div class="search">
    <van-row class="topsearchNav">
      <van-col span="3" @click="$router.go(-1)">
        <span class="iconfont icon-biaoqing"></span>
      </van-col>
      <van-col span="18">
        <input
          type="text"
          ref="inputchange"
          v-model="valuetext"
          @keyup.enter="onSearch(true)"
          @keyup.tab="onSearch(true)"
          @focus="initPage"
          placeholder="请输入关键字进行搜索"
        />
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-sousuo" @click="onSearch(true)"></span>
      </van-col>
    </van-row>
    <!-- 顶部搜索栏 -->
    <div class="header">
      <h1 class="searchlogo">搜索发现</h1>
      <div class="history-panel" v-if="!isFocus">
        <div v-if="historyxs">搜索历史</div>
        <div v-if="searches_list.length>0">
          <ul class="his_ulcon" v-if="historyxs">
            <li
              v-for="(item,index) in searches_list"
              :key="index"
              @click="historysearch(item)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="history-tips" v-else>暂无搜索记录！</div>
        <p v-if="historyxs" @click="clearhis">清空历史记录</p>
      </div>
      <div class="head-input">      
        <div type="text" @click="clear" class="input-btn title-style" v-if="historyxs">清除输入框内容</div>
      </div>
      <van-image id="logo" width="95%" :src="require('../assets/images/65.jpg')" />

    </div>
    <div class="discovery">
        <router-link to="/cart" tag="a">
            Redmi 10X 5G 系列
        </router-link>
        <router-link to="/cart" tag="a">
            小米众筹
        </router-link>
        <router-link to="/cart" tag="a">
            Redmi K30 Pro
        </router-link>
        <router-link to="/cart" tag="a">
            向往的智能生活
        </router-link>
        <router-link to="/cart" tag="a">
            全部商品
        </router-link>
        <router-link to="/cart" tag="a">
            净水机
        </router-link>
        <router-link to="/cart" tag="a">
            压力IH电饭煲
        </router-link>
        <router-link to="/cart" tag="a">
            电视
        </router-link>
        <router-link to="/cart" tag="a">
            智能
        </router-link>
        <router-link to="/cart" tag="a">
            摄像头
        </router-link>
    </div>
  </div>
</template>

<script type="text/Babel">
import { saveSearch } from "../assets/cache"; //引用本地存储js
import storage from "good-storage"; //引入good-storage包
export default {
  data() {
    return {
      isFocus: true,
      searches_list: [], //历史搜索记录列表
      historyxs: false,
      valuetext: ""
    };
  },
  mounted() {},
  methods: {
    //输入框获取焦点
    initPage() {
      this.isFocus = false;
      this.$emit("initSearchPage");
      //为避免重复先清空再添加
      this.searches_list = [];
      let searches = storage.get("_search_");
      this.searches_list = searches ? searches : [];
      if (this.searches_list.length > 0) {
        this.historyxs = true;
      } else {
        this.historyxs = false;
      }
    },
    //清空历史记录
    clearhis() {
      storage.remove("_search_");
      this.searches_list = [];
      this.historyxs = false;
    },
    //点击历史搜索把搜索的记录添加到good-storage中
    historysearch(item) {
      saveSearch(item);
      this.valuetext = item;
      this.historyxs = false;
    },
    resetData() {
    },
    onSearch() {
      this.isFocus = true;
      if (this.valuetext != "") {
        //搜索框不为空
        saveSearch(this.valuetext); // 本地存储搜索的内容
        let params = {
          majorInfo: this.valuetext //流程类型或者流程名称
        };
        this.$emit("handleSearch", params);
        this.isFocus = true;
      }
    },
    clear() {
      this.valuetext = "";
    }
  },
    created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
            
        },
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        }
};
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.head-title {
  font-size: 18px;
}
.topsearchNav {
  background-color: #f2f2f2;
  height: 44px;
}
  .icon-biaoqing {
    text-align: center;
    display: block;
    font-size: 30px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
  .van-search {
    padding: 0px;
    margin: 5px;
    background-color: #fff;
  }
  .van-search__content {
    background-color: #fff;
  }
  .icon-sousuo {
    text-align: center;
    display: block;
    font-size: 20px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
    position: absolute;
    right: 10px;
    top: 0;
  }
.van-col--18 {
  font-size: 16px;
  margin-left: 15px;
  margin-top: 10px;
}
.van-col--18 input{
  height: 30px;
  display: block;
  margin-top: -3px;
  width: 90%;
  padding-left: 10px;
  line-height: 60px;
}
.searchlogo {
  font-size: 16px;
  margin-left: 15px;
  margin-top: 15px;
}
.input-btn{
  margin-left: 15px;
  color: red;
}

#logo {
  width: 90%;
  max-width: 860px;
  display: block;
  margin: 20px auto;
  // background-color: #ffffff;
}
#logo .van-image .van-image__img{
  width: 100%;
  display: block;
  margin: 0 auto;
}
.header{
  width: 100%;
  position: relative;
}
.header .history-panel{
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
}
.header .history-panel .his_ulcon{
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
}
.header .history-panel .his_ulcon li{
  float: left;
  width: 50%;
}
.header .history-panel>p{
  font-size: 12px;
  position: absolute;
  top: 5px;
  right: 0;
}
.discovery{
    max-width: 860px;
    width: 90%;
    margin: 30px auto;
    display: block;
}
.discovery a{
    display: block;
    float: left;
    width: 50%;
    padding-bottom: 20px;
    color: black;
}
html{
  background-color: #fff;
}
</style>