const express = require("express");
const app=express();
const router=express.Router();
const http = require("http");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const bodyparser=require("body-parser");

var mysqlConnection=require("./model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

app.use(express.static("client"));
app.use(logger());
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


let hash="한라봉,딸기,수박";
let arr_hash=hash.split(",");

// let result = "";
// for (let data of arr_hash) {
//     result += `"${data}",`
// }

let CafeName="고마다커피";
let Cafe = "SELECT store.store_name,store.address,store.time,store.phone,store.image FROM cafe.store WHERE store_name=?";
conn.query(Cafe, CafeName, function (err, result) {
    if (err) {
        console.log("Cafe err!");
    }
    else {
        console.log(result);
        console.log(result[0].phone);
    }
})

const mainRouter=require("./routes/main");
app.use(mainRouter);

const IsCaffeineRouter=require("./routes/IsCaffeine");
app.use(IsCaffeineRouter);

const BeverageTypeRouter=require("./routes/BeverageType");
app.use(BeverageTypeRouter);

const hashRouter=require("./routes/hash");
app.use(hashRouter);

const ShowCafeRouter=require("./routes/ShowCafe");
app.use(ShowCafeRouter);

const AfterShowCafeRouter=require("./routes/AfterShowCafe");
app.use(AfterShowCafeRouter);


const AfterhashRouter=require("./routes/Afterhash");
app.use(AfterhashRouter);


app.listen(3000,function(req,res){
    console.log("connect to 3000 port!");
});
