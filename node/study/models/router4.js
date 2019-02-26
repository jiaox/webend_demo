/*
* @Author: Administrator
* @Date:   2019-02-23 00:26:54
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-24 21:50:00
*/

var optfile = require('./optfile');
var url = require('url');
var querystring = require('querystring');
function getRecall(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	//定义一个闭包函数
	function recall(data){
		res.write(data);
		res.end('');
	}
	return recall;
}
module.exports = {
	login:function(req,res){
	    //get方式接参
	   /* var rdata = url.parse(req.url,true).query;
	    console.log(rdata);
	    if(rdata['email']!=undefined){
	    	console.log(rdata['email']);
	    }*/

	    //post方式
	    var post ='';
	    req.on('data',function(chunk){//通过req的data事件监控
	    	post +=chunk;
	    });
	    //注意异步
	    req.on('end',function(){
	    	post = querystring.parse(post);
	    	// console.log('受到参数:'+post['email']+'\n');
	    	arr= ['email','pwd'];
	    	function recall(data){
	    		dataStr = data.toString();
	    		console.log(dataStr);
	    		for(var i=0;i<arr.length;i++){
	    			re = new RegExp("{"+arr[i]+"}",'g');//
	    			dataStr = dataStr.replace(re,post[arr[i]]);
	    			console.log(re);
	    		}
	    		res.write(dataStr);
	    		res.end('');
	    	}
	    	// recall=getRecall(req,res);
			optfile.readfile('./views/login.html',recall);
	    });
		
	},
	zhuce:function(req,res){
		recall=getRecall(req,res);
		optfile.readfile('./views/zhuce.html',recall);
	},
	writefile:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');//不写则没有http尾
		}
		optfile.writefile('./views/one.txt','我的写入文件',recall);
	},
	showimg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});
		optfile.readImg('./imgs/pig.png',res);
	}
}