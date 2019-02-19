/*
* 读取文件 异步
* @Author: Administrator
* @Date:   2019-02-19 23:52:09
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-20 00:19:31
*/
var http = require('http');
var optfile = require('./models/optfile');
http.createServer (function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!='/favicon.ico'){
		//使用闭包函数，获取读取的数据
		function recall(data){
			response.write(data);
			response.end('结束');		//不写则没有协议尾
		}

		optfile.readfile("F:\\aa.txt",recall);
		
		console.log("主程序执行完毕");


	}
}).listen(8000);
console.log('server running at http://127.0.0.1:8000');