var express=require('express');
var router=express.Router();
var mysql=require('mysql');

var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

//router.use(bodyParser.urlencoded({extended:true}));
//app.set('views', './views_mysql');
//app.set('view engine', 'ejs');

router.get('/',function(req,res){//type은 보내주는데 카페인/논카페인 구분
    var sql='SELECT * FROM cafe.menu WHERE isCaffein=? AND type=? ORDER BY price';
    var isCaffein=req.query.isCaffein;
    var type=req.query.type;
    var params=[isCaffein,type];
    connection.query(sql,params,function(req,res){
 
    })
});

router.get('/ShowCafe/:id',function(req,res){
    var ShowCafe='SELECT name,address,time,phone FROM cafe.store WHERE id=?';
    var StoreId=req.query.id;
    connection.query(ShowCafe,StoreId,function(req,res){
        res.render('CafeShow',{Cafe:ShowCafe});
    })
});

module.exports=router;

