const { makeMenuListHTML, makeMenuBodyHTML } = require("../client/Menu/MakeMenuHTML.js");
const { makeShowCafeBodyHTML, makeHashTagList, makeWhatSelectHTML } = require("../client/ShowCafe/MakeShowCafeHTML.js");


module.exports = {
  makeMenuListHTML,
  makeMenuBodyHTML,
  makeShowCafeBodyHTML,
  makeHashTagList,
  makeWhatSelectHTML,
  makeBodyHTML: function (body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>카페가네</title>
      <link href="../Menu/Menu.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
      <script src="../Menu/Menu.js></script>
      <script src="../ShowCafe/ShowCafe.js></script>
    </head>
    <body>
      ${body}
    </body>
    </html>
    `;
  },
  makeShowCafeHTML: function (whatSelect, change) {
    return `
        <div class="header">
          <div onclick="location.href='/'">
            <img class="mainlogo" src="../image/mainlogo.png" />
          </div>
        </div>
        <div class="showbar">
          <img
            class="backward"
            src=" ../image/backward.png"
            onclick="location.href='/IsCaffeine=${sessionStorage.getItem(
      "IsCaffeine"
    )}}'"
            height="20px"
          />
          <div class="showWhatSelect">${whatSelect}</div>
        </div>
        <div class="detail">
          <div
            style="
              color: #564a41;
              font-size: 18px;
              font-weight: 500;
              margin-top: 1%;
            "
          >
            추가 세부설정
          </div>
          <div style="color: #707070; font-size: 15px; margin-bottom: 1%">
            부가적인 설정으로 나만의 음료를 즐겨보세요!
          </div>
          <div class="hashTagContent">
            ${change}
            <br />
            <div class="selectButton">맞춤카페 찾기</div>
          </div>
        </div>
        <div class="maincontent">
          <div class="cafelist" style="overflow: auto">
            <div class="cafe">
              <div class="cafeImage"></div>
              <div class="textcontent"></div>
            </div>
          </div>
          <div class="showcafe"></div>
        </div>
        <div class="bottombar"></div> 
    `;
  },

};
