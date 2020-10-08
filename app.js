let LoginForm = document.querySelector(".Login");

let LoginBtn = document.querySelector(".Login-btn");

let Categorybtn = document.querySelector(".category-btn")

let Categorycontent = document.querySelector(".category-content")

LoginBtn.addEventListener("click",function () {
    LoginForm.classList.toggle("open")
    
})

Categorybtn.addEventListener("click",function () {
    Categorycontent.classList.toggle("open")
    
})
