/*
* @Author: Administrator
* @Date:   2019-02-25 22:19:53
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-25 22:38:23
*/
var OptPool = require('./models/OptPool');
var optPool = new OptPool();
var pool = optPool.getPool();
//从连接池中获取一个连接，异步操作
pool.getConnection(function(err,conn){
	//插入
	var userAddSQL= 'insert into user(uname,pwd) values(?,?)';
	var param = ['fff','fff'];
	conn.query(userAddSQL,param,function(err,rs){
		if(err){
			console.log('insert err:',err.message);
			return;
		}
		console.log('insert success');
		// conn.release();//释放连接池
	});
	//查询
	conn.query('SELECT * from user',function(err,rs){
		if(err){
			console.log('[query]-:'+err);
			return ;
		}
		for(var i=0;i<rs.length;i++){
			console.log(rs[i].uname);			
		}
		conn.release();//释放连接池
	});
});