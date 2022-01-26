const makeMenuListHTML = function (menuList) {
  return `
  ${menuList
    .map(
      (list) =>
        "<div class='menu' id='" +
        list +
        "' style='cursor:pointer'>" +
        list +
        "</div>"
    )
    .join("")}
`;
  // /BeforeHash?IsCaffeine=1&type=아메리카노
  //AfterHash?IsCaffeine=1&type=아메리카노&hash="꿀, 헤이넛"
};

const makeMenuBodyHTML = function (menuList, isCaffeineNum) {
  return ` 
  <div class="header">
  <div onclick="location.href='/'">
    <img class="mainlogo" src="../image/mainlogo.png">
  </div>
</div>
<div class="startbar">
  <img
  class="backward"
  src=" ../image/backward.png"
  onclick="location.href='/IsCaffeine'"
  height="20px"
/>
  <div class="start">
    맞춤형 CAFE 찾기, Start!
  </div>
</div>

<div class="selectContent">
  <div class="selectwordKR" >
    <span style="background-color: #ffa455;"><strong>음료</strong></span>를 선택해주세요
    <hr style="border: 0.5px solid black; margin:0.5% auto" width="400px">
  </div>
  <div class="selectwordEN">
    Please choose beverage
  </div>
  <div class="beverageName${isCaffeineNum}" id="menuList" data-is-caffeine=${isCaffeineNum}>
    ${menuList}
  </div>
  <img class="floor" src="../image/floor.png" />

  </div>
  
</div>
  `;
};
module.exports = {
  makeMenuListHTML,
  makeMenuBodyHTML,
};
