/*
* 直接连mysql
* @Author: Administrator
* @Date:   2019-02-25 21:44:14
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-25 22:03:09
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'test',
	port:'3306'
});
//创建一个连接
connection.connect(function(err){
	if(err){
		console.log('[query] - :'+err);
		return err;
	}
	console.log('[connection connect] succeed!');
});
//执行插入
var userAddSql = 'insert into user(uname,pwd) values(?,?)';
var param = ['ccc','ccc'];
connection.query(userAddSql,param,function(err,rs){
	if(err){
		console.log('insert err:',err.message);
		return ;
	}
	console.log('insert success');
});

//执行查询
connection.query('select * from user where uid=?',['2'],function(err,rs){
	if(err){
		console.log('[query]-:'+err);
		return ;
	}
	for(var i=0;i<rs.length;i++){
		console.log('The solution is: ',rs[i].uname);
	}

})

//关闭连接
connection.end(function(err){
	if(err){
		console.log(err.toString());
		return ;
	}
	console.log('[connection end] succeed');
})