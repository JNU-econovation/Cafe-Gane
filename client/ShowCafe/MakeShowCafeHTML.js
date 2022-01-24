const makeShowCafeBodyHTML = function(whatSelect, hashTagList){
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
    ${hashTagList}
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
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
    <div class="cafe"></div>
  </div>
  <div class="showcafe">
    <div class="cafeImage">
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
      <img src="../image/noInformation.png" />
    </div>
  </div>
</div>
<img class="ShowCafefloor" src="../image/floor.png" />
  `
}

const makeHashTagList = function(hashTagList){
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
    )
    .join("")}
`;
}
const makeWhatSelectHTML=function(){
  const isCaffeineNum = sessionStorage.getItem("isCaffeineNum");
    const menu = sessionStorage.getItem("menu");
    const isCaffeine;
    if (isCaffeineNum === 1){
     isCaffeine = "카페인";
    }
    else{
     isCaffeine = "논카페인"
    }
    return `${isCaffeine}>${menu}`;
}

module.exports = {
  makeShowCafeBodyHTML, 
  makeHashTagList, 
  makeWhatSelectHTML
};
