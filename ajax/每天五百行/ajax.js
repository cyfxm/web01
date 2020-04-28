function ajax(option){
    var type = option.type;
    var url = option.url;
    var async = option.async;
    var data = option.data;
    var dataStr = "";
    if(data !=null){
        for(var key in data){
            dataStr += key + "=" + data[key] + "&"
        }
        dataStr = dataStr.slice(0,-1);
    }

    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(type == 'get'){
        url = url + "?" + dataStr
    }
    xhr.open(type,url,async);
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlendcoded');
    }
    xhr.send(type == 'get' ? null : dataStr);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var contentType = xhr.getResponseHeader('Content-Type');
                var res= '';
                if(contentType.indexOf('json') > -1){
                    res = JSON.parse(xhr.responseText);
                }else if(contentType.indexOf('xml') > -1){
                    res = xhr.responseXML;
                }else{
                    res = xhr.responseText;
                }
                if(option.success)option.success(res);
            }else{
                if(option.error) option.error("请求失败");
            }
        }
    }
}