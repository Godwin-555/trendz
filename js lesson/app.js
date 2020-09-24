
const input1_input  = document.querySelector(".input1");

const input2_input  = document.querySelector(".input2");

const input3_input  = document.querySelector(".input3");

let FContent_h1 = document.querySelector(".F-content")

let OContent_h1 = document.querySelector(".O-content")

let EContent_h1 = document.querySelector(".E-content")

const div_div = document.querySelector(".div")

let btn_button = document.querySelector(".btn")

const btnForm_form=document.querySelector(".btn-Form")

const allinput = document.querySelectorAll(".input")

let msg = ""
btnForm_form.addEventListener( "submit", (event) => {

  event.preventDefault();

 



allinput.forEach((inputElement) => {
if(!inputElement.value){

  msg  = "please enter your details"
  

}

else if(inputElement && !msg ){
msg = ""


}

let Alertmsg = msg
let maxnumber  = 5

if (Alertmsg){

  alert(Alertmsg)

}

  else if(input1_input.value.length >= maxnumber){

    alert("Not more than 5 words")
  
  
  }
else{
  console.log('i am working');
    FContent_h1.textContent =input1_input.value

  OContent_h1.textContent =input2_input.value
  
  EContent_h1.textContent =input3_input.value
  
  div_div.classList.add("divDisplayblock");



}

})

})






let y = 10

let x = 20


let excelResult = "Promoted"

let poorResult = "Demoted"


let excelCalc = x + y

let poorCalc = x - y


let cityName = "Lagos"



let sentence = 'name of a city is '+ cityName;

if(cityName === "Lagos"){

  console.log(sentence);

  console.log(excelCalc);

  console.log(excelResult);

}

else{

console.log(sentence);

console.log(poorCalc);

console.log(poorResult);

}















