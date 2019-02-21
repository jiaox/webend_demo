/*
* 通过路由写文件
* @Author: Administrator
* @Date:   2019-02-20 00:32:54
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 00:28:03
*/

var http = require('http');
var url = require('url');
var router = require('./models/router2');
http.createServer (function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!='/favicon.ico'){
		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		router[pathname](request,response);
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');
