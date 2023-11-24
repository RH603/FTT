
let modalOpen = document.querySelector("#modal-open")
let modalBack = document.querySelector(".modal-back")
let modalClose = document.querySelector(".modal-close")
let movie = document.createElement("div")
const movieContainer = document.querySelector(".movie-container")
const img = document.createElement("img")
const kate = document.querySelector("input")
console.log(kate)
movie.classList.add("movie")

kate.addEventListener("click",function(){
    kate.removeAttribute('checked')
    console.log(kate.checked)
})
if(kate.checked){
    console.log(kate.checked)
        movie.classList.add("movie")
        img.append("../../resources/image/공포/horror1.jpg")
        for(let i=1; i<11; i++){
            const img = document.createElement("img")
            img.src = `../../resources/image/공포/horror${i}.jpg`
            movie.appendChild(img)
        }

}
for(let i=1; i<11; i++){
    const img = document.createElement("img")
    img.src = `../../resources/image/스포츠/spo${i}.jpg`
    movie.appendChild(img)
}

for(let i=1; i<7; i++){
    const img = document.createElement("img")
    img.src = `../../resources/image/액션·범죄/cri-and-act${i}.jpg`
    movie.appendChild(img)
}
for(let i=1; i<11; i++){
    const img = document.createElement("img")
    img.src = `../../resources/image/코미디/medy${i}.jpg`
    movie.appendChild(img)
}

movieContainer.appendChild(movie)


modalOpen.addEventListener('click',function(){
    modalBack.style.display = "block"
})

modalClose.addEventListener('click',function(){
    modalBack.style.display = "none"
})
