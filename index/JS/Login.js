const pClick = document.querySelector("#click");
const modalPage = document.querySelector(".modal-page");
const modalClose = document.querySelector(".modal-close");
const modalBack = document.querySelector(".modal-back");

pClick.addEventListener("click", function () {
  modalPage.classList.add("selected");
  modalBack.classList.add("selected");
});

modalClose.addEventListener("click", function () {
  modalPage.classList.remove("selected");
  modalBack.classList.remove("selected");
});
