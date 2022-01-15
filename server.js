const express = require("express");
const app = express();

/*'app.get("cafecane.com/caffeineMenu/", (req, res) => {
  const hashTagHTML = makeHashTagHTML(hashTagList);
  const makeShowCafeHTML = makeShowCafeHTML(hashTagHTML);
  const makeBodyHTML = makeBodyHTML(makeShowCafeHTML);

  res.send(makeBodyHTML);
});

app.get("cafecane.com/coffeeMenu/:hashTag", (req, res) => {
  const hashTag = req.params.hashTag;
  db.query();
  const hashTagHTML = makeHashTagHTML(hashTagList);
  const makeShowCafeHTML = makeShowCafeHTML(hashTagHTML);
  const makeBodyHTML = makeBodyHTML(makeShowCafeHTML);

  res.send(makeBodyHTML);
});*/

app.get("/caffeineMenu/", (req, res) => {
  const caffeinList = ["아메리카노", "카페라떼"];
  const caffeineListHTML = makeCaffeineListHTML(caffeineList);
  const menubodyHTML = makeMenuHTML(caffeineListHTML);
  const menuHTML = makeHTML(menubodyHTML);

  res.send(menuHTML);
});
