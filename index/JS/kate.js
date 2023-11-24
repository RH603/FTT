console.log("확인")

let modalOpen = document.querySelector("#modal-open")
let modalBack = document.querySelector(".modal-back")
let modalClose = document.querySelector(".modal-close")


modalOpen.addEventListener('click',function(){
    modalBack.style.display = "block"
})


modalClose.addEventListener("click",function(){
    modalBack.style.dispaly = "none"
    console.log(modalBack)
})