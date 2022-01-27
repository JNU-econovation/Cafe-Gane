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
//AfterHash?IsCaffeine=0&menu=주스&hashtag="케일,허브"
router.get('/Afterhash',function(req,res){

    let IsCaffeineNum=req.query.IsCaffeine;
    let menu=req.query.type;
    let hash=req.query.hashtag;
    let arr_hash=hash.split(",");
    let hashjoin=arr_hash.map(item=>`"${item}"`).join(",");
    let selectCafe=req.query.CafeNum;

    let hashTagSend="SELECT distinct hash.name \
    FROM cafe.hash \
    INNER JOIN hash_has_menu ON hash.id=hash_has_menu.hash_id \
    INNER JOIN cafe.menu ON menu.id=hash_has_menu.menu_id\
    WHERE menu.isCaffein=? and menu.type='menu'";

    conn.query(hashTagSend, [IsCaffeineNum, menu], function (err, result) {
        if (err) {
            console.log("After : HashTag send error!");
        } else {
            let hashtaglist = [];
            for (let data of result) {
                hashtaglist.push(data.name);//"수박,바나나,딸기"
            }
            const hashTagList = total.makeHashTagListHTML(hashtaglist);
            const whatSelect = total.makeWhatSelectHTML(IsCaffeineNum, menu);
            //해시태그 보냄

            let CafeSort="SELECT menu.menu_name, menu.price, store.store_name, store.address, store.time, store.phone, store.image \
            FROM cafe.hash \
            INNER JOIN hash_has_menu \
            ON hash.id=hash_has_menu.hash_id \
            INNER JOIN cafe.menu \
            ON menu.id=hash_has_menu.menu_id \
            INNER JOIN cafe.store \
            ON store.id=menu.store_id \
            WHERE menu.isCaffein=? and menu.type=? and hash.name IN (";
            CafeSort+=hashjoin;
            CafeSort+=") ";
            CafeSort+="ORDER BY menu.price"; 

            conn.query(CafeSort, [IsCaffeineNum, menu], function (err, result) {
                if (err) {
                    console.log("After : Cafe send error!")
                } else {
                    const cafeList = total.makeCafeListHTML(result);
                    let Cafe="SELECT menu.menu_name, menu.price, store.store_name, store.address, store.time, store.phone, store.image \
                            FROM cafe.menu \
                            INNER JOIN cafe.store \
                            ON menu.store_id=store.id \
                            WHERE store.store_name=?";

                    conn.query(Cafe,selectCafe,function(err,select){
                        if(err)
                        {
                            console.log("select Cafe Error!");
                        }
                        else{
                            const selectCafe = total.makeSelectCafeHTML(select);
                            const showCafeBody = total.makeShowCafeBodyHTML(
                                whatSelect,
                                hashTagList,
                                cafeList,
                                selectCafe
                            );
                            const showCafe = total.makeBodyHTML(showCafeBody);
                            res.send(showCafe);
                        }
                    })

                }
            })

    };
});

})
module.exports=router;