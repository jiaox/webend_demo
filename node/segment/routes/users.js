var express = require('express');
var router = express.Router();

var userModel = require("../models/UserModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list_user', function(req, res, next) {
	console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

/*POST 请求*/
router.post('/', function(req, res, next) {
	console.log("/ post请求");
    res.send('hello POST');
});
/*无论get还是post都接收*/

router.all('/all', function(req, res, next) {
   console.log("POST GET 请求全接受")
  res.send("hello all");//只能做一次输出
});

/**/
router.get('/aa', function(req, res, next) {
  res.sendFile("F:/webWork/webend_demo/node/aa.html");//输出aa.html中的内容，路径为绝对路径
});

router.get('/login', function(req, res, next) {
 res.render("login",{});//渲染login界面
});

/*router.post('/zhuce', function(req, res, next) {
	nicheng=req.param('nicheng');//接收参数方式一，但此方式即将被淘汰
	console.log(nicheng);
 res.send("注册");
});*/

/*router.get('/zhuce/:id',function(req,res){
	console.log("bbbbb="+req.params.id);//接收参数方式二  前端 action="./users/zhuce/15"
});*/

/*router.get('/zhuce', function(req, res, next) {
	nicheng=req.query['nicheng'];//接收参数方式三，只接收get方式，所以前边form需要写成method=get
	console.log(nicheng);
 res.send("注册");
});*/



router.post('/zhuce', function(req, res) { 
    nicheng=req.body['nicheng']; 
    if(nicheng!=undefined){ 
        userModel.zhuce(req,res); 
    }else{ 
        res.send("表单提交错误"); 
    } 
}); 
module.exports = router;
