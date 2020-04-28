// 因为获取对象功能用的非常频繁,我们可以自己封装一个函数获取对象
// 函数名$是可以正常使用的,没有问题,因为jquery获取对象的时候也是使用$,为后面的知识埋铺垫
// 封装函数的感觉就是,辛苦一时,快乐很久
function $( cssStr ){
    var obj = document.querySelectorAll( cssStr );
    
    if( obj.length == 1){// 判断获取输出的对象长度是否为1
        return obj[0];// 如果长度为1就返回第一个元素即可
    }else{
        return obj;// 如果长度不为值,直接返回整个obj
    }
}

// 获取左侧按钮对象
var arrow_left = $(".arrow_left");
// 获取右侧按钮对象
var arrow_right = $(".arrow_right");
// 获取轮播图对象
var banner = $(".banner");
// 获取轮播图的宽度
var bannerWidth = banner.offsetWidth; 
// 获取小圆点对应的ol对象
var circle = $(".circle");
// 获取.banner里面的ul对象
var bannerUl = $(".banner ul");

// 功能1:鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮
banner.onmouseover = function(){
    arrow_left.style.display = "block";
    arrow_right.style.display = "block";

    // 功能11: 鼠标移上.banner就停止定时器  timer是一个全局变量,在函数内是可以正常使用的
    clearInterval(timer);
    // 多加一句代码,设置timer的变量为空
    timer = null;
}

banner.onmouseout = function(){
    arrow_left.style.display = "none";
    arrow_right.style.display = "none";
    // 功能11: 鼠标移出.banner继续开启定时器  timer是一个全局变量,在函数内是可以正常使用的

    if( timer == null ){// 判断timer变量是否为null,为null才开启定时器
        timer = window.setInterval(function(){
            // 手动调用右侧按钮点击事件
            arrow_right.click();
        },1500);
    }
}

// 功能6: 克隆ul第一个li,添加到ul的子节点列表最后面   节点.cloneNode(true或者false或者不加参数)  true的时候代表深拷贝  false跟不传参数代表浅拷贝
// console.log( bannerUl.children[0] );
var first = bannerUl.children[0].cloneNode(true);
bannerUl.appendChild( first );
// 设置banner层中ul的宽度
// console.log( bannerUl.children.length );
bannerUl.style.width = bannerUl.children.length*100+"%";

// 功能2:   动态生成指示器中的li(也就是动态生成小圆圈)
// 实现思路  创建节点,添加节点   有几个图片,我们就有几个小圆点,因为图片是放在ul的li标签中,所有ul里面有几个li,就应该有几个小圆点
// console.log( bannerUl );
// console.log( bannerUl.children );
// console.log( bannerUl.children.length );

for(var i = 0; i < bannerUl.children.length-1; i++ ){
    // 创建节点
    var li = document.createElement("li");

    // 设置自定义属性data-index
    li.setAttribute("data-index",i);

    // 功能3: 被点击小圆圈高亮  排他思想  先清除所有的,再设置自己
    li.onclick = function(){
        // circle.children就是代表circle层下的所有li标签
        for(var j=0;j<circle.children.length;j++){
            // 清除所有li的class属性值
            circle.children[j].removeAttribute("class");
        }
        // 单独设置点击的那个li的class属性值
        this.className = "current";

        // 功能4:点击小圆圈滚动到对应图片
        // 1. 点击小圆圈滚动图片
        // 2. 此时用到animate动画函数，将animate.js文件引入
        // 3. 注意是ul 移动 而不是小li
        // 4. 使用动画函数的前提，该元素必须有定位 所以要给.banner ul加个绝对定位
        // position: absolute;top: 0;left: 0;
        // 5. 滚动图片的核心算法： 点击某个小圆圈 ， 就让图片滚动 
        // 小圆圈的索引号乘以图片的宽度做为ul移动距离
        // 6. 此时需要知道小圆圈的索引号， 我们可以在生成小圆圈的时候，
        // 给它设置一个自定义属性，点击的时候获取这个自定义属性即可。
        // 7. 注意设置了ul绝对定位以后,看看左右按钮会不会被挡住

        // 让.banner里面ul移动 移动多少距离由点击哪个li决定,比如点击第二个li,那就要移动 -1200; 点击了第三个li,要移动-2400...  这个1200其实轮播图的宽度
        // animate(bannerUl,??);

        var index = this.getAttribute("data-index");
        // console.log( index );
        // console.log( bannerWidth );

        animate(bannerUl, -index*bannerWidth );

        // 功能8: 修复小Bug 点击某个小圆圈,再点击右侧按钮,出现图片跟小圆圈显示不正确,原因是因为我们点击小圆圈以后,跟num,circle变量都没有关系
        // 解决方法:
        // 当我们点击了ol中某个小li 我们就要把这个li的索引号给num变量,num控制下一张图片
        // 当我们点击了ol中某个小li 我们就要把这个li的索引号给currentCircle变量,
        // currentCircle变量控制小圆圈的高亮
        // num控制现在是第几张图片
        num = index;
        // circleCurrent控制现在是第几个小圆点
        circleCurrent = index;
    }
    // 添加节点 
    circle.appendChild(li);
}

// 单独给.circle层里面第一个li设置current类名
circle.children[0].className = "current";

// 定义一个节流阀变量,保存当前动画状态
var flag = true;

var num = 0; // 我们会定义一个变量保存现在是第几张图片,如果num=0,就代表现在是第1个图片;如果num=1,就代表现在是第2个图片
var circleCurrent = 0;// 我们定义一个变量保存现在是第一个小圆点,如果是circleCurrent=0,就代表现在是第1个小圆点
arrow_right.onclick = function(){
    // 功能5: 点击右侧按钮一次，就让图片滚动一张
    // 核心原理:就是点一次右侧按钮,就让ul负一次1200px
    // 1. 点击右侧按钮一次，就让图片滚动一张。
    // 2. 声明一个变量num， 点击一次，自增1， 让这个变量乘以图片宽度，就是 ul 的滚动距离。
    // 3. 图片无缝滚动原理
    // 4. 把ul 第一个li 克隆一份，放到ul 的最后面,  需要注意修改ul的宽度以及生成小圆点的个数
    // 5. 当图片滚动到克隆的最后一张图片时， 让ul 快速的、不做动画的跳到最左侧：也就是把 left 为0
    // 6. 同时num 赋值为0，可以重新开始滚动图片了
    // console.log( num );

    // 节流阀
    if( flag ){ // 当flag变量为true的时候,才能点击右侧按钮实现动画
        flag = false;// 改变flag为false,关闭节流阀

        if(num == bannerUl.children.length - 1){// 代表移动到我们克隆的那张图片
            bannerUl.style.left = 0;
            num = 0;
        }
        num++;
        animate(bannerUl, -num*bannerWidth ,function(){
            // 当动画执行完毕以后,重新开启节流阀
            flag = true;
        });

        // 功能7: 点击右侧按钮,小圆圈跟随变化
        circleCurrent++;
        // console.log( circleCurrent );

        if( circleCurrent == circle.children.length){
            circleCurrent = 0;
        }

        // 调用改变小圆点功能的函数
        circleChange();
    }


}

// 功能9: 实现左侧按钮功能,左侧按钮功能跟右侧按钮功能非常相似,所以我们可以复制右侧按钮的代码进行修改,但是需要注意修改边界值(难点)
arrow_left.onclick = function(){
    // 节流阀
    if( flag ){
        flag = false;// 关闭节流阀

        if( num == 0){// 到达边界值,快速不做动画把图片移动到最后一张图片上,然后再动画移动到倒数第二个图片 这样才可以实现无缝滚动
            // num边界值处理  num变量是控制当前第n个图片轮播 num =0,就代表第1个图片
            num = bannerUl.children.length - 1;// 7 - 1 = 6
            bannerUl.style.left = -num*bannerWidth + "px";
        }

        num--;
        animate(bannerUl, -num*bannerWidth ,function(){
            // 动画执行完毕以后,重新开启节流阀
            flag = true;
        });

        // 点击左侧按钮,小圆圈跟随变化
        circleCurrent--;
        
        // circleCurrent边界值的处理  circleCurrent控制当前第几个小圆点 circleCurrent等于0的时候,代表第一个小圆点
        if(circleCurrent < 0 ){// 当小圆点小于的时候0,应该把circleCurrent设置为最后一个小圆点
            circleCurrent = circle.children.length - 1;
        }

        // 调用改变小圆点功能的函数
        circleChange();
    }
}

// 功能10:  我们观察发现左侧按钮跟右侧按钮都有高亮某个小圆点的代码,所以我们可以对代码进行优化,把相同的代码放在一个函数中
// 封装一个circleChange函数,然后在左侧按钮跟右侧按钮的代码中调用circleChange函数即可
function circleChange(){
    // 排他思想
    // circle.children就是代表circle层下的所有li标签
    for(var k=0;k<circle.children.length;k++){
        // 清除所有li的class属性值
        circle.children[k].removeAttribute("class");
    }
    // 单独设置点击的那个li的class属性值
    circle.children[circleCurrent].className = "current";
}

// 功能11:  自动播放功能
// 1. 自动播放功能
// 2. 添加一个定时器
// 3. 自动播放轮播图,实际就类似点击了右侧按钮
// 4. 此时我们可以"手动调用右侧按钮点击"事件   语法:对象.click()  手动触发事件
// 5. 鼠标经过.banner就停止定时器
// 6. 鼠标离开.banner就开启定时器
var timer = window.setInterval(function(){
    // 手动调用右侧按钮点击事件
    arrow_right.click();
},1500);