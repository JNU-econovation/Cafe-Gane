var express=require('express');
var router=express.Router();
const mysqlConnObj = require("../model/database.js");
const mysqlConn=mysqlConnObj.init();
mysqlConnObj.open(mysqlConn);

//카페인 음료 종류 선택
router.get('/Caffein',function(err,html){
    var CaffeinType='SELECT type FROM cafe.menu WHERE isCaffein=1';
    connection.query(CaffeinType,function(req,res){
        if(error){
            console.log("caffeintype error!");
        }else{     
        }
        res.render('CaffeinType.ejs', JSON.stringify({caffeinlist:CaffeinType}));
    });
});

//디카페인 음료 종류 선택
router.get('/DeCaffein',function(err,html){
    var DeCaffeinType='SELECT type FROM cafe.menu WHERE isCaffein=0';
    connection.query(DeCaffeinType,function(req,res){
        if(error){
            console.log("decaffein type error!");
        }
        res.render('DeCaffeinType.ejs',{Decaffeinlist:"DeCaffeinType"});
    });
});

module.exports=router;