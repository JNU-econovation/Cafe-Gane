var express=require('express');
var router=express.Router();

const total = require("../client/total.js");

var mysqlConnection=require("../model/database.js");
const Connection = require('mysql/lib/Connection');
var conn=mysqlConnection.init();
mysqlConnection.open(conn);


router.get('/AfterSelectCafe',function(req,res){
    let IsCaffeineNum=req.query.IsCaffeine;
    let menu=req.query.type;
    let hashTagSend="SELECT distinct hash.name \
    FROM cafe.hash \
    INNER JOIN hash_has_menu ON hash.id=hash_has_menu.hash_id \
    INNER JOIN cafe.menu ON menu.id=hash_has_menu.menu_id \
    WHERE menu.isCaffein=? and menu.type=?";

    conn.query(hashTagSend,[IsCaffeineNum, menu], function (err, result) {
        if (err) {
            console.log("HashTag send error!");
        } else {
            var datalist = [];
            for (var data of result) {
                datalist.push(data.name);//"수박,바나나,딸기"
            }
            const hashTagList = total.makeHashTagListHTML(datalist);
            const whatSelect = total.makeWhatSelectHTML(IsCaffeineNum, menu);

            let CafeSort="SELECT menu.menu_name,menu.price,store.store_name,store.address,store.time,store.phone,store.image \
            FROM cafe.menu \
            INNER JOIN cafe.store \
            ON store.id=menu.store_id \
            WHERE menu.isCaffein=? and menu.type=? \
            ORDER BY menu.price";

            conn.query(CafeSort,[IsCaffeineNum,menu],function(err,result){
                if(err)
                {
                    console.log("Cafe send error!");
                }
                const cafeList = total.makeCafeListHTML(result);
                let CafeName = req.query.CafeName;
                let Cafe = "SELECT store.store_name,store.address,store.time,store.phone,store.image FROM cafe.store WHERE store_name=?";
                conn.query(Cafe, CafeName, function (err, result) {
                    if (err) {
                        console.log(Cafe);
                    }
                    const AfterSelectCafe = total.makeSelectCafeHTML(result)
                    const showCafeBody = total.makeShowCafeBodyHTML(
    
                        IsCaffeineNum,
                        whatSelect,
                        hashTagList,
                        cafeList,
                        AfterSelectCafe
    
                    );
                    const showCafe = total.makeBodyHTML(showCafeBody);
                    res.send(showCafe);
                })
            })
        }
    })
})

module.exports=router;