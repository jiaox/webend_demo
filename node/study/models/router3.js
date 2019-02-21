/*
* @Author: Administrator
* @Date:   2019-02-19 01:12:44
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 01:53:31
*/
var optfile = require('./optfile');
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
		recall=getRecall(req,res);
		optfile.readfile('./views/login.html',recall);
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