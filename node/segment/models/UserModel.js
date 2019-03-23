var connPool = require("./ConnPool"); 
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
                    if(errStr.indexOf("emailUniq")>-1){
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
                res.send('<script>alert("注册成功");location.href="/";</script>'); 
            }) 
            conn.release(); 
        }); 
    }, 
    login:function(req,res){ 
        return a+b; 
    } 
} 
