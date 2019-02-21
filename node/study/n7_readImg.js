/*
* 读取图片文件,但是不能带文字
* @Author: Administrator
* @Date:   2019-02-22 00:57:12
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 01:12:22
*/
var http = require('http');
var optfile = require('./models/optfile');
http.createServer (function(request,response){
	response.writeHead(200,{'Content-Type':'image/jpeg'});
	if(request.url!='/favicon.ico'){
		console.log("访问");
		// response.write('hello,world');//不能向客户端输出任何字节
		optfile.readImg('./imgs/pig.png',response);
		console.log("继续执行");
		// response.end('')；//方法中已经写过 
	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');