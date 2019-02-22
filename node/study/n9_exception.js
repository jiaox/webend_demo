/*
* 同步异常和异步异常的捕获
* @Author: Administrator
* @Date:   2019-02-22 01:15:18
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-23 00:17:44
*/
var http = require('http');
var url = require('url');
var router = require('./models/router3');
var exception = require('./models/Exception');
http.createServer (function(request,response){
	
	if(request.url!='/favicon.ico'){

		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		
		try{
			// router[pathname](request,response);
			data = exception.expfun(0);
			response.write(data);
			response.end("");
		}catch(err){
			console.log("aaaa="+err);
			response.writeHead(200,{'ContentType':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end("");
		}
		console.log("server执行完毕");
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');