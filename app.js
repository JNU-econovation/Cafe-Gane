var express=require('express');
var morgan=require('morgan')
var bodyparser=require('body-parser');
var app=express();

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');


app.post('/email_post',function(req,res){
    console.log("req.body");
    res.send("<hi>welcone!"+req.body.email+"</hi>");
})

var p1=require('./routes/p1.js');
app.use('/p1',p1);

var p2=require('./routes/p2.js');
app.use('/p2',p2);



app.use(function(req,res,next){
    response.status(404).send('sorry');
})

app.listen(3000,function(req,res){
    console.log("connected");
});

