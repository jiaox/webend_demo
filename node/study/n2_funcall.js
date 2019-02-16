var http=require("http");
var otherfun = require("./models/otherfuns.js");
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!="/favicon.ico"){//清除第二此访问
		// console.log("访问");
		// response.write("hello,world");
		//fun1(response);
		

		otherfun.fun3(response);//可以这么调用
		//---用字符串调用对应的函数 重要！！！！！！
		otherfun['fun2'](response);//也可以这么写


		response.end("");//不写就没有http协议尾，写了会产生两次访问
		
	}
}).listen(8000);

console.log("server running at http://127.0.0.1:8000");

function fun1(res){
	console.log("fun1");
	res.write("hello , 我是fun1");
}