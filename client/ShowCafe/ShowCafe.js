const hash = document.querySelectorAll(".hashTag");
const selectHashTagList = [];
for (let i = 0; i < hash.length; i++) {
  hash[i].addEventListener("click", (event) => {
    if (event.target.className === "hashTag") {
      event.target.className += "Clicked";
      selectHashTagList.push(event.target.innerText);
    } else if (event.target.className === "hashTagClicked") {
      event.target.className = "hashTag";
      for (let j = 0; j < selectHashTagList.length; j++) {
        if (selectHashTagList[j] === event.target.innerText) {
          selectHashTagList.splice(j, 1);
        }
      }
    }
  });
}
const whatSelect = document.querySelector(".showWhatSelect");
const afterIsCaffeineNum = whatSelect.dataset.isCaffeine;
const selectMenu = whatSelect.dataset.menuData;
const selectButton = document.querySelector(".selectButton");
selectButton.onclick = function () {
  location.href = `/AfterHash?IsCaffeine=${afterIsCaffeineNum}&type=${selectMenu}&hashtag=${selectHashTagList}`;
};

const cafeSelect = document.querySelectorAll(".cafe");
for (let i = 0; i < cafeSelect.length; i++) {
  cafeSelect[i].addEventListener("click", (event) => {
    let cafeName = cafeSelect[i].id;
    location.href = `/AfterSelectCafe?IsCaffeine=${afterIsCaffeineNum}&type=${selectMenu}&CafeName=${cafeName}`;
  });
}