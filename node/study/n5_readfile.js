/*
* 读取文件
* @Author: Administrator
* @Date:   2019-02-19 23:52:09
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-20 00:14:04
*/
var http = require('http');
var optfile = require('./models/optfile');
http.createServer (function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!='/favicon.ico'){
		console.log('访问');
		response.write('hello world');
		optfile.readfileSync("F:\\aa.txt");
		// optfile.readfile("F:\\aa.txt");
		response.end('结束');		//不写则没有协议尾
		console.log("同步主程序执行完毕");


	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');