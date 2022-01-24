const { makeHashTagHTML } = require("../total");

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
sessionStorage.setItem("hashTag", selectHashTagList);
console.log(sessionStorage.getItem("hashTag"));

const select = document.querySelector(".selectButton");
select.onclick = function () {
  sessionStorage.setItem("hashTag", selectHashTagList);
};
