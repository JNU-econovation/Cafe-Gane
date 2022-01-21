const express = require("express");
const http = require("http");
//const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const bodyparser=require("body-parser");

var mysqlConnection=require("./model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

const app=express()
const router=express.Router();

app.use(express.static("client"));
app.use(logger());
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


var CaffeinType='SELECT distinct name from cafe.hash';
conn.query(CaffeinType,function(err,result){
     if(err){
         console.log("caffeintype error!");
     }else{
     var datalist=[];
     for(var data of len(result)){
         datalist.push(data.type);
     }  
     console.log(datalist);
 }
 });

const mainRouter=require("./routes/main");
app.use('/',mainRouter);

const IsCaffeineRouter=require("./routes/IsCaffeine")
app.use('/',IsCaffeineRouter);

const BeverageTypeRouter=require("./routes/BeverageType");
app.use('/',BeverageTypeRouter);

const ShowCafeRouter=require("./routes/ShowCafe");
app.use('/',ShowCafeRouter);


app.listen(3000,function(req,res){
    console.log("connected 3000 port!");
});
