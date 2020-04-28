// 禁用页面右击菜单
document.oncontextmenu = function(){
    return false;
}
// 需求：
    // 1.0 实现视频的播放暂停 
    // 2.0 实现视频的进度条
    // 3.0 实现当前播放的时间和视频文件的总时间
    // 4.0 双击视频元素 视频全屏
    // 5.0 实现鼠标右击自定义菜单


// 步骤：
    // 1、获取指定的元素
    var video = document.querySelector("#video");
    var play_button = document.querySelector("#play_button");
    var pause_button = document.querySelector("#pause_button");


    var progress = document.querySelector("#progress"); //ul标签
    var line = document.querySelector("#line"); //li标签
    var bar = document.querySelector("#bar");//span标签


    var current = document.querySelector("#current");
    var total = document.querySelector("#total");


    var wrap = document.querySelector("#wrap");


    // 2、点击播放视频
    play_button.onclick = function(){
        // 2.0.1 视频播放
        video.play();
        // 2.0.2 隐藏当前按钮
        this.style.display = "none";
        // 2.0.3 显示暂停按钮
        pause_button.style.display ="block";
    }
    // 2.0.4 点击 暂停视频 
    pause_button.onclick = function(){
        // 2.0.5 视频暂停
        video.pause();
        // 2.0.6 隐藏当前按钮
        this.style.display="none";
        // 2.0.7 显示播放按钮
        play_button.style.display ="block";
    }


    // 3、获取视频文件时间
    var current_time = 0;
    var total_time = 0;

    // 3.0.1 
    video.oncanplay = function(){
        // 3.0.2 视频总时长
        // 只可以获取duration属性值 
        total_time = video.duration;
        console.log({
            total_time:total_time ,
            time:formatTime(total_time)
        })
        // 3.0.3 显示文件的总时长
        total.innerHTML = formatTime(total_time);
    }
    // 3.0.4 监听视频文件的播放
    video.ontimeupdate = function(){
        // 3.0.5 获取视频当前播放进度时间
        current_time = video.currentTime;
        // 3.0.6 显示播放的时长
        current.innerHTML = formatTime(current_time);
        // 3.0.7 计算视频文件当前播放时长和总时长的比例
        var demo = current_time / total_time ;
        // 3.0.8 设置li标签的宽度
        line.style.width = progress.offsetWidth * demo +"px";
        // 3.0.9 设置span标签的left属性值
        bar.style.left = (progress.offsetWidth - bar.offsetWidth) * demo+"px";
    }

    // 4.0 编写一个格式化时间的函数
    function formatTime(seconds){
        // 4.0.1 定义时分秒变量
        var h , m , s ;
        // 计算小时
        h = Math.floor(seconds / 3600);
        // 计算分钟
        m = Math.floor((seconds % 3600)/60);
        // 计算秒钟
        s = Math.floor(seconds % 60);

        // 三元运算
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;

        // 返回格式的时间
        return h +":"+m+":"+s;
    }
    // 5.0 编写一个函数改变视频播放进度
    function slide(){
        // 5.0.1 定义变量记录参数
        var rx = 0;
        var bool = false;
        // 5.0.2 事件的绑定
        bar.onmousedown = function(){
           //5.0.3 记录鼠标按下了 span标签
           bool = true;
           console.log("down")
        }
        // 5.0.4 鼠标在页面滑动
        document.onmousemove = function(event){
            // 5.0.5 判断
            if(bool){
                // console.log("move")
                console.log(event)
                // 5.0.6  计算span标签的left属性值
                rx = event.pageX - progress.offsetLeft - bar.offsetWidth/2;
                // 5.0.7 span滑动的距离不可以小于0 
                if(rx < 0 ){
                    rx = 0;
                }
                // 5.0.8 span滑动的距离不可大于progress.offsetWidth - bar.offsetWidth
                if(rx > (progress.offsetWidth - bar.offsetWidth)){
                    rx = progress.offsetWidth - bar.offsetWidth;
                }
                // 5.0.9 li标签的宽度
                line.style.width = rx + "px";
                // 5.1.0 span标签的left
                bar.style.left = rx + "px";
                // 5.1.1计算li标签当前宽度除以(progress.offsetWidth - bar.offsetWidth)
                var demoX = rx / (progress.offsetWidth - bar.offsetWidth);
                // 5.1.2 设置视频文件的当前播放时长
                video.currentTime = demoX * total_time;
                // 5.1.3 改变当前播放时间
                current.innerHTML = formatTime(video.currentTime);
            }
        }
        // 5.1.4 鼠标松开页面
        document.onmouseup = function(){
            // 5.1.5 记录鼠标松开
            bool = false;
        }
    }
    // 调用函数改变进度条 设置视频当前时长
    slide();

    // 6.0 双击视频元素
    // document.ondblclick = function(){ console.log("db")}  //事件
    video.ondblclick = function(){
        // 6.0.1 双击全屏展示
        this.webkitRequestFullscreen(); 
        // this.mozRequestFullscreen(); //moz
        // this.requestFullscreen();
        // 备注：全屏，再次双击退出全屏
    }


    // 退出全屏
    // video.exitFullscreen();
    //  video.cancelFullscreen();


    // 7.0 自定义菜单
    // video.onclick = function(event){
    //     console.log(event)
    // }
    video.onmousedown = function(event){
        // console.log(event)
        // 7.0.1定义变量 记录按下的是哪个按钮
        var buttons = event.buttons;
        console.log(buttons == 1 ?"鼠标左边点击":"鼠标右边点击")

        // 7.0.2 判断 鼠标右击
        if(buttons !=1){
            // 7.0.3 鼠标在页面的位置(x,y)
            var obj = {
                x:event.pageX,
                y:event.pageY
            }
            // 7.0.4 显示菜单
            showMenu(obj);
        }else {
            // 7.0.5 隐藏菜单
            // 注意：如果再给菜单绑定了点击事件，那么请注意阻止事件冒泡
            hideMenu();
        }
    }


    // 8.0 显示自定义菜单
    function showMenu(point,callback){
        // 8.0.1 定义字符串
        var html = ''
            html += '<ul class="menu" style="left:'+point.x+'px;top:'+point.y+'px;">'
            html += '    <li><a href="./video/funny.rar" target="_blank">保存视频</a></li>'
            html += '    <li>其他操作</li>'
            html += '</ul>'
        // 显示菜单
        wrap.innerHTML = html;
        // ....
    }
    // 9.0 隐藏自定义菜单
    function hideMenu(){
        wrap.innerHTML = "";
    }