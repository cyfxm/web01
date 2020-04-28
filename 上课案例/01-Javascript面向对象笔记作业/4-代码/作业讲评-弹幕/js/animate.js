// 封装动画函数
// obj是需要做动画的对象
// target是需要移动到哪里,也就是目标值
// callback回调函数,做完动画以后执行的函数  可选参数
function animate(obj,target,callback){
    // 先清除原有的定时器
    clearInterval( obj.timer );
    
    // 开启定时器
    obj.timer = setInterval(function(){
        // 利用公式得到缓慢动画的步长值
        var step = (target - obj.offsetLeft) / 10;
        // 如果步长值大于0,则向上取整;小于0,则向下取整
        step = step > 0 ? Math.ceil( step) : Math.floor( step );
        // 判断是否达到目标值
        if( obj.offsetLeft == target ){
            // 清除定时器
            clearInterval( obj.timer );
            // 清除定时器以后就代表动画执行完毕,调用回调函数
            if( callback ){
                callback();
            }
        }else{
            obj.style.left = obj.offsetLeft + step + "px"
        }
    },15)
}

// 匀速运动函数
function animate_linear(obj,target,callback){
    // 先清除原有的定时器
    clearInterval( obj.timer );
    
    // 开启定时器
    obj.timer = setInterval(function(){
        // 利用公式得到缓慢动画的步长值
        // var step = (target - obj.offsetLeft) / 10;
        // 如果步长值大于0,则向上取整;小于0,则向下取整
        // step = step > 0 ? Math.ceil( step) : Math.floor( step );

        // 判断目标值跟当前值的大小比较   决定步长值为正值还是负值
        var step = obj.offsetLeft > target ? -1 : 1;

        // 判断是否达到目标值
        if( obj.offsetLeft == target ){
            // 清除定时器
            clearInterval( obj.timer );
            // 清除定时器以后就代表动画执行完毕,调用回调函数
            if( callback ){
                callback();
            }
        }else{
            obj.style.left = obj.offsetLeft + step + "px"
        }
    },15)
}