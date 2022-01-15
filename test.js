var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  console.log("req.body");
  const html = "<b>html</b>";
  res.send(html);
});

app.listen(3000, function (req, res) {
  console.log("connected");
});
