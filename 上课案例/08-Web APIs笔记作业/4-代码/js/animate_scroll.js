// 封装动画滚动函数
// 思路:把之前的动画函数相关的属性改成页面被卷去的距离
// obj是需要做动画的对象
// target是需要移动到哪里,也就是目标值
// callback回调函数,做完动画以后执行的函数  可选参数
function animate_scroll(obj,target,callback){
    // 先清除原有的定时器
    clearInterval( obj.timer );

    // 开启定时器
    obj.timer = setInterval(function(){
        // 如果放在定时器的外面,调用一次animate_scroll函数,才会获取一次页面滚动距离
        // 所以要把获取页面被卷去的距离放在定时器里面,这样每次才可以获取最新的被页面卷去的值
        var pageScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        
        // 利用公式得到缓慢动画的步长值
        var step = (target - pageScroll) / 10;
        
        // 如果步长值大于0,则向上取整;小于0,则向下取整
        step = step > 0 ? Math.ceil( step) : Math.floor( step );

        // 判断是否达到目标值
        if( pageScroll == target ){
            // 清除定时器
            clearInterval( obj.timer );
            // 清除定时器以后就代表动画执行完毕,调用回调函数
            if( callback ){
                callback();
            }
        }else{
            var scrollY = pageScroll + step;
            window.scroll(0, scrollY );
        }
    },15)
}