function getScroll(){
    return {
        left:document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset || 0,
        top:document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0
    }
}
var bottom_nav = document.getElementsByClassName("bottom_nav")[0];
var bottom_navTop = bottom_nav.offsetTop;
var newGoods = document.getElementsByClassName("newGoods")[0];
document.body.onscroll = function(){
    if(getScroll().top>bottom_navTop){
        bottom_nav.style.position = "fixed";
        bottom_nav.style.top = 0 + "px";
    }else{
        bottom_nav.style.position = "static";
        bottom_nav.removeAttribute("top");
    }
    if(getScroll().top > newGoods.offsetTop){
        up.style.display = "block";
    }else{
        up.style.display = "none";
    }
}
// 吸顶效果结束

//宝贝和店铺 开始  排他操作
var con_goods = document.getElementsByClassName("goods")[0];
var con_shop = document.getElementsByClassName("shop")[0];
con_goods.onclick = function(){
    con_goods.style.backgroundColor = "#ff3366";
    con_goods.style.color = "#ffffff";
    con_shop.style.backgroundColor = "#f2f2f2";
    con_shop.style.color = "#666666";
}
con_shop.onclick = function(){
    con_shop.style.backgroundColor = "#ff3366";
    con_shop.style.color = "#ffffff";
    con_goods.style.backgroundColor = "#f2f2f2";
    con_goods.style.color = "#666666";
}
//宝贝和店铺 结束  排他操作
//侧边栏返回顶部开始
var up = document.getElementsByClassName("up")[0];
function animateScroll(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var windowTop = getScroll().top;
        var step = (target - windowTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(windowTop == target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }else{
            window.scroll(0,windowTop + step);
        }
    },15)
}
up.onclick = function(){
    animateScroll(window,0);
}
//侧边栏返回顶部结束

// 今日新品选项卡开始
var newGoods_lis = document.querySelectorAll(".newGoods .top_title>ul>li");
var newGoods_content = document.querySelectorAll(".newGoods .content");
for(var i = 0;i<newGoods_lis.length;i++){
    newGoods_lis[i].setAttribute("data-index",i);
    newGoods_lis[i].onclick = function(){
        for(var j=0;j<newGoods_lis.length;j++){
            newGoods_lis[j].removeAttribute("class");
            newGoods_content[j].style.display = "none";
        }
        var index = this.getAttribute("data-index");
        this.setAttribute("class","click");
        newGoods_content[index].style.display = "block";
    }
}
// 今日新品选项卡结束
// 轮播图开始
function $(cssStr){
    var obj = document.querySelectorAll(cssStr);
    if(obj.length == 1){
        return obj[0];
    }else{
        return obj;
    }
}
//获取对象
var rotation_chart = $(".rotation_chart");
var points_ul = $(".points>ul");
var banner_images_ul = $(".banner_images>ul");
var prev = $(".prev");
var next = $(".next");
var rotation_chartWidth = rotation_chart.offsetWidth;
//鼠标移入轮播图显示左右键
rotation_chart.onmouseover = function(){
    prev.style.display = "block";
    next.style.display = "block";
}
//鼠标移入轮播图隐藏左右键
rotation_chart.onmouseout = function(){
    prev.style.display = "none";
    next.style.display = "none";
}
// 根据图片的数量增加小圆点
for(var i=0;i<banner_images_ul.children.length;i++){
    var li = document.createElement("li");
    points_ul.appendChild(li);
    li.setAttribute("data-index",i);
    points_ul.children[0].className = "checked";
    li.onclick = function(){
        for(var j=0;j<points_ul.children.length;j++){
            //排他操作，先把全部的li都清除class属性
            points_ul.children[j].removeAttribute("class");
        }
        //给当前点击的li添加.checked样式
        this.setAttribute("class","checked");
        //获取当前点击的li的索引号
        var index = this.getAttribute("data-index");
        //你点击的小圆点的索引号赋值给 控制小圆点高亮的索引号currentCircle和控制左右键轮播来控制小圆点高亮的num索引号
        currentCircle = index;
        num = index;
        //滚动函数
        animate(banner_images_ul,- index * rotation_chartWidth);
    }
}
//克隆第一个轮播图片参数是true深拷贝，false浅拷贝，默认值是false浅拷贝
var first = banner_images_ul.children[0].cloneNode(true);
//把克隆副本添加到 ul 中
banner_images_ul.appendChild(first);
//把宽度调整为700%，因为有7张图片
banner_images_ul.style.width = banner_images_ul.children.length*100 + "%";
// 定义一个索引号，轮播到第几张图片
var num = 0;
var currentCircle = 0;// currentCircle记录当前是第几个小圆点高亮,0代表第1个
next.onclick = function(){
    if(num == banner_images_ul.children.length-1){
        banner_images_ul.style.left = num + "px";
        num = 0;
    }
    //num从零开始后继续做动画
    num++;
    currentCircle++;
    if(currentCircle == banner_images_ul.children.length-1){//当索引号为6是，复位为0
        currentCircle = 0;
    }
    for(var i=0;i<points_ul.children.length;i++){
        //排他操作   先全部清除class属性
        points_ul.children[i].removeAttribute("class");
    }
    //索引号的小圆点加上.checked样式
    points_ul.children[currentCircle].className = "checked";
    
    animate(banner_images_ul,-num*rotation_chartWidth);
}
prev.onclick = function(){
    if(num == 0){
        num = banner_images_ul.children.length-1;
        banner_images_ul.style.left = -num*rotation_chartWidth + "px";
    }
    num--;
    animate(banner_images_ul,-num*rotation_chartWidth);

    currentCircle--;
    console.log(currentCircle)
    if(currentCircle < 0){//当索引号小于0时，复位为5   5就是最后一个小圆点
        currentCircle = points_ul.children.length-1;
    }
    for(var i=0;i<points_ul.children.length;i++){
        //排他操作   先全部清除class属性
        points_ul.children[i].removeAttribute("class");
    }
    //索引号的小圆点加上.checked样式
    points_ul.children[currentCircle].className = "checked";
}
// 轮播图结束
