var express=require('express');
var router=express.Router();

//client 파일이랑 연결
const total=require("../client/total.js");

//mysql연결
var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);

/*
http://localhost:3000/querystring?id=1
app.get('/querystring', function(req, res){
    res.send(req.query.id);
});

<해시태그 선택전>
localhost:3000/BeforeHash?type=라떼
문자열로 받은 걸-> array에 넣어야 함
*/
//next()

//해시태그 보내기
router.get('/Beforehash',function(req,res){
    let IsCaffeineNum=req.query.IsCaffeineNum;
    let type=req.query.type;
    let TypeSend="SELECT distinct hash.name \
                FROM cafe.hash \
                INNER JOIN hash_has_menu ON hash.id=hash_has_menu.hash_id \
                INNER JOIN cafe.menu ON menu.id=hash_has_menu.menu_id\
                WHERE menu.isCaffein=? and menu.type=?";
    let params=[IsCaffeineNum,type];
    conn.query(CafeSort,params,function(err,result){
        if(err)
        {
            console.log("HashTag send error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.type);//"수박,바나나,딸기"
            }
                
                //<client>함수랑 연결
        }
    })
    next();
});

//해당하는 음료 보내기
router.get('/Beforehash',function(req,res){//url확인하고 변경하기
    var IsCaffeineNum=req.query.IsCaffeineNum;
    var type=req.query.type;


   let CafeSort="SELECT menu.menu,menu.price,store.name,store.address,store.time,store.phone,store.image\
               FROM cafe.hash \
               INNER JOIN hash_has_menu \
               ON hash.id=hash_has_menu.hash_id\
               INNER JOIN cafe.menu\
               ON menu.id=hash_has_menu.menu_id\
               INNER JOIN cafe.store\
               ON store.id=menu.store_id\
               WHERE menu.isCaffein=? and menu.type=?\
               ORDER BY menu.price";


    conn.query(CafeSort,IsCaffeineNum,function(err,result){
    if(err)
    {
                console.log("Before hash error!");
    }else{
        var datalist=[];
        for(var data of result){
            datalist.push(data);//어떻게 보내지는지 확인하기
        }
            
            //<client>함수랑 연결

    }
})
});


