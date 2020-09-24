const myuser = document.querySelector(".user")
const register = document.querySelector(".register-div")
let allInp = document.querySelectorAll(".inp")

const mybutton = document.querySelector(".btn")


myuser.addEventListener("click",function () {
register.style.display = "block"
    
})


let msg = ""

mybutton.addEventListener("click", function () {
  allInp.forEach((inputElement)  => {

    
    if(inputElement.value === ""){
      let name = inputElement.name;
      msg = "please enter your " + name
      
      alert(msg)

      }

      else {

        console.log(allInp);
    console.log("i amd");
    
      register.style.display = "none"
      }
  })
  

 


 })    
