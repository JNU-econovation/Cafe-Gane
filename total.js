module.exports = {
  makeHTML: function (body) {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="../selectCaffeinePage/selectCaffeinePage.css" rel="stylesheet">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
          <title>카페가네</title>
          <body>
          ${body}
          </body>
        </head>
        <body>
        </body>
      </html>
    `;
  },
  makeMenuHTML: function (list) {
    return `
    <div class="header">
    <a href="../startPage/startPage.html">
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


    `;
  },
  makeShowCafeHTML: function (change) {
    return `
    <div class="header">
    <a href="../Start/Start.html">
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
  makeNonCaffeineListHTML: function (noncaffeineList) {
    return `
    ${noncaffeineList.map(
      (noncaffeine) =>
        "<span>" +
        "<a href=" +
        `/${noncaffeine}?noncaffeine=${noncaffeine}>` +
        `${noncaffeine}</a></span>`
    )}
  `;
  },
  makeCaffeineListHTML: function (caffeineList) {
    //115번째줄 caffeine과 같아야 하는지 달라야 하는지 생각하기
    //caffeineList 수민이한테 넘겨 받기
    //아마 수민이가 const caffeineList=["아메리카노", "카페라떼",,,,]
    //이거 아메리카노를 1, 카페라데를 2 라고 할거면 어떻게 해야할까?
    //이런식으로 넘겨주겠지?
    //const hashTagClicked = ""; 재현오빠한테 이건 뭐냐고 물어보기
    return `
    ${caffeineList.map(
      (caffeine) =>
        "<span>" +
        "<a href=" +
        `/${caffeine}?caffeine=${caffeine}>` +
        `${caffeine}</a></span>`
      //앵커를 어떻게 내려야 하나?? ShowCafe/Americano?선택한 해시태그?
      //그렇다면 여기는 `/ShowCafe/${Americano}` 라고 되어야 하는거 아닐까?
      //아메리카노를 클릭할 경우 <span><a href="/americano?caffeine=1>" or local.host3000/caffeine/americano
    )}
  `;
  },
  showWhatSelectHTML: function (Iscaffeine, Menu) {
    //이전에 선택한 값들을 어떻게 기억하고 있느냐??
    return `${Iscaffeine}` + ">" + `${Menu}`;
  },

  makeHashTagHTML: function (hashTagList) {
    return `
    ${hashTagList.map(
      (hashTag) =>
        "<span>" +
        "<a href=" +
        `cafecane.com/caffeineMenu?hashTag=${hashTag}>` +
        //여기서 caffeineMenu는 계속 바뀌는거 아닌가? 그럼 이것 또한 변수로?
        `${hashTag}</a></span>`
    )}
  `;
  },
};
