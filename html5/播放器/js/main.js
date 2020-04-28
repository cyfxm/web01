// 禁用页面右击菜单
document.oncontextmenu = function(){
    return false;
}


// 需求：
    // 1.0 实现视频的播放暂停 
    // 2.0 实现视频的进度条
    // 3.0 实现当前播放的时间和视频文件的总时间
    // 4.0 双击事件 视频全屏
    // 5.0 实现鼠标右击自定义菜单


// 步骤：
    // 1、获取指定的元素
    var video = document.querySelector("#video");
    var play_button = document.querySelector("#play_button");
    var pause_button = document.querySelector("#pause_button");


    var progress = document.querySelector("#progress");
    var line = document.querySelector("#line");
    var bar = document.querySelector("#bar");


    var current = document.querySelector("#current");
    var total = document.querySelector("#total");


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
    }

    // 4.0 编写一个格式化时间的函数
    function formatTime(seconds){
        // 
        var h , m , s ;
        // 
        h = Math.floor(seconds / 3600);
        // 
        m = Math.floor((seconds % 3600)/60);
        // 
        s = Math.floor(seconds % 60);

        // 三元运算
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;

        // 返回格式的时间
        return h +":"+m+":"+s;
    }