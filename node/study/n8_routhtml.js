/*
* 通过路由读取login.html，login.html中包含文字，和img，渲染到img时，调用router的showimg方法,读取图片
* @Author: Administrator
* @Date:   2019-02-22 01:15:18
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 01:45:04
*/
var http = require('http');
var url = require('url');
var router = require('./models/router3');
http.createServer (function(request,response){
	
	if(request.url!='/favicon.ico'){

		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		router[pathname](request,response);
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');