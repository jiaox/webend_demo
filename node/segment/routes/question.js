var express = require('express');  
var router = express.Router();  
  
router.all('/ask', function(req, res) {  
      
    loginbean = req.session.loginbean;  
    if(loginbean==undefined){  
        res.send("<script>alert('登录过期,请重新登录');location.href='/';</script>");  
        return;  
    }  
    res.render('ask');  
}) 
 
module.exports = router;