/*
* 通过url获取路由相应信息，再根据路由执行相应方法
* @Author: Administrator
* @Date:   2019-02-19 01:01:34
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-19 01:19:46
*/
var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer (function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!='/favicon.ico'){
		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		router[pathname](request,response);
		response.end('');
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');