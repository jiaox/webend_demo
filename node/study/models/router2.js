/*
* @Author: Administrator
* @Date:   2019-02-19 01:12:44
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 01:35:15
*/
var optfile = require('./optfile');
module.exports = {
	login:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');
		}
		optfile.readfile('./views/login.html',recall);
	},
	zhuce:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');
		}
		optfile.readfile('./views/zhuce.html',recall);
	},
	writefile:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');//不写则没有http尾
		}
		optfile.writefile('./views/one.txt','我的写入文件',recall);
	}
}