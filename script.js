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

//=================================================================


//Arrays that password generators will draw from.

  var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(upCase)

  var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(lowCase)

  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(num);

  var specialCha = ['!', '#', '*', '&', '?', '@', '%', '/', '+', '=']
  console.log(specialCha)

  var passCheck = []

  var passwordElements = []

  var necessaryCha = ""
  
  var amalPass = ""

  var finalPass = ""

  //generate password function

function generatePassword() {
  //set length of password
  var passLength = prompt('How many characters would you like your password to be?')

  console.log('Password length '+ passLength)
 

  if(passLength >= 8 && passLength <= 128){
    console.log('it worked')
    //=================
    //Check for Lowercase
    var hasLower = confirm('Would you like your password to contain lowercase letters?'); 
    
    if(hasLower){
      
      

      finalPass += lowCase[Math.floor(Math.random() * lowCase.length)]

      for(i = 0; i < lowCase.length; i++){
        passwordElements.push(lowCase[i]);
      }
    } 

    
    //==================
    //Check for uppercase
    var hasUpper = confirm('Would you like your password to contain Uppercase letters?')

    

    if(hasUpper) {

      finalPass += upCase[Math.floor(Math.random() * upCase.length)]

      for(j = 0; j < upCase.length; j++){
        passwordElements.push(upCase[j]);
      }
    }
    
    
    //==================
    //Check for Numbers
    var hasNum = confirm('Would you like your password to contain numbers?');
    
    // passCheck.push(num[Math.floor(Math.random() * num.length)]);
    //     console.log(passCheck);

        
    if(hasNum) {

      finalPass += num[Math.floor(Math.random() * num.length)]

      for(k=0; k < num.length; k++){
        passwordElements.push(num[k]);
      }
    }
    

    //==================
    //Check for Special Characters
    var hasSpecial = confirm('Would you like your password to contain special characters?');

    

    if(hasSpecial) {

      finalPass += specialCha[Math.floor(Math.random() * specialCha.length)]

      for(l=0; l < specialCha.length; l++){
        passwordElements.push(specialCha[l]);
      }
    }
    
    if(lowCase === true || upCase === true || hasNum === true || hasSpecial === true){

    //==================
    //Randomize selected criteria and output final password.

    // for(n = 0; n < passCheck; n++){
    //   necessaryCha = passCheck[n];
    //   console.log('required: ' + necessaryCha)
    // }

    while(finalPass.length < passLength){
      finalPass += passwordElements[Math.floor(Math.random() * passwordElements.length)];
      console.log('final: ' + finalPass)
    }

    // for(m = 0; m < passLength ; m++){
    //   finalPass += passwordElements[Math.floor(Math.random() * passwordElements.length)];
    //   console.log('final: ' + finalPass)
    // }

    
    
    // finalPass = necessaryCha + amalPass;
    // console.log(finalPass)
    
    
   
    
    return finalPass;
    

  } else { 
    alert('Must select at least one element to use.')
  }
    
      

    

  
  } else {
    alert('Please select a number between 8 and 128 characters.')
  }
  
}
