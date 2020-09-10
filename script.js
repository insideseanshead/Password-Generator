// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Code Below this line.
function generatePassword() {
  var i = confirm('This is a confirm');
  console.log(i);

  var whatEver = prompt('Another string!')
  console.log(whatEver)
}

var randomMath = Math.floor(Math.random() *10)+1;
console.log(randomMath);

// for(var count = 0; count < 3; count++){
//   alert("TACOS")
// }


var count = 3
console.log('Do while')
do{
  console.log(count)
  count++;
} while(count < 3)

count = 3
console.log('while')
while(count<3){
  console.log(count);
  count++;
}