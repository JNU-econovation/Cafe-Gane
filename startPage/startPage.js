let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "아메리카노만 마시는 당신에게",
    "시그니처 음료를 찾는 당신에게",
    "원두를 선택하고 싶은 당신에게",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

//typing reset
function resetTyping() {
  target.textContent = " ";
  dynamic(randomString());
}

//한글자씩 text 출력
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

//커서 깜빡힘 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
