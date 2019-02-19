/*
* @Author: Administrator
* @Date:   2019-02-19 23:55:50
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-20 00:18:29
*/
var fs = require("fs");
module.exports = {
	readfile: function(path,recall){
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data.toString());
				recall(data);
			}
		});
		console.log("异步方法执行完毕");
	},
	readfileSync:function(path){//同步方法
		var data = fs.readFileSync(path,'utf-8');		
		console.log(data);
		console.log("同步方法执行完毕");
		
	}
}