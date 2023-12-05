const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");


for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    // Create a new image element
    const clickedImg = document.createElement("img");
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video")
    const videoDT = $("<video>")
    .attr("src", videoData[i].url)
    .attr("alt", "");
    imageContainer.append(videoDT)
    clickedImg.src = images[i].src;
    console.log(videoDT);
    clickedImage.src = videoData[i];
    // Clear the modal content before appending a new image
    modalImg.innerHTML = "";

    // Append the clicked image to the modal
    // modalImg.appendChild(clickedImg).classList.add("modal-img");
    clickedVideo.classList.add("modal-video");
    clickedImage.autoplay = true
    clickedImage.controls = true

    // Display the modal
    modalImgBack.style.display = "block";
    document.querySelector("video").style.display= "block"
  });
}

modalImgBack.addEventListener("click", () => {
  modalImgBack.style.display = "none";
});
