var connPool = require("./ConnPool"); 
var LoginBean = require("../jsbean/LoginBean");
module.exports={ 
    zhuce:function(req,res){ 
        pool = connPool(); 
        //从pool中获取连接(异步,取到后回调) 
        pool.getConnection(function(err,conn){ 
        	if(err){
        		res.send("数据连接错误，错误原因:"+err.message);
        		return ;
        	}
            var userAddSql = 'insert into user (email,pwd,nicheng,createtime) values(?,?,?,current_timestamp)'; 
            var param = [req.body['email'],req.body['pwd'],req.body['nicheng']]; 
            conn.query(userAddSql,param,function(err,rs){ 
                if(err){ 
                    //console.log('insert err:',err.message); 
                    // res.send("数据库错误,错误原因:"+err.message); 
                    errStr = err.message;
                    console.log(errStr);
                    sendStr = '<script>';
                    if(errStr.indexOf("emailuniq")>-1){
                        sendStr+="alert('email 重复');";
                    }else if(errStr.indexOf("nichenguiq")>-1){
                       sendStr+="alert('昵称 重复');";
                    }else{
                        sendStr+="alert('数据库异常，稍后测试');";
                    }

                    sendStr +="history.back();</script>";
                    res.send(sendStr);

                    return; 
                } 
                // res.send('<script>alert("注册成功");location.href="/";</script>'); 
                  //http重定向状态码
                      /*
                        301 永久重定向,告诉客户端以后应从新地址访问.
                        302 作为HTTP1.0的标准,以前叫做Moved Temporarily ,现在叫Found. 现在使用只是为了兼容性的处理,包括PHP的默认Location重定向用的也是302.
                        但是HTTP 1.1 有303 和307作为详细的补充,其实是对302的细化
                        303：对于POST请求，它表示请求已经被处理，客户端可以接着使用GET方法去请求Location里的URI。
                        307：对于POST请求，表示请求还没有被处理完，客户端应该向Location里的URI重新发起POST请求。
                        301,302和303的处理结果是一样的,直接跳转到test2.php,post没有内容
                        307的会重新post请求到test2.php,并且给出页面提示
                        */
                        res.redirect(307,'./login');
            }) 
            conn.release(); 
        }); 
    }, 
    login:function(req,res){ 
        pool = connPool();
        //从pool中获得链接
        pool.getConnection(function(err,conn){
            var userSql = 'select uid,nicheng from user where email = ? and pwd = ?';
            var param = [req.body['email'],req.body['pwd']];
            conn.query(userSql,param,function(err,rs){
                if(err){
                    res.send("数据库错误，错误原因:"+err.message);
                    return;
                }
                if(rs.length>0){
                    loginbean = new LoginBean();    
                    loginbean.id=rs[0].uid;    
                    loginbean.nicheng = rs[0].nicheng;    
                    req.session.loginbean = loginbean;    
                    //res.send('登录成功');    
                    res.redirect('/');    //跳转回index页 
                   
                }else{
                    res.send("账号密码错误");
                }
            });
            conn.release();
        });
    } 
} 
