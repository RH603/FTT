const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const videos = document.querySelectorAll("video");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        displayVideo(i);
    });
}

for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", () => {
        displayImage(i);
    });
}

function displayVideo(videoIndex) {
    const clickedVideo = document.createElement("video");
    clickedVideo.src = videos[videoIndex].src;
    clickedVideo.classList.add("modal-video");
    clickedVideo.autoplay = true;

    modalImg.innerHTML = "";
    modalImg.appendChild(clickedVideo);

    modalImgBack.style.display = "flex";
    modalImg.style.display = "block";
}

function displayImage(imageIndex) {
    const clickedImage = document.createElement("img");
    clickedImage.src = images[imageIndex].src;
    clickedImage.classList.add("modal-img");

    modalImg.innerHTML = "";
    modalImg.appendChild(clickedImage);

    modalImgBack.style.display = "flex";
    modalImg.style.display = "block";
}

modalImgBack.addEventListener("click", (event) => {
    if (event.target === modalImgBack) {
        modalImgBack.style.display = "none";
    }
});
