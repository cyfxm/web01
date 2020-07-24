<template>
    <div>
        <!-- 头部 --> 
        <div id="head">
            <van-nav-bar title="分类" left-arrow>
            <template #right>
                <van-icon name="search" size="18" @click="$router.push('./search')"/>
            </template>
            </van-nav-bar>
        </div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2 class="name">{{item.name}}</h2>
                        <ul>
                            <li v-for="num in item.content" :key="num+index" class="num">
                                <div class="img">
                                    <img src="../../assets/images/48.png">
                                </div>
                                <div>{{num}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'
    import '../../assets/css/base.css'
    export default {
            data(){
                return {  
                    msg:'欢迎来到vue.js学习',
                    left:["新品","众筹","小米手机","Redmi","黑鲨","5G合约","手机配件","电视","大家电","电脑办公","小爱智能","路由器"],
                    right:[
                    {
                        name:"—— 新品 ——",
                        content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"],
                    },
                    {name:"—— 众筹 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 小米手机 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— Redmi ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 黑鲨 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 5G合约 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 5G合约 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 5G合约 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]},
                    {name:"—— 5G合约 ——",content:["10X 4G","10X 5G","小米10青春版","K30变焦版","K30 Pro","黑鲨手机3"]}],
                    listHeight:[],//记录高度
                    scrollY:0
                }
            },
            // props:["left","right"],
            methods: {
                 getSearch(){
                        // 跳转路由
                        this.$router.push("/search");
                    },
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    console.log(pos.y);
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }

                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);

                        // this.currentIndex = index; //左侧效果
                    }
                    
                }   
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }

                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        ul{
            list-style: none;
        }
       
        #head{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #f2f2f2;
        }
        #head .van-nav-bar .van-icon{
            color: #999595;
        }
        
        #head .van-nav-bar{
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: #f2f2f2;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            background-color: #fff;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            background-color: #fff;
            border-right: 1px solid #f2f2f2;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            background-color: #fff;
            color:#fb7d34;
            font-size: 16px;
            font-weight: bold;
        }
        .left li span{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .right{
            flex:2;
            background-color: #fff;
        }
        .right li{
            line-height: 100px;
            text-align: center;
            // margin-top: -20px;
            // border: 1px solid yellow;
        }
        .right .num{
            width: 33.3%;
            // float: left;
            display: inline-block;
            text-align: center;
            position: relative;
        }
        .right .name{
            text-align: center;
            margin-top: -30px;
        }
        .right .name:nth-child(1){
            margin-top: 10px;
        }
        .right img{
            width: 75%;
            margin: 0 auto;
            display: block;
            margin-bottom: -15px;
        }
</style>