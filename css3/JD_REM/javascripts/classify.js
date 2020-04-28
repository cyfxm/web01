// 需求：
// 1.0 移动端  touch事件
// 2.0 按下ul标签 可以往下拉  ， 设置缓冲距离  200  ， 松开手指，侧栏菜单停留 0  topPosition
// 3.0 按下ul标签 可以往上拉  ， 设置缓冲距离  200  ,  松开手指，侧栏菜单停留在 ul.offsetHeight - aside.offsetHeight  bottomPosition 
// 4.0 设置缓冲距离 200  space
// 5.0 ul标签往下拉  可以滑动的距离  topPosition + space 
// 6.0 ul标签往上拉  可以滑动的距离  bottomPosition - space
// 7.0 侧栏菜单可以上下的滑动


// 步骤
// 1.0 获取页面相关的元素
var aside_element = document.querySelector(".jd_classify_main .jd_classify_aside");
var ul_element = document.querySelector(".jd_classify_main .jd_classify_aside ul");
// 2.0  transform:translateY(); //位移
// 2.0 定义ul标签停留在顶部的位置
var topPosition = 0 ;
// 3.0 定义ul标签停留在底部的位置 计算
var bottomPosition = aside_element.offsetHeight - ul_element.offsetHeight - 130;
console.log({
    height_aside:aside_element.offsetHeight,
    height_ul: ul_element.offsetHeight,
    bottomPosition:bottomPosition
})

// 4.0 定义缓冲的距离
var  space =150;

// 5.0 往下 可滑动的距离
var maxSlideSpace = topPosition + space;

// 6.0 往上 滑动的距离
var minSlideSpace = bottomPosition - space;
console.log({
    maxSlideSpace:maxSlideSpace,
    minSlideSpace:minSlideSpace
})
// 7.0 定义公共函数
// 7.0.1 改变ul标签的位置的函数 (先定义后调用)
var  setTranslate = function(distance) { // distance 形参 滑动的值
    // 兼容写法
    ul_element.style.webkitTransform = "translateY("+distance+"px)";
    ul_element.style.transform = "translateY("+distance+"px)";
}
// 7.0.2 添加ul标签的过渡属性函数
var addTransition = function(){
    // 兼容写法
    ul_element.style.webkitTransition ="all 1s";
    ul_element.style.transition ="all 1s";
}
// 7.0.3 删除ul标签的过渡属性函数
var removeTransition = function(){
    // 兼容写法
    ul_element.style.webkitTransition ="none";
    ul_element.style.transition ="none";
}


// 8.0 定义全局变量
var startX = 0 ;
var moveY = 0;
var resultY = 0;
var currentY = 0;
// 9.0 ul标签添加触摸事件 start 
ul_element.ontouchstart = function(evt){
    // 9.0.1 手指按下的坐标位置
    startX = evt.touches[0].pageY;
}
// 10.0 页面添加触摸事件 move
document.ontouchmove = function(evt){
    // 10.0.1手指滑动的坐标
    moveY = evt.touches[0].pageY;
    // 10.0.2 手指滑动的距离
    resultY = moveY - startX;
    // console.log({
    //     startX:startX,
    //     moveY:moveY,
    //     resultY:resultY
    // })
    // 10.0.3 移除过渡
    removeTransition();
    // 10.0.4 判断ul标签 不可以超过滑动的区间
    if((currentY+resultY) > minSlideSpace && (currentY + resultY) < maxSlideSpace){
         // 10.0.5设置ul标签的位置
        setTranslate(resultY+currentY);
    }
}
// 11.0 页面添加事触摸件 end
document.ontouchend = function(){
    // 11.0.1 往下拉 大于 topPosition 
    if((currentY + resultY) > topPosition){
        // 11.0.1.1 如果往下拉 大于0 那等于0
        currentY = topPosition;
        // 11.0.1.2 添加过渡
        addTransition();
        // 11.0.1.3 设置ul标签的位置
        setTranslate(currentY);
    }
    // 11.0.2 往上拉  小于 bottomPostion
    else if((currentY + resultY) < bottomPosition ){
        // 11.0.2.1 如果往下拉 小于 bottomPostion 那就等于bottomPostion
        currentY = bottomPosition;
        // 11.0.2.2 添加过渡
        addTransition();
        // 11.0.2.3 设置ul标签的位置
        setTranslate(currentY);
    }
    // 11.0.3 正常上下滑动
    else {
        currentY = currentY + resultY;
    }

    // 11.0.4 重置全局变量
    startX = 0;
    moveY = 0;
    resultY = 0;
}