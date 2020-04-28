window.onload = function(){
    // 构造函数的实例对象
    var app =  new Snake({
        width:600,
        height:600,
        canvas:document.getElementById("canvas"),
        ctx:canvas.getContext("2d")
    })

    // 调用实例对象的init函数
    app.init();
}


// 需求分析：
// 1.0 初始化
// 2.0 初始化蛇
// 3.0 绘制地图
// 4.0 初始化食物
// 5.0 创建食物
// 6.0 事件监听
// 7.0 蛇移动函数
// 8.0 蛇头和食物碰撞检测
// 9.0 重新绘制 更新地图 更新蛇 检测蛇和食物碰撞 复制蛇
// 10. 吃到食物 添加蛇身体
// 11. 判断是否结束游戏
// 12. 复制蛇 记录一份关于蛇的坐标，用于判断是否结束游戏

// 步骤：面向对象
    // 1.0 定义构造函数
    function Snake(option){
        // console.log(option)
        // 1.0.1 添加属性 记录传递进来的数据
        this.width = option.width;
        this.height = option.height;
        this.canvas = option.canvas;
        this.ctx = option.ctx;
        // 1.0.2 设置画布的大小
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // 1.0.3 设置间距的大小
        this.space = 30;
        // 1.0.4 计算这个画布的大小有多少列多少行
        this.column = this.width / this.space;
        this.row = this.height / this.space;
        // 1.0.5 记录蛇移动的方向（默认向右）
        this.direction = "right";
        this.speed = 300;
        console.log(this.speed);
        this.index = 0;
    }

    // 2.0 原型属性 .protptype 
    Snake.prototype.init = function() {
       console.log(this);
        // 2.0.1 绘制地图
        this.drawMap();
        // 2.0.2 初始化的蛇
        this.drawInitSnake();
        // 2.0.3 初始化的食物
        this.drawInitFood();
        // 2.0.4 监听键盘事件
        this.addKeyEvent();
        // 2.0.5 再次绘制蛇（移动）
        // this.drawSnake();
        var _this = this;
        // // // 测试
        this.timer = setInterval(function(){
            _this.drawSnake();
        },this.speed)
    }

    // 3.0 绘制地图
    Snake.prototype.drawMap = function(){
        // 绘制横线
        for(var i = 0 ; i < this.row;i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0 , i * this.space);
            this.ctx.lineTo(this.width, i * this.space)
            this.ctx.closePath();
            this.ctx.strokeStyle = "lightgreen";
            this.ctx.stroke();
        }
        // 绘制竖线
        for(var j= 0 ; j < this.column;j++) {
            this.ctx.beginPath();
            this.ctx.moveTo(j * this.space , 0);
            this.ctx.lineTo( j * this.space,this.height)
            this.ctx.closePath();
            this.ctx.strokeStyle = "skyblue";
            this.ctx.stroke();
        }
    }
    // 4.0 初始化绘制蛇
    Snake.prototype.drawInitSnake = function(){
        var _space = this.space
        // 4.0.1 定义一个数组 记录蛇的坐标
        this.snakeArray = [
            {
                x:_space * 0,
                y:0,
                color:"blue"
            },
            {
                x:_space * 1,
                y:0,
                color:"blue"
            },
            {
                x:_space * 2,
                y:0,
                color:"red"
            }
        ]
        // 4.0.2 绘制蛇
        for(var i = 0 ; i < this.snakeArray.length; i ++){
            // 4.0.2 绘制矩形
            this.ctx.beginPath();
            this.ctx.rect(
                this.snakeArray[i].x,
                this.snakeArray[i].y,
                this.space,
                this.space
                );
            // 设置蛇的每一格的颜色
            this.ctx.fillStyle =this.snakeArray[i].color;
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
    // 5.0 初始化绘制食物
    Snake.prototype.drawInitFood = function(){
        // 记录方块的大小
        var _space = this.space;
        // 记录食物的坐标位置
        this.food = {
            x:_space * 5,
            y:_space * 3,
            color:"orange"
        }
        // 开始绘制食物
        this.ctx.beginPath();
        // 绘制矩形
        this.ctx.rect(
            this.food.x ,
            this.food.y,
            this.space,
            this.space
        )
        // 设置食物的颜色
        this.ctx.fillStyle = this.food.color;
        // 填充
        this.ctx.fill();
        this.ctx.closePath();
    }
    // 6.0 创建食物
    Snake.prototype.createFood = function(){
        // 记录当前函数作用域的this
        var _this = this;
        // 更新食物的坐标
        // 随机随机
        this.food = {
            x : Math.floor(Math.random()*_this.column) * _this.space,
            y : Math.floor(Math.random()*_this.row) * _this.space,
            color:"orange"
        }
        // 判断 避免创建的食物在蛇身体上
        var bool = false;
        for(var i = 0 ; i < this.snakeArray.length ;i++){
            if(this.food.x == this.snakeArray[i].x && this.food.y == this.snakeArray[i].y){
                bool = true;
                break;
            }
        }
        // 根据布尔值是否需要从新创建食物
        if(bool){
            this.createFood();
        }
        // 设置食物的位置
        this.ctx.beginPath();
        this.ctx.rect(
            this.food.x ,
            this.food.y,
            this.space,
            this.space
        )
        this.ctx.fillStyle = this.food.color;
        this.ctx.closePath();
        this.ctx.fill();

    }
    // 7.0 监听键盘事件
    Snake.prototype.addKeyEvent = function(){ // 作用域1
        // 记录this
        var _this = this;
        // 事件绑定
        document.onkeydown = function(event){
            event = event || window.event; //事件对象
            var keyCode = event.keyCode;//键值码
            // 40 ---> 向下
            // 38 ---> 向上
            // 37 ---> 向左
            // 39 ---> 向右
            // 如果蛇移动的方向朝上，设置不了direction为 "down"
            if(keyCode == 40 && _this.direction !="up"){
                _this.direction = "down"; //赋值
            }
            if(keyCode == 38 && _this.direction !="down"){
                _this.direction = "up";
            }
            if(keyCode == 39 && _this.direction !="left"){
                _this.direction = "right";
            }
            if(keyCode == 37 && _this.direction !="right"){
                _this.direction = "left";
            }
            console.log(
                { direction:_this.direction}
            )

            // 按下 空格按键 暂停游戏
            if(keyCode == 32){
                // 暂停游戏
                clearInterval(_this.timer);
            }
            // 按下 S 按键  继续游戏 83
            // console.log(keyCode)
            if(keyCode == 83){
                clearInterval(_this.timer);
                // 继续游戏
                _this.timer = setInterval(function(){
                    _this.drawSnake();
                },athis.speed)
            }
        }
        
    }
    // 8.0 蛇移动的函数
    Snake.prototype.snakeMove = function(){
        // console.log(this.snakeArray,"before")
        // 定义变量 判断向左或者右 向上或者向下
        var x = 0 ;
        var y = 0 ;
        // 控制语句
        switch(this.direction){
            case  "down":
                    y = this.space; //正数
                break;
            case  "up":
                    y = -this.space; //负数
                break;
            case  "right":
                    x = this.space; //正数
                break;
            case  "left":
                    x = -this.space; //负数
                break;
        }

        console.log(x , y)
        // 循环蛇数组
        for(var i = 0 ; i < this.snakeArray.length-1;i++){
            // 设置蛇身体的位置
            this.snakeArray[i].x = this.snakeArray[i+1].x ;
            this.snakeArray[i].y = this.snakeArray[i+1].y ;
        }
        // snakeArray 设置蛇头位置
        this.snakeArray[this.snakeArray.length-1].x += x;
        this.snakeArray[this.snakeArray.length-1].y += y;
        
        // console.log(this.snakeArray,"after")

    }

    // 9.0 蛇移动时候需要再次绘制蛇
    Snake.prototype.drawSnake = function(){
        // 蛇移动了 把第一个格子清空
        this.ctx.clearRect(
            this.snakeArray[0].x ,
            this.snakeArray[0].y ,
            this.space,
            this.space
        )
        // 再次绘制地图
        this.drawMap();
        // 调用蛇移动的函数
        this.snakeMove();
        //再次绘制蛇
        for(var i = 0 ; i < this.snakeArray.length ; i ++){
            this.ctx.beginPath();
            this.ctx.rect(
                this.snakeArray[i].x,
                this.snakeArray[i].y,
                this.space,
                this.space
            );
            // 填充的颜色
            this.ctx.fillStyle = this.snakeArray[i].color;
            this.ctx.fill();
            this.ctx.closePath();
        }  
        
        // 检测蛇头和食物碰撞
        this.eatFood();

        //  复制一份蛇数据
        this.copySnake();
    }

    // 10. 判断蛇头和食物发生碰撞
    Snake.prototype.eatFood = function(){
        var _this = this;
        // 定义对象 记录蛇头部坐标
        var point = {
            x:this.snakeArray[_this.snakeArray.length-1].x,
            y:this.snakeArray[_this.snakeArray.length-1].y
        } 
        // 蛇头和食物发生碰撞
        if(point.x == this.food.x && point.y == this.food.y){
            // ... 添加一个格子
            console.log("吃到食物了...")
            _this.index++;
            _this.speed++;
            this.addSnakeBody();
            // ... 重新创建食物
            this.createFood();
        }
    }
    // 11. 蛇吃到食物了 添加一格身体
    Snake.prototype.addSnakeBody = function(){
        // 定义一个对象 记录吃到的食物
        // var new_snake_body = {
        //     x : this.food.x ,
        //     y : this.food.y,
        //     color:"blue" 
        // }

        var new_snake_body = {
            x : this.snakeArray[0].x - this.space ,
            y : this.snakeArray[0].y - this.space,
            color:"blue" 
        }
        // 往蛇数组里进行添加
        this.snakeArray.unshift(new_snake_body);
    }
    // 12. 复制蛇数据
    Snake.prototype.copySnake = function(){
        // 新数组 记录蛇的所有坐标
        this.snakeBody = [];
        // 循环
        for(var i = 0 ; i < this.snakeArray.length ; i ++){
            // 给新数组添加 蛇的所有坐标信息
            this.snakeBody.push({
                x:this.snakeArray[i].x,
                y:this.snakeArray[i].y,
                color:this.snakeArray[i].color
            });
        }

        // console.log(snakeBody,"新数组");
        // ... 调用一个方法 判断游戏是否结束
        this.isGmaeOver(this.snakeBody);
    }
    // 13.0 添加函数用于判断是否结束游戏
    Snake.prototype.isGmaeOver = function(new_snake){ //形参
        // 1.0 判断蛇是否超出活动范围
        // 1.1.0定义对象 记录蛇头部坐标
        var point = {
            x:this.snakeArray[this.snakeArray.length-1].x,
            y:this.snakeArray[this.snakeArray.length-1].y

        } 
        // 1.2.0水平方向超出范围了
        if(point.x < 0 || point.x > ((this.column-1) * this.space)){
            console.log("水平方向超出范围了...");
            // 停止定时器函数
            clearInterval(this.timer);
            alert("你的分数是"+this.index);
            return ;
        }
        // 1.3.0 垂直方向超出范围了
        if(point.y < 0 || point.y > ((this.row-1) * this.space)){
            console.log("垂直方向超出范围了...");
            
             // 停止定时器函数
            clearInterval(this.timer);
            alert("你的分数是"+this.index);
            return ;
        }

        // 2.0 判断蛇头和身体碰撞检测
        for(var i = 0 ; i < new_snake.length ; i ++){
            for(j = i + 1 ; j < new_snake.length ;j ++){
                if(new_snake[j].x == new_snake[i].x && new_snake[j].y == new_snake[i].y){
                    console.log(new_snake)
                    console.log("蛇头跟身体接触了..",{j:j,i:i});
                    console.log(new_snake[j],new_snake[i])
                    alert("你的分数是"+this.index);
                    clearInaterval(this.timer);
                    return;
                }
            }
        }

        
    }