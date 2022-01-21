module.exports = {
  makeWhatSelectListHTML: function (select) {
    let whatSelect = [1];
    whatSelect = [];
    whatSelect.push(select);
  },
  makeStartHTML: function () {
    return `
    <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>카페가네</title>
        <link href="../Start/Start.css" rel="stylesheet">
        <script src="../Start/fullpage.min.js"></script>
        <script src="../Start/Fullpage1.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      </head>
      
      <body>
        <div class="header">
          <a href="/">
            <img class="mainlogo" src="../image/mainlogo.png">
          </a>
        </div>
        <div id="full-page">
      
      
          <div class="section s0">
            <div class="content">
            <div class="wrap">
              <p id="dynamic" class="lg-text">
              </p>
              <p class="sm-text">
                당신에게 카페를 선물합니다.
              </p>
            
              <div class="startback">
                <span class="start">
                  <a href="/IsCaffeine" style="text-decoration: none; color: white;">
                    START
                  </a>
      
                </span>
              </div>
              
            </div>
            
              <img class="illustrate" src="../image/mainillustrate.png" >
        
          </div>
          </div>
      
          <div class="section s1">
            <h2>
              카페가네 기획 소개
            </h2>
            <h3>
              음료를 기반으로 카페를 찾아주는 웹페이지
            </h3>
          </div>
      
          <div class="section s2">
            <h2>
              김가네 소개
            </h2>
          </div>
      
        </div>
      
        <script src="../Start/Fullpage1.js">
        </script>
        <script>
          new fullpage('#full-page', {
            licenseKey: '',
            sectionsColor: ['rgb(173, 162, 152)', 'rgb(87, 74, 65)', 'rgb(125, 121, 118)'],
            navigation: true,
            navigationTooltips: ['StartPage', 'About', 'About2'],
            scrollingSpeed: 1500,
            onLeave: function (origin, destination, direction) {
              if (origin.index == 1) {
                $('.s1 h3').hide();
              }
            },
            afterLoad: function (origin, destination, direction) {
              if (destination.index == 1) {
                $('.s1 h3').show();
              }
            }
          });
        </script>
      </body>
  
  </html>
    `;
  },
  //인장에 num을 넣어서 caffeine은 1 noncaffeine은 0으로 하고 싶은데...
  //감이 잘 안잡힌다
  makeIsCaffeineHTML: function () {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>카페가네</title>
  <link href="../IsCaffeine/IsCaffeine.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
  </script>
</head>

<body>
  <div class="header">
    <a href="/" style="text-decoration: none; color: white">
      <img class="mainlogo" src="../image/mainlogo.png">
    </a>
  </div>
  <div class="startbar">
    <span class="start">
      맞춤형 CAFE 찾기, Start!
    </span>
  </div>

  <div class="selectContent">
    <div class="selectwordKR">
      <span style="background-color: #ffa455;"><strong>카페인 여부</strong></span>를 선택해주세요
      <hr style="border: 0.5px solid black; margin:0.5% auto" width="480px">
    </div>
    <div class="selectwordEN">
      Please choose caffeine or not
    </div>
    <div class="caffeineButton">
      <a href="/Iscaffeine=1">
        <img class="caffeine" src="../image/caffeine.png" >
      </a>
      <a href="/Iscaffeine=0">
        <img class="noncaffeine" src="../image/noncaffeine.png">
      </a>
    </div>
  </div>

  <div class="bottombar">

  </div>


</body>

</html>
    `;
  },
  makeMenuHTML: function (list) {
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
      </script>
    </head>
    
    <body>
      <div class="header">
        <a href="/">
          <img class="mainlogo" src="../image/mainlogo.png">
        </a>
      </div>
      <div class="startbar">
        <span class="start">
          맞춤형 CAFE 찾기, Start!
        </span>
      </div>
    
      <div class="selectContent">
        <div class="selectwordKR">
          <span style="background-color: #ffa455;"><strong>음료</strong></span>를 선택해주세요
          <hr style="border: 0.5px solid black; margin:0.5% auto" width="400px">
        </div>
        <div class="selectwordEN">
          Please choose beverage
        </div>
        <div class="beverageName">
  
        ${list}
    
          
    
        </div>
    
    
      </div>
    
      <div class="bottombar">
    
      </div>
    
    
    </body>
    
    </html>
    `;
  },
  makeShowCafeHTML: function (change) {
    return `
    <div class="header">
    <a href="/">
      <img class="mainlogo" src="../image/mainlogo.png">
    </a>
  </div>
  <div class="showbar">
    <span class="showWhatSelect">
      카페인 > 아메리카노
    </span>
  </div>
  <div class="detail">
    <p style="color: #564a41; font-size: 18px; font-weight: 500;">추가 세부설정</p>
    <p style="color: #707070;  font-size: 15px;">부가적인 설정으로 나만의 음료를 즐겨보세요!</p>
    <div class="hashtag">
   ${change}
    </div>
  </div>
  <div class="maincontent">
    <div class="cafelist" style="overflow:scroll">
      <div class="cafe">adsfasdfa</div>
      <div class="cafe">adsfasdf</div>
      

    </div>
    <div class="showcafe">

    </div>
  </div>

  <div class="bottombar">

  </div>
    `;
  },
  //nonCaffeineListHTML도 만들어야 할까? 하나로 해결할 순 없을까?
  makeNonCaffeineListHTML: function (nonCaffeineList) {
    return `
    ${nonCaffeineList.map(
      (nonCaffeine) =>
        "<a class='menu' href=" +
        `"/${nonCaffeine}">` +
        `${nonCaffeine}` +
        "</a>"
      //const whatSelect = document.querySelector(".menu")
      //whatSelect.addEventListener('click',makeWhatSelectListHTML)
    )}
  `;

    //내가 /iscaffeine=1`/${}~~~이런식으로 넘겨줘야 하는지 그냥 저렇게만 넘겨주면 이어지는 건지
  },
  makeCaffeineListHTML: function (caffeineList) {
    return `
    ${caffeineList
      .map(
        (caffeine) =>
          "<a class='menu' href=" +
          `"/type={${caffeine}}">` +
          `${caffeine}` +
          "</a>"
      )
      .join("")}
  `;
  },

  makeWhatSelectHTML: function (Iscaffeine, Menu) {
    //이전에 선택한 값들을 어떻게 기억하고 있느냐??
    //https://seunghunchan.tistory.com/9
    return `${Iscaffeine}` + ">" + `${Menu}`;
  },

  makeHashTagHTML: function (hashTagList) {
    return `
    ${hashTagList.map(
      (hashTagList) =>
        "<a href=" +
        `"/${hashTagList}">` +
        "<div class='menu'>" +
        `${hashTagList}` +
        "</div></a>"
    )}
  `;
  },
};