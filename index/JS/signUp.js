// const btnClick = document.querySelectorAll("button[name = gender]");
const btnClick = document.querySelectorAll("input[name=gender]");

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

btnClick.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      btnClick.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});
