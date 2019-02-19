/*
* @Author: Administrator
* @Date:   2019-02-19 01:12:44
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-20 00:45:13
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
	}
}