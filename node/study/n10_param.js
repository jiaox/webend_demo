/*
* post和get方法
* @Author: Administrator
* @Date:   2019-02-23 00:23:55
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-23 00:27:44
*/
var http = require('http');
var url = require('url');
var router = require('./models/router4');
http.createServer (function(request,response){
	
	if(request.url!='/favicon.ico'){

		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		
		try{
			router[pathname](request,response);
		}catch(err){
			console.log("出错="+err);
			response.writeHead(200,{'ContentType':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end("");
		}
		console.log("server执行完毕");
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');