const genderBtn = document.querySelectorAll("input[name=gender]");
const languageBtn = document.querySelectorAll("input[name=language]");
// const pClick = document.querySelector("#click");
// const modalPage = document.querySelector(".modal-page");
// const modalClose = document.querySelector(".modal-close");
// const modalBack = document.querySelector(".modal-back");
// btnClick.forEach((el) => {
//   el.addEventListener("click", function () {
//     console.log(el.classList.contains("selected"));
//     if (el.classList.contains("selected")) {
//       el.classList.remove("selected");
//     } else {
//       el.classList.add("selected");
//     }
//   });
// });

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
