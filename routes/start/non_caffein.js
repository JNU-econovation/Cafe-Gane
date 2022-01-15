var express=require('express');
var router=express.Router();

router.get('/non_coffee_select',function(req,res){
    res.send("세부 사항 선택하는 걸로 연결");
});

module.exports=router;