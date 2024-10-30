let regbtn = document.querySelector('.regbtn');
let logbtn = document.querySelector('.logbtn');
let  regnam = document.querySelector('#regnam');
let  regmail = document.querySelector('#regmail');
let  logmail = document.querySelector('#logmail');
let  regpas = document.querySelector('#regpas');
let  logpas = document.querySelector('#logpas');
let regname = regnam.value; 
let reggmail = regmail.value; 
let regpass= regpas.value;
///////////
let logMail = logmail.value;
let logPass = logpas.value;
////

/////////////////////////////
////
regbtn.addEventListener('click',()=>{
    regname = regnam.value; 
    reggmail = regmail.value;
    regpass= regpas.value;
    console.log(regname);
    console.log(reggmail);
    console.log(regpass);
    

    

})
///////////////////
logbtn.addEventListener('click',()=>{
   
     logMail = logmail.value;
     logPass = logpas.value;
    

     


})
logbtn.addEventListener('click',()=>{
   
   if (logMail==reggmail&&regpass==logPass) {
  
    var a = "OK    ";
var b = regname;

alert(a  +  b);
 
    
   } else {
    alert('CHECK Your password and email')
   }

     


})