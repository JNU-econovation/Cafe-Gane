const makeShowCafeBodyHTML = function (whatSelect, hashTagList, cafeList) {
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
    onclick="location.href='../Menu/Menu.html'"
    height="20px"
  />
 ${whatSelect}
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
    ${hashTagList}
    <br />
    <div class="selectButton">맞춤카페 찾기</div>
  </div>
</div>
<div class="maincontent">
  <div class="cafeList" style="overflow: auto">
    <div class="settingBox"></div>
    ${cafeList}
  </div>
  <div class="showCafe">
    <div class="cafeInformation">
      <div class="cafeImageLarge">
        <img src="../image/noInformation.png" />
      </div>
    </div>
  </div>
</div>
<img class="ShowCafefloor" src="../image/floor.png" />
  `;
};

const makeCafeListHTML = function (cafeList) {
  return `
  ${cafeList
    .map(
      (list) =>
        "<div class='cafe'>" +
        "<div class='cafeImageContent'>" +
        "<img class='cafeImageSmall' src='" +
        list.image +
        "'></div>" +
        "<div class='cafeTextContent'>" +
        "<div class='cafeName'>" +
        list.store_name +
        "</div>" +
        "<div class='cafeMenu'>" +
        list.menu_name +
        "</div>" +
        "<div class='cafePrice'>" +
        list.price +
        "원" +
        "</div></div></div>"
    )
    .join("")}
  `;
};

const makeHashTagList = function (hashTagList) {
  return `
  ${hashTagList
    .map(
      (list) =>
        "<div class='hashTag' id='" +
        list +
        "style='cursor:pointer'>" +
        list +
        "</div>"
    )
    .join("")}
`;
};
const makeWhatSelectHTML = function (isCaffeineNum, menu) {
  let isCaffeine = "Caffeine";
  if (isCaffeineNum === 1) {
    isCaffeine = "카페인";
  } else {
    isCaffeine = "논카페인";
  }
  return (
    `<div class='showWhatSelect' data-is-caffeine=${isCaffeineNum} data-menu-data=${menu}>
  ${isCaffeine} > 
  ${menu}` + "</div>"
  );
};

module.exports = {
  makeShowCafeBodyHTML,
  makeHashTagList,
  makeCafeListHTML,
  makeWhatSelectHTML,
};
