//页面加载完成时
window.onload=function(){
	//实现宝贝与店铺点击切换
	//获取search-tab层对象
	var objsearchTab = document.getElementsByClassName('search-tab')[0];
	var objsearchTabSpans=objsearchTab.getElementsByTagName('span');
	for(var i=0;i<objsearchTabSpans.length;i++){
		objsearchTabSpans[i].onclick=function(){
			//点击以后去掉之前所有span的class属性
			for(var j=0;j<objsearchTabSpans.length;j++){
				objsearchTabSpans[j].removeAttribute('class');
			}
			//this   //sei触发代表sei
			this.className='active';
		}
	}


	//实现今日新品与一周热销点击以后切换商品内容
	//获取top-goods层下面的nav层下面的所有a标签对象
	var objTopGoodsNavlinks=getObj('.top-goods .nav a',true);
	for(var i=0;i<objTopGoodsNavlinks.length;i++){
		//给a标签加id值
		objTopGoodsNavlinks[i].id=i;//这步很重要
		//绑定单击事件
		objTopGoodsNavlinks[i].onclick=function(){
			//获取类名为content-wrap的层,其实只有两个
			var objContentWrap=getObj('.content-wrap',true);
			for(var j=0;j<objTopGoodsNavlinks.length;j++){
				//移除所有a标签的class
				objTopGoodsNavlinks[j].removeAttribute('class');
				//把获取类名为content-wrap的所有层都隐藏
				objContentWrap[j].style.display='none';
			}
			//当前点击对象,加上active类
			this.className='active';
			//显示第几个content-wrap层
			objContentWrap[this.id].style.display='block';//这步很重要
		}

	}
}

//当页面发生滚动时
window.onscroll=function(){
    var scroll_top=document.body.scrollTop||document.documentElement.scrollTop;//获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
    var objMainNav=getObj('.main-nav');
    if(scroll_top>=200){
        objMainNav.style.position='fixed';
    }else{
        objMainNav.style.position='static';
    }

    var objbackTop=getObj('.backTop');
    if(scroll_top>0){
        objbackTop.style.display='block';
    }else{
        objbackTop.style.display='none';
    }
}


function getObj(selector,is_need_return_arr){
	
	/*if(is_need_return_arr){
		return document.querySelectorAll(selector);
	}else{
		return document.querySelector(selector);
	}*/

	return is_need_return_arr ? document.querySelectorAll(selector) : document.querySelector(selector);
}

$(function() {
	$("img.lazy").show().lazyload({
		effect: "fadeIn",
	});
});