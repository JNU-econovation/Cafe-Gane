var express=require('express');
var router=express.Router();

const total=require("../client/total.js");

var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

//카페인 음료 종류 보내기
router.get('/IsCaffeine/:IsCaffeineNum',function(req,res){
    var IsCaffeineNum=req.params.IsCaffeineNum;
    var CaffeinType='SELECT distinct type from cafe.menu where isCaffein=?';
    conn.query(CaffeinType,IsCaffeineNum,function(err,result){
        if(err){
            console.log("caffeintype error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.type);
            }

            const MenuListHTML = total.makeMenuListHTML(datalist);
            const rememberHTML=total.makeRememberMenuHTML(datalist);
            const menuHTML = total.makeMenuHTML(MenuListHTML,IsCaffeineNum,rememberHTML);
            return res.send(menuHTML);
        }
    })
});



module.exports=router;