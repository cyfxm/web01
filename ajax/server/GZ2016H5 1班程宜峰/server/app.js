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
		message: "数据内容",
		code: "0"
	})
})

// 例如：
// 商品详情接口 
// 接口地址：http://127.0.0.1:3005/detail
// 请求方式 ： get 
// 参数 ： 
//  属性    数据类型   是否必须填写
//  id      string    是
//  返回值 ：
//  {"result":{"title":"智能机器人","price":"22200.00","id":"10012"},"code":0}

app.get('/detail', function (req, res) {
	// req 负责接收前端提交的数据
	var product_id = req.query.id;
	// 数组
	var data = [
		{
			"title": "女生裙子衣服",
			"price": "100.00",
			"id": "10010"
		},
		{
			"title": "好的笔记本电脑",
			"price": "2000.00",
			"id": "10011"
		},
		{
			"title": "智能机器人",
			"price": "22200.00",
			"id": "10012"
		}
	]
	// 定义空对象
	var obj = {}
	// 循环数组
	for (var i = 0; i < data.length; i++) {
		if (product_id == data[i].id) {
			obj = data[i];
			break;
		}
	}
	// res  负责把处理结果响应给前端
	// 处理结果 有数据的逻辑
	res.send({
		result: obj,
		code: 0
	})
})


// 加法运算的接口
// 主机地址
// http://127.0.0.1:3005
// 接口地址：http://127.0.0.1:3005/add
// 请求方式：get
// 参数：
//    属性     数据类型   是否必须填写
//    num1    number     是
//    num2    number     是
// 返回值：
// { data:{total:2},code:200,text:"请求数据成功"}
app.get('/add',function(req,res){
	var num1 = req.query.num1 - 0 ; //转数字类型
	var num2 = req.query.num2 - 0 ;
	var total = num1 + num2 ;
	res.send({
		data:{
			total:total
		},
		code:200,
		text:"请求数据成功"
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
app.listen(3005, function () {
	console.log("项目启动了  http://127.0.0.1:3005")
})