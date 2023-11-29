const pClick = document.querySelector("#click");
const modalPage = document.querySelector(".modal-page");
const modalClose = document.querySelector(".modal-close");
const modalBack = document.querySelector(".modal-back");

pClick.addEventListener("click", function () {
  modalBack.style.display = "block"
});

modalClose.addEventListener("click", function () {

  modalBack.style.display = "none"
});
