var express=require('express');
var router=express.Router();

//client 파일이랑 연결
const total=require("../client/total.js");

//mysql연결
var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);


//SELECT * FROM `goods` WHERE `category` IN('가전제품', '음료수')
//해시태그 선택 이후
router.get('/Afterhash',function(req,res){//url확인하고 변경하기
    var IsCaffeineNum=req.query.IsCaffeineNum;
    var type=req.query.type;
    var hash=req.query.hash;//해시태그 문자열로 받음
    var arr_hash=str.split(",");//해시태그 배열에 넣음

    let CafeSort="SELECT menu.menu_name,menu.price,store.store_name,store.address,store.time,store.phone,store.image\
    FROM cafe.hash \
    INNER JOIN hash_has_menu \
    ON hash.id=hash_has_menu.hash_id\
    INNER JOIN cafe.menu\
    ON menu.id=hash_has_menu.menu_id\
    INNER JOIN cafe.store\
    ON store.id=menu.store_id\
    WHERE menu.isCaffein=? and menu.type=? and hash.name IN (";
    CafeSort+=arr_hash.join();
    CafeSort+=")";
    CafeSort+="ORDER BY menu.price";   

    conn.query(CafeSort,function(err,result){
        if(err){
            console.log("app.js mysql error!");
        }
        else{
            //front랑 연결하기 
            console.log(result);
        }
    });


/*
SELECT * FROM cafe.menu;
WEHRE price in (2000,3000);

SELECT * FROM cafe.menu;
WHERE (price=2000) OR (price=3000);
*/
})


//특정 카페의 상세 정보
//url변경 안하고 하는 법 알아보기
router.get('/ShowCafe/:id',function(req,res){
    var ShowCafe='SELECT name,address,time,phone FROM cafe.store WHERE id=?';
    var StoreId=req.query.id;
    connection.query(ShowCafe,StoreId,function(req,res){
        res.render('CafeShow',{Cafe:ShowCafe});
    })
});

module.exports=router;

