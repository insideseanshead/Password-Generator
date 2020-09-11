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

//TODO: Create Var arrays to be called on to make passwrod.

  var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(upCase)

  var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(lowCase)

  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(num);

  var specialCha = ['!', '#', '*', '&', '?', '@', '%', '/', '+', '=']
  console.log(specialCha)

  var passwordElements = []

//TODO: create generate password function

function generatePassword() {
  //set length of password
  var passLength = prompt('How many characters would you like your password to be?')
 

  if(passLength > 8 && passLength < 128){
    console.log('it worked')
    
    var hasLower = confirm('Would you like your password to contain lowercase letters?'); 

    if(hasLower){
      for(i = 0; i < lowCase.length; i++){
        passwordElements.push(lowCase[i])
      }
    }

    console.log(passwordElements)

  //   var hasUpper = confirm('Would you like your password to contain Uppercase letters?');
  //   var hasNum = confirm('Would you like your password to contain numbers?');
  //   var hasSpecial = confirm('Would you like your password to contain special characters?');
  //   console.log(hasLower, hasUpper, hasNum, hasSpecial);
  // 
  }
}
