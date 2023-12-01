const genderBtn = document.querySelectorAll("input[name=gender]");
const languageBtn = document.querySelectorAll("input[name=language]");

// console.log(authNum);
// console.log(getTel);
// 텍스트를 누를때 쉐도우 효과
const TD = document.querySelectorAll("td");
TD.forEach((td) => {
  td.addEventListener("click", function () {
    if (!td.classList.contains("click")) {
      TD.forEach((button) => {
        button.classList.remove("click");
      });
      td.classList.add("click");
    }
  });
});

genderBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      genderBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});

languageBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      languageBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});
