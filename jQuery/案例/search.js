(function($,win){ //函数作用域
    // 1.0 $.fn
    $.fn.extend({
        searchFunc:function(option){ //作用域1 
            // 记录当前函数作用域的$(this) 对象
            var $search = $(this);
            // 定义变量接收 高度
            var height = option.height;
            // 定义变量 表示透明度
            var opactiy = 0 ;
            // console.log($(this))
            // 监听页面滚动
            $(window).scroll(function(){//作用域2
                // 获取页面超出浏览器的部分高度
                var t = $(document).scrollTop();
                console.log(t)
                // 页面超出浏览器部分大于等于150 
                if(t >= height){
                    // 透明度为1
                    opactiy = 1;
                }else {
                    // 透明度为小数
                    opactiy = t / height; // 0 ~1 
                    // 设置search标签的透明度
                    console.log( $(this))
                    $search.css({
                        backgroundColor:'rgba(0,0,0,'+opactiy+')'
                    })
                }
            })
        }
    })
})(jQuery,window)