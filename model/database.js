const mysql = require("mysql");
const mysqlConnection ={
  init:function(){
    return mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "sumin",
      password: "pan485100!",
      database: "cafe"
    });
  },
open:function(conn){
  conn.connect(function(err){
    if(err){
      console.error('MYSQL connection failed');
      console.error('Error Code'+err.code);
      console.error('Error Message:'+err.message);
    }else{
      console.log("MYSQL connection successful");
    }
  });
}
,
close:function(conn){
  conn.end(function(err){
    if(err){
      console.error('MYSQL connection failed');
      console.error('Error Code'+err.code);
      console.error('Error Message:'+err.message);
    }else{
      console.log("MYSQL connection successful");
    }
   });
  }
};

module.exports=mysqlConnection;

