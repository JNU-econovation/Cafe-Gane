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
  const result = ["꿀", "과일", "샤인머스켓", "ㅁㅇㄹ", "ㄴㄷㄱㄴ"];
  const cafeResult = [
    {
      address: "광주 북구 설죽로214번길 76",
      image:
        "https://cafeganeimagefile.s3.ap-northeast-2.amazonaws.com/cafe_image_one.jpg",
      menu_name: "바닐라라떼",
      phone: "010-4268-0919",
      price: "3500",
      store_name: "훼이보릿커피",
      time: "매일 11:00 – 21:00",
    },
    {
      address: "광주 북구 설죽로214번길 76",
      image:
        "https://cafeganeimagefile.s3.ap-northeast-2.amazonaws.com/cafe_image/cafe_image_two.jpg",
      menu_name: "바닐라카라멜라떼",
      phone: "010-4268-0919",
      price: "3500",
      store_name: "훼이보릿커피",
      time: "매일 11:00 – 21:00",
    },
    {
      address: "광주광역시 북구 용주로30번길 81",
      image:
        "https://cafeganeimagefile.s3.ap-northeast-2.amazonaws.com/cafe_image_one.jpg",
      menu_name: "바닐라 라떼",
      phone: "062-525-7755",
      price: "3800",
      store_name: "비티씨",
      time: "평일 9:00 - 22:00 주말 12:00 – 22:00",
    },
  ];
  const select = {
    address: "광주광역시 북구 용주로30번길 81",
    image:
      "https://cafeganeimagefile.s3.ap-northeast-2.amazonaws.com/cafe_image_one.jpg",
    menu_name: "바닐라 라떼",
    phone: "062-525-7755",
    price: "3800",
    store_name: "비티씨",
    time: "평일 9:00 - 22:00 주말 12:00 – 22:00",
  };

  const hashTagList = template.makeHashTagListHTML(result);
  const whatSelect = template.makeWhatSelectHTML(1, "아메리카노");
  const cafeList = template.makeCafeListHTML(cafeResult);
  const selectCafe = template.makeSelectCafeHTML(select);
  const showCafeBody = template.makeShowCafeBodyHTML(
    whatSelect,
    hashTagList,
    cafeList,
    selectCafe
  );
  const showCafe = template.makeBodyHTML(showCafeBody);

  res.send(showCafe);
});

app.listen(3000, function (req, res) {
  console.log("connected");
});
