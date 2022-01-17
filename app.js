const express = require("express");
const http = require("http");
//const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const bodyparser=require("body-parser");

const app=express();
const router=express.Router();

app.use(express.static('client'));
app.use(logger());
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


const IsCaffeineRouter=require("./routes/IsCaffeine")
app.use('/',IsCaffeineRouter);

const BeverageTypeRouter=require("./routes/BeverageType");
app.use('/',BeverageTypeRouter);


app.listen(3000,function(req,res){
    console.log("connected 3000 port!");
});
