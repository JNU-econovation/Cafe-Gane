let express=require('express');
let router=express.Router();
let path=require('path');
router.use(express.static("../client/Start"));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'../../client/Start','Start.html'));
});

module.exports=router;