document.addEventListener("DOMContentLoaded", function() {
    const passwordBox = document.getElementById("password");
    // Rest of your code...
    const generateBtn = document.getElementById("generateBtn");
    const copyPass = document.getElementById("copyPass");
const length = 12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@#$%^&*()_+<>[]{}";

const allChars = upperCase+lowerCase+number+symbol;

function createPassword(){
let password ="";
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += number[Math.floor(Math.random()*number.length)];
password += symbol[Math.floor(Math.random()*symbol.length)];


while(length>password.length){
password += allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value = password;
}
generateBtn.addEventListener("click",createPassword);

copyPass.addEventListener('copy',copyPass);
});