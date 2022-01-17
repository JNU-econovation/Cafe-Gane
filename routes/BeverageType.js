var express=require('express');
var router=express.Router();

const total=require("../client/total.js");

var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

//카페인 음료 종류 보내기
router.get('/IsCaffein=1',function(req,res){
    var CaffeinType='SELECT distinct type from cafe.menu where isCaffein=1';
    conn.query(CaffeinType,function(err,result){
        if(err){
            console.log("caffeintype error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.type);
            }

            const caffeineListHTML = total.makeCaffeineListHTML(datalist);
            const menubodyHTML = total.makeMenuHTML(caffeineListHTML);
            //const caffeineListHTML = total.makeCaffeineListHTML(datalist);
            //const menubodyHTML = total.makeMenuHTML(caffeineListHTML);
            //const makeMenuHTML = total.makeHTML(menubodyHTML);
            return res.send(menubodyHTML); 

        }
        
    });
});

//논카페인 음료 종류 보내기
router.get('/IsCaffein=0',function(req,res){
    var DeCaffeinType='SELECT type FROM cafe.menu WHERE isCaffein=0';
    conn.query(DeCaffeinType,function(err,result){
        if(err){
            console.log("decaffein type error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.type);
            }
            const caffeineListHTML = total.makeCaffeineListHTML(datalist);
            const menubodyHTML = total.makeMenuHTML(caffeineListHTML);
            const menuHTML = total.makeHTML(menubodyHTML);
            res.send(menuHTML); 
        }
    });
});

module.exports=router;