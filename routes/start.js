var express=require('express');
var router=express.Router();

router.get('/r1',function(req,res){
    res.send("Hello,/p1/r1");
    //res.sendFile(__dirname+"public/main.html")
});

router.get('/r2',function(req,res){
    res.send("Hello,/p1/r2");
});


module.exports=router;