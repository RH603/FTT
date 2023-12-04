function buyPopup() {
  window.open("buy1.html", "popup", "width=750,height=700");
}
function buyPopup2() {
  window.open("buy2.html", "popup", "width=750,height=700");
}
function buyPopup3() {
  window.open("buy3.html", "popup", "width=750,height=700");
}
function buyPopup4() {
  window.open("buy4.html", "popup", "width=750,height=700");
}
function buyPopup5() {
  window.open("buy5.html", "popup", "width=750,height=700");
}
function buyPopup6() {
  window.open("buy6.html", "popup", "width=750,height=700");
}

const price = document.querySelector(".price");
const card = document.querySelectorAll(".card");

card.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("selected")) {
      card.forEach((cd) => {
        cd.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});

window.onload = function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear().toString().slice(-2); // 연도의 끝 두 자리
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // 월을 두 자리로 만들기
  var day = ("0" + currentDate.getDate()).slice(-2); // 일을 두 자리로 만들기

  var formattedDate = year + "." + month + "." + day;

  document.getElementById("date").innerHTML = formattedDate;

  var futureDateAdd = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  ); // 현재 날짜에 30일을 더함

  var yearAdd = futureDateAdd.getFullYear();
  var monthAdd = ("0" + (futureDateAdd.getMonth() + 1)).slice(-2);
  var dayAdd = ("0" + futureDateAdd.getDate()).slice(-2);

  var formattedDateAdd = yearAdd + "." + monthAdd + "." + dayAdd;

  document.getElementById("dateAdd").innerHTML = formattedDateAdd;
};
var pastRadio = document.getElementById("past");
var notPastRadio = document.getElementById("notPast");

pastRadio.addEventListener("change", function () {
  document.querySelector(".show1").style.display = "block";
  document.querySelector(".show2").style.display = "none";
});

notPastRadio.addEventListener("change", function () {
  document.querySelector(".show1").style.display = "none";
  document.querySelector(".show2").style.display = "block";
});
