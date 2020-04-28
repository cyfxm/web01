$(function(){
    // 1.0 获取数据
    function getData(keyword,callback){
        // jquery  ajax
        $.ajax({
            // url:"https://suggest.taobao.com/sug?code=utf-8&_ksTS=1586760821600_702&callback=jsonp703&k=1&area=c2c&bucketid=18&q=笔记本",
            url:"https://suggest.taobao.com/sug",
            data:{
                code:"utf-8",
                q:keyword,
                bucketid:"18",
                area:"c2c",
                k:1,
                callback:"jsonp703",
                _ksTS:"1586760821600_702"
            },
            jsonpCallback:"jsonp703", //响应的数据中包含的函数名字
            dataType:"jsonp", //跨域
            success:function(res){
                // console.log(res);
                // callback && callback(res);
                if(callback) callback(res);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
    
    // 测试
    // getData('手机',function(res){
    //     console.log(res);
    // })

    // 2.0 获取元素 绑定事件
    $("#inpId").on('input',function(){
        // console.log($(this).val())
        //3.0 获取输入的值
        var v1 = $(this).val();
        // 4.0 获取数据
        getData(v1,function(res){
            console.log(res)
            // 5.0 处理json格式
            var arr = res.result;
            // 6.0 字符串
            var html = "";
            // 7.0 循环数组
            for(var i = 0 ; i < arr.length ; i ++){
                // 8.0 字符串拼接
                html += '<option value="'+arr[i][0]+'">'+arr[i][0]+'</option>'
            }
            // 9.0 把数据渲染出来
            $("#resultId").html(html);
        })
    })

})