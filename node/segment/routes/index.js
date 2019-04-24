var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    loginbean = req.session.loginbean;
    console.log(loginbean);
    // console.log(loginbean.nicheng);
  res.render('index', { title: 'Express' ,loginbean:loginbean});
  // res.send("hello index");//只能做一次输出
});

/*使用正则方式 对abcd,abxcd,ab123cd,等进行响应 */
router.get('/ab*cd', function(req, res, next) {
   console.log("/ab*cd get请求")
  res.send("正则匹配");//只能做一次输出
});

router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err){
        res.redirect('/');
    });
});


module.exports = router;
