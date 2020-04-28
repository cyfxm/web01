// 步骤：
// 1.0 定义一个ajax函数
function ajax(option) {
    //  2.0.1 请求方式
    var type = option.type;
    //  2.0.2 请求数据地址
    var url = option.url;
    //  2.0.3 是否异步
    var async = option.async;
    //  2.0.4 提交数据给服务端
    var data = option.data; // {page:1,pageSize:10} ---> page=1&pageSize=10
    //  2.0.5 定义空字符串（用于拼接提交的数据）
    var dataStr = "";
    // 3.0 判断data有没有值
    if (data != null) {
        // 4.0 循环对象
        for (var key in data) {
            // 5.0 字符串拼接 {key:value} 
            dataStr += key + "=" + data[key] + "&"
        }
        // 6.0 拼接好的字符串
        // page=1&pageSize=10&
        // page=1&pageSize=10
        dataStr = dataStr.slice(0, -1);
    }
    // console.log(dataStr);// page=1&pageSize=10
    if (option.dataType == "jsonp") { //跨域的逻辑 JSONP
        // A.动态创建script标签
        var script = document.createElement('script');
        // B.设置script标签的src属性
        script.setAttribute('src', url + "?" + dataStr); //数据接口?page=1&pageSize=10
        // C. 获取页面的head标签
        var head = document.getElementsByTagName("head")[0];
        // D 添加script标签到head标签上
        head.appendChild(script);
        // E添加回调函数   服务端的脚本中的函数
        window[option.jsonpCallback] = function (res) {
            // F.执行success回调函数
            if (option.success) {
                option.success(res);
            }
        }
    } else {
        // ajax 编程
        // 第一、创建异步对象的实例
        // 7.0 定义变量接收异步对象的实例
        var xhr = null;
        // 8.0 判断 当前浏览器是否支持 XMLHttpRequest
        if (window.XMLHttpRequest) {
            // 8.0.1 创建异步对象的实例
            xhr = new XMLHttpRequest();
        } else {
            // 8.0.2 创建异步对象的实例（低版本）
            xhr = new ActiveXObject('Microsoft.XMLHTTP'); // ie5  6
        }

        // 第二、建立与服务端的联系
        // 9.0 判断请求方式 type 是get，还是post
        if (type == 'get') {
            // 9.0.1 如果为 get 请求方式 那么把提交给服务端的数据拼接在url后面，别忘了 "?"
            url = url + "?" + dataStr
        }
        // 9.0.2 建立与服务端的联系 (发起请求的动作)
        xhr.open(type, url, async);
        // 9.0.3 如果是post请求方式
        if (type == 'post') {
            // 9.0.4 需要设置请求头信息 application/x-www-form-urlencoded
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        // console.log(dataStr)
        // 第三、向服务端发送请求
        // 10.0 向服务端发送请求 三元运算 条件 ？结果1 ： 结果2
        xhr.send(type == 'get' ? null : dataStr);
        // 第四、监听请求和响应的状态
        // 11.0 监听请求和响应的状态
        xhr.onreadystatechange = function () {
            // 11.0.1 判断
            // xhr.readyState 请求状态码
            if (xhr.readyState == 4) { //请求完成
                if (xhr.status == 200) { //响应成功
                    // 第六、处理响应的结果
                    // 12.0 响应的文档类型（字符串）
                    var contentType = xhr.getResponseHeader('Content-Type');
                    // 13.0 定义变量接收响应内容
                    var res = '';
                    // 字符串api indexOf()
                    // 14.0 判断响应的文档类型
                    if (contentType.indexOf('json') > -1) {
                        // console.log(contentType, '文档类型 json ') 
                        res = JSON.parse(xhr.responseText);
                    } else if (contentType.indexOf('xml') > -1) {
                        // console.log(contentType, '文档类型  xml')
                        res = xhr.responseXML;
                    } else {
                        // console.log(contentType, '文档类型 text')
                        res = xhr.responseText;
                    }
                    // 15. 判断有没有请求成功的回调函数 ,有，则调用
                    if (option.success) option.success(res);
                } else {
                    //   16.0 判断有没有请求失败的回调函数,有，则调用   
                    if (option.error) option.error('请求失败');
                }
            }
        }
    }
}

//拓展： 定义一个对象
// var $ = {}
var $ = {
    ajax: ajax
}
