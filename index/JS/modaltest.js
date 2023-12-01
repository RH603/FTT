const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container")
const htmlImgs = document.querySelectorAll(".htmlImg")
const mama = document.querySelector(".modal-back")


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        
        // Create a new image element
        const clickedImage = document.createElement("video");
        const clickedVideo = document.createElement("video")
        // 추가
        const clickedImg = document.createElement("img");
        clickedImg.src = images[i].src;
        
        clickedImage.src = video[i].src;
        // console.log(video[i])
        clickedVideo.classList.add("modal-video");
        clickedImage.autoplay = true
        // Clear the modal content before appending a new image
        modalImg.innerHTML = "";

        // Append the clicked image to the modal
        modalImg.appendChild(clickedImage);
  
        // Display the modal
        modalImgBack.style.display = "block";
        modalImg.style.display = "block"
        document.querySelector("video").style.display= "block"
    })
    
    modalImgBack.addEventListener("click",(event)=>{
        if (event.target === modalImgBack) {
            modalImgBack.style.display = "none";
            // modalImg.remove("img")
        }else{
            document.querySelector("video").style.display= "none"
            console.log(event.target.src)
           modalImg.appendChild(clickedImg).classList.add("modal-img");
        }
    });
}

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
//         modalVid.innerHTML = "";

//         // Append the clicked image to the modal
//         modalVid.appendChild(clickedImage);

//         // Display the modal

//         modalImgBack.style.display = "block";
//         modalImg.style.display = "block"
//         document.querySelector("video").style.display= "block"
//     });
// }

// modalImgBack.addEventListener("click",()=>{
//     modalImgBack.style.display = "none";
// })
