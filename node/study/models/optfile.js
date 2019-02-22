/*
* @Author: Administrator
* @Date:   2019-02-19 23:55:50
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-23 00:19:33
*/
var fs = require("fs");
module.exports = {
	readfile: function(path,recall){
		fs.readFile(path,function(err,data){
			if(err){
				console.log('bbbb'+err);
				recall('文件不存在');//抛异常之后必须返回主程序 执行response.end('');
			}else{
				// console.log(data.toString());
				recall(data);
			}
		});
		console.log("异步方法执行完毕");
	},
	readfileSync:function(path){//同步方法
		var data = fs.readFileSync(path,'utf-8');		
		console.log(data);
		console.log("同步方法执行完毕");
		
	},
	writefile(path,data,recall){
		fs.writeFile(path,data,function(err){
			if(err){
				throw err;
			}
			console.log('Its saved');//文件被保存
			recall('写文件成功');
		});
	},
	writeFileSyncFunction(path,data){//同步方式
		fs.writeFileSync(path,data);
		console.log('同步些文件完成');
	},
	readImg:function(path,res){
		fs.readFile(path,'binary',function(err,filedata){
			if(err){
				console.log(err);
				return;
			}else{
				console.log('输出文件');
				//res.writeHead(200,{'Content-Type':'image/jpeg'});
				res.write(filedata,'binary');
				res.end();
			}
		})
	}
}