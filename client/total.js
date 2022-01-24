module.exports = {
  
  makeShowCafeHTML: function (whatSelect,change) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>카페가네</title>
        <link href="./ShowCafe.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap"
          rel="stylesheet"
        />
        <script src="../ShowCafe/ShowCafe.js"></script>
      </head>
    
      <body>
        <div class="header">
          <div onclick="location.href='/'">
            <img class="mainlogo" src="../image/mainlogo.png" />
          </div>
        </div>
        <div class="showbar">
          <img
            class="backward"
            src=" ../image/backward.png"
            onclick="location.href='/IsCaffeine=${sessionStorage.getItem("IsCaffeine")}}'"
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
      </body>
    </html>
    
    `;
  },

  makeRememberMenuHTML: function (menuList) {
    return `
    ${menuList
      .map(
        (list) =>
          "<script>" +
          "let menu" +
          list +
          "= document.querySelector('#" +
          list +
          "'); " +
          "menu" +
          list +
          ".onclick=function(){" +
          "sessionStorage.setItem('menu', event.target.textContent);" +
          "}" +
          "</script>"
      )
      .join("")}
  `;
  },
  makeMenuListHTML: function (menuList) {
    return `
    ${menuList
      .map(
        (list) =>
          "<a class='menu' id='" +
          list +
          "' href=" +
          "/BeforeHash?IsCaffeine="+
          sessionStorage.getItem("isCaffeineNum")+
          "&type=" +
          list +
          ">" +
          list +
          "</a>"
      )
      .join("")}
  `;
  // /BeforeHash?IsCaffeine=1&type=아메리카노
  // /AfterHash?IsCaffeine=1&type=아메리카ㅌ노&hash=꿀, 헤이즐넛
 
  },
  makeWhatSelectHTML: function () {
    const isCaffeineNum = sessionStorage.getItem("isCaffeineNum");
    const menu = sessionStorage.getItem("menu");
    const isCaffeine;
    if (isCaffeineNum === 1){
     isCaffeine = "카페인";
    }
    else{
     isCaffeine = "논카페인"
    }
   
    return `${isCaffeine}` + ">" + `${menu}`;
  },

  makeHashTagHTML: function (hashTagList) {
    return `
    ${hashTagList
      .map(
        (list) =>
          "<a class='hashTag' id='" +
          list +
          "' href=" +
          "/" +
          list +
          "style='cursor:pointer'>" +
          list +
          "</a>"
        //const whatSelect = document.querySelector(".menu")
        //whatSelect.addEventListener('click',makeWhatSelectListHTML)
      )
      .join("")}
  `;
  },
};
