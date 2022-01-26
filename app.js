const express = require("express");
const http = require("http");
//const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const bodyparser=require("body-parser");
const sessionStorage = require("node-sessionstorage");
var mysqlConnection=require("./model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

const app=express()
const router=express.Router();
const session = require("express-session");

app.use(session({secret: "my secret", resave: false, saveUninitialized: false}));
app.use(express.static("client"));
app.use(logger());
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


// var CaffeinType='SELECT distinct type name from cafe.menu WHERE isCaffein=1';
// conn.query(CaffeinType,function(err,result){
//      if(err){
//          console.log("caffeintype error!");
//      }else{
//      var datalist=[];
//      for(var data of result){
//          datalist.push(data.type);
//      }  
//      console.log(datalist);
//  }
//  });

//const str ='바나나,딸기,주스,수박';
//const arr = str.split(",");

/*
for(var i in arr){
    console.log(arr[i]);
}
*/
// const CafeSort = "SELECT menu.name,menu.price,store.name,store.address,store.time,store.phone,store.image " 
// +"FROM cafe.hash INNER JOIN hash_has_menu ON hash.id=hash_has_menu.hash_id INNER JOIN cafe.menu"
// +" ON menu.id=hash_has_menu.menu_id INNER JOIN cafe.store ON store.id=menu.store_id "
// +"WHERE menu.isCaffein=0 and menu.type='주스' and hash.name IN ("
// +"'딸기') ORDER BY menu.price";

 CafeSort="SELECT menu.menu_name,menu.price,store.store_name,store.address,store.time,store.phone,store.image \
      FROM cafe.hash \
      INNER JOIN hash_has_menu \
      ON hash.id=hash_has_menu.hash_id \
      INNER JOIN cafe.menu \
      ON menu.id=hash_has_menu.menu_id \
      INNER JOIN cafe.store \
      ON store.id=menu.store_id \
      WHERE menu.isCaffein=1 and menu.type='라떼' and hash.name IN ('초코') ORDER BY menu.price";

   conn.query(CafeSort,function(err,result){
       if(err){
           console.log("app.js mysql error!");
        }
        else{
            console.log(result[1]);
        }
    });




 var CaffeinType='SELECT distinct type from cafe.menu where isCaffein=1';
 conn.query(CaffeinType,function(err,result){
     if(err){
         console.log("caffeintype error!");
     }else{
         var datalist=[];
         for(var data of result){
             datalist.push(data.type);
         }
         console.log(datalist);
     }
 })



const mainRouter=require("./routes/main");
app.use(mainRouter);

const IsCaffeineRouter=require("./routes/IsCaffeine")
app.use(IsCaffeineRouter);

//const { amuguna1 } = require("./client/Menu/MakeMenuHTML.js");
//const { amuguna2 } = require("./client/ShowCafe/MakeShowCafeHTML.js");
const BeverageTypeRouter=require("./routes/BeverageType");
app.use(BeverageTypeRouter);

const ShowCafeRouter=require("./routes/ShowCafe");
//const { ConfigurationServicePlaceholders } = require("aws-sdk/lib/config_service_placeholders");
app.use(ShowCafeRouter);

const testRouter=require("./routes/test.js");
app.use(testRouter);




app.listen(3000,function(req,res){
    console.log("connected 3000 port!");
});
