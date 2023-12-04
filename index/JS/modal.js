const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    alert("click");
    // Create a new image element
    const clickedImg = document.createElement("img");
    clickedImg.src = images[i].src;
    console.log(images[i].src);

    // Clear the modal content before appending a new image
    modalImg.innerHTML = "";

    // Append the clicked image to the modal
    modalImg.appendChild(clickedImg).classList.add("modal-img");

    // Display the modal
    modalImgBack.style.display = "block";
  });
}

modalImgBack.addEventListener("click", () => {
  modalImgBack.style.display = "none";
});
