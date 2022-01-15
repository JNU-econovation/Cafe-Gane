var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var mysqlConnection=require(__dirname+"/config/database");
var conn=mysqlconnection.init();
mysqlConnection.connect(conn);

router.use(bodyParser.urlencoded({extended:true}));
app.set('views', './views_mysql');
app.set('view engine', 'ejs');

router.get('/cafes/:id',function(req,res){
    var ShowCafe='SELECT name,address,time,phone FROM cafe.store WHERE id=? ';
    var StoreId=req.query.id;
    connection.query(ShowCafe,StoreId,function(req,res){
        res.render('CafeShow',{Cafe:ShowCafe});
    })
});

module.exports=router;

