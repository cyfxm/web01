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
// 登录的接口
// 主机地址
// http://127.0.0.1:3005
// 接口地址：http://127.0.0.1:3005/login
// 请求方式：post
// 参数：
//    属性       数据类型   是否必须填写
//    username    string     是
//    password    string     是
// 返回值：
app.post('/login',function(req,res){
	var username =  req.body.username;
	var password =  req.body.password;
	console.log(username,password)
	if(username == "admin"){
		if(password == "123123"){
			res.send({
				code:"0",
				message:"登录成功了"
			})
		}else {
			res.send({
				code:"-1",
				message:"密码错误了"
			})
		}
	}else {
		res.send({
			code:"-2",
			message:"账号错误了"
		})
	}
})


// 接口地址
// http://127.0.0.1:3005/direction
// dataType ： jsonp 
// 提交的参数：
// 属性名称           数据类型     是否必须填写
//   num                number          是
// 返回值
// 例如：
//    {
//        code:0,
//        message:"向上",
//        direction:"up"
//  }
app.get('/direction',function(req,res){
	// 接收前端参数
	var num = req.query.num;
	// 判断
	if(num == 38){
		// 响应给客户端的数据
		var data = {
			code:0,
			message:"向上",
			direction:"up"
		}
		// 把对象转字符串
		data = JSON.stringify(data);
		res.send('foo('+data+')')
	}else if (num == 39){
		var data =  {
			code:0,
			message:"向右",
			direction:"right"
		}
		// 把对象转字符串
		data = JSON.stringify(data);
		res.send('foo('+data+')')
	}else if(num == 40){
		var data = {
			code:0,
			message:"向下",
			direction:"down"
		}
		// 把对象转字符串
		data = JSON.stringify(data);
		res.send('foo('+data+')')
	}else if(num == 37){
		var data =  {
			code:0,
			message:"向左",
			direction:"left"
		}
		// 把对象转字符串
		data = JSON.stringify(data);
		res.send('foo('+data+')')
	}else {
		var data ={
			code:0,
			message:"没有方向",
			direction:"none"
		}
		// 把对象转字符串
		data = JSON.stringify(data);
		res.send('foo('+data+')')
	}
})

//允许跨域
// 设置跨域访问
// app.all('*', (req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });
// 接口地址
// http://127.0.0.1:3005/demo
// 请求方式 ： get
// 参数：无
// 返回值 {message:"xxx"}
app.get('/demo',function(req,res){ //形参： req  请求对象,res 响应对象
	res.send({
		message:"允许跨域访问数据"
	})
})

// 接口地址
// http://127.0.0.1:3005/list
// 请求方式 ： get
// 参数：
//  属性名     数据类型   是否必须填写
//  page        number     是
//  pageSize    number     是
//  返回值 ：
// 

// 处理数据（数组）
var data = [];
// 循环创建数据
for(var i = 1  ; i < 105 ; i++){
	// 定义一个对象
	var obj = {
		// "src":""
		src:"http://127.0.0.1:3005/images/"+i+".jpg",
		title:"这是图片的标题",
		content:"这是图片的内容"
	}
	// 往数据添加
	data.push(obj);
}

app.get('/list',function(req,res){
	// 接收前端的参数
	var page = req.query.page - 0 ;
	var pageSize = req.query.pageSize - 0;
	// 对数组操作   push contcat shift unshift slice ...
	// data.slice(开始索引值，结束索引值)
	var startIndex = page * pageSize;
	var endIndex = startIndex + pageSize;
	// 响应给客户端的数据
	var result = data.slice(startIndex , endIndex);
	// res.send()
	res.send({
		page:(page+1),
		result:result
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