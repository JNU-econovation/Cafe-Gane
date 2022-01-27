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
*/

//해시태그 선택전-> 해시태그랑 카페정보 보내기
router.get('/BeforeHash',function(req,res){
    let IsCaffeineNum=req.query.IsCaffeine;
    let menu=req.query.menu;
    //해시태그
    let hashTagSend="SELECT distinct hash.name \
                FROM cafe.hash \
                INNER JOIN hash_has_menu ON hash.id=hash_has_menu.hash_id \
                INNER JOIN cafe.menu ON menu.id=hash_has_menu.menu_id \
                WHERE menu.isCaffein=? and menu.type=?";

    conn.query(hashTagSend,[IsCaffeineNum,menu],function(err,result){
        if(err)
        {
            console.log("HashTag send error!");
        }else{
            var datalist=[];
            for(var data of result){
                datalist.push(data.name);//"수박,바나나,딸기"
            }
            const hashTagList = total.makeHashTagListHTML(datalist);
            //해시태그 넘겨주기
            const whatSelect = total.makeWhatSelectHTML(IsCaffeineNum,menu);
            
            let CafeSort="SELECT menu.menu_name,menu.price,store.store_name,store.address,store.time,store.phone,store.image \
               FROM cafe.hash \
               INNER JOIN hash_has_menu \
               ON hash.id=hash_has_menu.hash_id \
               INNER JOIN cafe.menu \
               ON menu.id=hash_has_menu.menu_id \
               INNER JOIN cafe.store \
               ON store.id=menu.store_id \
               WHERE menu.isCaffein=? and menu.type=? \
               ORDER BY menu.price";

            conn.query(CafeSort,[IsCaffeineNum,menu],function(err,result){
                if(err)
                {
                    console.log("Cafe send error!")
                }else{

                    const cafeList = total.makeCafeListHTML(result);
                    const beforeSelct=total.makeBeforeSelectCafeHTML();
                    const showCafeBody = total.makeShowCafeBodyHTML(
                    IsCaffeineNum,
                    whatSelect,
                    hashTagList,
                    cafeList,
                    beforeSelct

                    );
                    const showBeforeSelectCafe=total.makeBodyHTML(showCafeBody);
                    
                    res.send(showBeforeSelectCafe);
                }
            })
        }

    })

});

module.exports=router;