// 目标值 = 当前值 + 步长
// 步长 = （目标值 - 当前值） / 速度数值
// 3.0 定义动画函数
function animate(dom , obj) { //形参 dom , obj
    // 3.0.1 清除定时器
    clearInterval(dom.timer);
    // 3.0.2 执行定时函数
    dom.timer = setInterval(function(){
        //3.0.3 定义布尔值 用于判断元素是否达到目标值
        var isChange = true;
        //3.0.4 循环
        for(var k in obj){
            // 3.0.4.1 记录传递进来的目标值  (target : 目标)
            var target = parseInt(obj[k]);
            // 3.0.4.2 记录当前值 （current :当前）
            var current = getComputedStyle(dom , null)[k];
            // 3.0.4.3  取整
            current = parseInt(current); 
            // 3.0.4.4 计算步长
            var speed = (target - current) / 10;
            // 3.0.4.5 处理步长的小数点
            // 0.2 --- > 1 ,如果是等于1，可以便于达到目标值
            // -0.2 --- > 1 ,如果是等于-1，可以便于达到目标值
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 3.0.4.6 判断，所有的属性都达到目标值了
            // 如果有一个属性达不到目标值，就把布尔值设置为false 
            if(current!=target){
                // 把布尔值设置为false,那么就不会停止定时器
                isChange = false;
            }
            // 3.0.4.7 设置dom元素的属性值(目标值)
            dom.style[k] = current + speed + "px";
        }
        // 3.0.5 判断 布尔值是否为true ，如果是，表示所有的属性都达到目标值
        if(isChange){
            // 3.0.5.1 停止定时器
            clearInterval(dom.timer);
        }
    },30)
}
