var express=require('express');
var router=express.Router();

const total = require("../client/total.js");

var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

//카페인 음료 종류 보내기 
//Menu?IsCaffeine=1'

router.get('/Menu',function(req,res){
    var CaffeinType='SELECT distinct type FROM cafe.menu WHERE isCaffein=?';
    var isCaffeineNum=req.query.IsCaffeine;
    conn.query(CaffeinType,isCaffeineNum,function(err,result){
        if(err){
            console.log("caffeintype error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.type);
            }
            const menuListHTML = total.makeMenuListHTML(datalist, isCaffeineNum);
            const menuBodyHTML = total.makeMenuBodyHTML(menuListHTML, isCaffeineNum);
            const menuHTML = total.makeBodyHTML(menuBodyHTML);
            return res.send(menuHTML);
        }
    })
});



module.exports=router;