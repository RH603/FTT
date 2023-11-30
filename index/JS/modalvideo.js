const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container")

// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", () => {
        
//         // Create a new image element
//         const clickedImage = document.createElement("video");
//         const clickedVideo = document.createElement("video")
//         clickedImage.src = video[i].src;
//         console.log(video[i])
//         clickedVideo.classList.add("modal-video");
//         clickedImage.autoplay = true
//         // Clear the modal content before appending a new image
//         modalImg.innerHTML = "";

//         // Append the clicked image to the modal
//         modalImg.appendChild(clickedImage);

//         // Display the modal
//         modalImgBack.style.display = "block";
//         modalImg.style.display = "block"
//         document.querySelector("video").style.display= "block"
//     });
// }
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", () => {
        
        // Create a new image element
        const clickedImage = document.createElement("video");
        const clickedVideo = document.createElement("video")
        clickedImage.src = video[i].src;
        console.log(video[i])
        clickedVideo.classList.add("modal-video");
        clickedImage.autoplay = true
        // Clear the modal content before appending a new image
        modalVid.innerHTML = "";

        // Append the clicked image to the modal
        modalVid.appendChild(clickedImage);

        // Display the modal

        // modalImgBack.style.display = "block";
        // modalImg.style.display = "block"
        document.querySelector("video").style.display= "block"
    });
}

modalImgBack.addEventListener("click",()=>{
    modalImgBack.style.display = "none";
})


