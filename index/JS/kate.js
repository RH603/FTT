console.log("확인")

let modalOpen = document.querySelector("#modal-open")
let modalBack = document.querySelector(".modal-back")
let modalClose = document.querySelector(".modal-close")


modalOpen.addEventListener('click',function(){
    modalBack.style.display = "block"
    console.log(modalBack)
})

modalClose.addEventListener('click',function(){
    modalBack.style.display = "none"
    console.log(modalBack)
})
