const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container")
const htmlImgs = document.querySelectorAll(".htmlImg")
const kateBox = document.querySelector(".kate-box")
const gallery1 = document.querySelector(".gallery1")
const gallery2 = document.querySelector(".gallery2")
const gallery3 = document.querySelector(".gallery3")


for (let i = 0; i < gallery1.length; i++) {
    gallery1[i].addEventListener("click", () => {
        // console.log(images.length)
        // Create a new image element
        const clickedImage = document.createElement("video");
        const clickedVideo = document.createElement("video")
        // 추가
        const clickedHtml = document.createElement("img")
        clickedHtml.classList.add("htmlImg")
        const clickedImg = document.createElement("img");
        // 
        clickedImage.src = video[i].src;
        // 추가
        clickedImg.src = images[i].src;
        clickedHtml.src = shuffledhtmlUrls1[i]
        // 

        clickedVideo.classList.add("modal-video");
        clickedImage.autoplay = true
        // Clear the modal content before appending a new image
        modalImg.innerHTML = "";
        
        // Append the clicked image to the modal
        modalImg.appendChild(clickedImage);

        // modalImg.appendChild(clickedImg)

        modalImg.appendChild(clickedHtml)
        
        // Display the modal
        modalImgBack.style.display = "block";
        modalImg.style.display = "block"
        document.querySelector(".htmlImg").style.display= "block"
        document.querySelector("video").style.display= "block"



        
        
        modalImgBack.addEventListener("click",(event)=>{
            if (event.target === modalImgBack) {
                modalImgBack.style.display = "none";
                document.querySelector(".htmlImg").style.display = "none"
                // htmlImgs[i].parentNode.removeChild(htmlImgs[i]);
                // modalImgBack.forEach((img) => {
                    // });         
                }else{
                    document.querySelector("video").style.display= "none"
                    // clickedHtml.parentNode.removeChild(clickedHtml);
                    // document.querySelector(".htmlImg").style.display = "none"
                    // modalImg.appendChild(clickedHtml);
                // console.log(clickedImg)
            }
        });
    });
}
for (let i = 0; i < gallery2.length; i++) {
    gallery2[i].addEventListener("click", () => {
        // console.log(images.length)
        // Create a new image element
        const clickedImage = document.createElement("video");
        const clickedVideo = document.createElement("video")
        // 추가
        const clickedHtml = document.createElement("img")
        clickedHtml.classList.add("htmlImg")
        const clickedImg = document.createElement("img");
        // 
        clickedImage.src = video[i].src;
        // 추가
        clickedImg.src = images[i].src;
        clickedHtml.src = shuffledhtmlUrls1[i]
        // 

        clickedVideo.classList.add("modal-video");
        clickedImage.autoplay = true
        // Clear the modal content before appending a new image
        modalImg.innerHTML = "";
        
        // Append the clicked image to the modal
        modalImg.appendChild(clickedImage);

        // modalImg.appendChild(clickedImg)

        modalImg.appendChild(clickedHtml)
        
        // Display the modal
        modalImgBack.style.display = "block";
        modalImg.style.display = "block"
        document.querySelector(".htmlImg").style.display= "block"
        document.querySelector("video").style.display= "block"



        
        
        modalImgBack.addEventListener("click",(event)=>{
            if (event.target === modalImgBack) {
                modalImgBack.style.display = "none";
                document.querySelector(".htmlImg").style.display = "none"
                // htmlImgs[i].parentNode.removeChild(htmlImgs[i]);
                // modalImgBack.forEach((img) => {
                    // });         
                }else{
                    document.querySelector("video").style.display= "none"
                    // clickedHtml.parentNode.removeChild(clickedHtml);
                    // document.querySelector(".htmlImg").style.display = "none"
                    // modalImg.appendChild(clickedHtml);
                // console.log(clickedImg)
            }
        });
    });
}
for (let i = 0; i < gallery3.length; i++) {
    gallery3[i].addEventListener("click", () => {
        // console.log(images.length)
        // Create a new image element
        const clickedImage = document.createElement("video");
        const clickedVideo = document.createElement("video")
        // 추가
        const clickedHtml = document.createElement("img")
        clickedHtml.classList.add("htmlImg")
        const clickedImg = document.createElement("img");
        // 
        clickedImage.src = video[i].src;
        // 추가
        clickedImg.src = images[i].src;
        // clickedHtml.src = shuffledhtmlUrls1[i]
        // 

        clickedVideo.classList.add("modal-video");
        clickedImage.autoplay = true
        clickedImage.controls = true
        // Clear the modal content before appending a new image
        modalImg.innerHTML = "";
        
        // Append the clicked image to the modal
        modalImg.appendChild(clickedImage);

        // modalImg.appendChild(clickedImg)

        modalImg.appendChild(clickedHtml)
        
        // Display the modal
        modalImgBack.style.display = "block";
        modalImg.style.display = "block"
        document.querySelector(".htmlImg").style.display= "block"
        document.querySelector("video").style.display= "block"



        
        
        modalImgBack.addEventListener("click",(event)=>{
            if (event.target === modalImgBack) {
                modalImgBack.style.display = "none";
                document.querySelector(".htmlImg").style.display = "none"
                // htmlImgs[i].parentNode.removeChild(htmlImgs[i]);
                // modalImgBack.forEach((img) => {
                    // });         
                }else{
                    document.querySelector("video").style.display= "none"
            }
        });
    });
}