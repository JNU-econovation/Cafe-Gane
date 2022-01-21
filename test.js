var template = require("./client/total.js");
var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("client"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const result = [
    "에스프레소",
    "아메리카노",
    "라떼",
    "카푸치노",
    "카페모카",
    "시그니처",
    "아인슈페너",
    "더치/드립커피",
    "플랫화이트",
    "콜드브루",
    "프라페/쉐이크",
  ];

  const hasListHTML = template.makeHashTagHTML(result);
  const rememberMenuHTML = template.makeRememberMenuHTML(result);
  const showCafeHTML = template.makeShowCafeHTML(hasListHTML);
  //1= const isCaffeineNum
  res.send(showCafeHTML);
});

app.listen(3000, function (req, res) {
  console.log("connected");
});
