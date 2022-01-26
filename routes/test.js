var express=require('express');
var router=express.Router();

router.get('/test',function(req,res){//url확인하고 변경하기
    res.send(req.query.id+"   "+req.query.name);
})

module.exports=router;