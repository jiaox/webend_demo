/*
* @Author: Administrator
* @Date:   2019-02-25 22:58:15
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-25 23:07:31
*/
var events = require('events');
var http = require('http');
function UserBean(){
	this.eventEmit = new events.EventEmitter();
	this.zhuce = function(req,res){
		console.log('注册');
		req['uname']='aa';
		req['pwd']= 'bb';
		this.eventEmit.emit('zhuceSuc','aa','bb');//抛出事件消息
	},
	this.login = function(req,res){
		console.log("登录");
		res.write('用户名：'+req['uname']);
		res.write('密码：'+req['pwd']);
		res.write('登录');
	}
}
module.exports = UserBean;