var express = require('express');// 引入express 依赖包
var app = express(); //调用express函数

// 编写一个数据接口 路由规则  http://127.0.0.1:3005/demo
app.get('/demo',function(req,res){ // req,res
	//响应给客户端的内容
	res.send({
		message:"告诉你一个好消息，表白了，别人接受了。"
	})
})

//开启的服务 监听的端口是 3005 
// 				http//      http传输协议 
// 				127.0.0.1   ip    
// 				3005   	    端口
app.listen(3005,function(){
	// aready
	console.log("项目启动了  http//:127.0.0.1:3005")
})