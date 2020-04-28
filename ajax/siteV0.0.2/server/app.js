var express = require('express');// 引入express 依赖包
var bodyParser = require('body-parser');
var app = express(); //调用express函数
//传输数据 进行json处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false, //拓展模式
	limit: 2 * 1024 * 1024 //限制2m
}));


//主机地址： http://127.0.0.1:3005

// 示例：
// 接口地址：http://127.0.0.1:3005/example
// 请求方式： get 
// 参数 ：无
// 返回值 ：json 格式的数据
//{"message":"数据内容","code":"0"}
app.get('/example', function (req, res) {
	
	//响应给客户端的数据
	res.send({
		message:"数据内容",
		code:"0"
	})
})





//配置静态资源的目录
// http://127.0.0.1:3005/静态资源
// http://127.0.0.1:3005/demo01.html
app.use(express.static("../client"));
//开启的服务 监听的端口是 3005 
// 				http//      http传输协议 
// 				127.0.0.1   ip    
// 				3005   	    端口
app.listen(3005,function(){
	console.log("项目启动了  http://127.0.0.1:3005")
})