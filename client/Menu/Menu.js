const menu = document.querySelectorAll(".menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (event) => {
    sessionStorage.setItem("menu", event.target.textContent);
  });
}
