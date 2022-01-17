var express=require('express');
var router=express.Router();
const path=require('path');

router.get('/IsCaffeine',function(req,res){
    res.sendFile(path.join(__dirname +'../../client/IsCaffeine','IsCaffeine.html'));
});

module.exports=router;