/*
* @Author: Administrator
* @Date:   2019-02-24 22:05:00
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-24 22:37:51
*/

var async = require('async');
function oneFun(){	
	ii = 0;
	setInterval(function(){
		console.log("aaa="+new Date());
		ii++;
		if(ii==3){
			clearInterval(this);
		}
	},1000);
	console.log("oneFun");
}
function twoFun(){
	jj = 0;
	setInterval(function(){
		console.log("bbb="+new Date());
		jj++;
		if(jj==3){
			clearInterval(this);
		}
	},1000);
	console.log("oneFun执行完毕");
}
// oneFun();
// twoFun();

function exec(){
	async.series({
		one:function(done){
			ii = 0;
			setInterval(function(){
				console.log("aaa="+new Date());
				ii++;
				if(ii==3){
					clearInterval(this);
					done(null,{one:'one'});
				}
			},1000);

		},
		two:function(done){
			jj = 0;
			setInterval(function(){
				console.log("bbb="+new Date());
				jj++;
				if(jj==3){
					clearInterval(this);
				}
			},1000);
			console.log("oneFun执行完毕");
		}
	},function(err,rs){
		console.log(err);
		console.log(rs);
	});
}
exec();

console.log("主进程执行完毕");

