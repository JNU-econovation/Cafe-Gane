const menu = document.querySelectorAll(".menu");
const menuList = document.querySelector("#menuList");
const isCaffeineNum = menuList.dataset.isCaffeine;

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (event) => {
    location.href = `/BeforeHash?IsCaffeine=${isCaffeineNum}&${event.target.textContent}`;
  });
}
