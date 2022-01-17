var express=require('express');
const app=express()
var router=express.Router();
const path=require('path');
app.use(express.static("../client/Start"));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'../../client/Start','Start.html'));
});

module.exports=router;