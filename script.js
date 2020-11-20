
// the four arrays used to build the final password 

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = ['@', '"', '/', '[', ']', '{', '}', '|', '!', '#', '$', '%', '^', '&', '*', '_', '~', '-', '?', '<', '>'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

//user selects to include or exclude the four different types of characters

function getPasswordOptions() {
  var length = parseInt(prompt('Please select up to 128 characters'));

  var hasSpecialCharacters = confirm('Click OK to include special characters.');

  var hasNumbers = confirm('Click OK to include numbers.'); 

  var hasLowerCase = confirm('Click OK to include lowercase.');

  var hasUpperCase = confirm('Click OK to include uppercase.')


  var passwordOptions = { 
    length, 
    hasSpecialCharacters,
    hasNumbers,
    hasLowerCase, 
    hasUpperCase,
  }; 

  return passwordOptions;
}   

//using the function to return a random character   

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length); 
  var randElement = arr[randIndex];

  return randElement;
}

//the function to generate the password from user's input

function generatePassword() {
  var options = getPasswordOptions(); 
  var result = []; 
  var possibleCharacters = []; 
  var guaranteedCharacters = []; 

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters)); 
  }

  if (options.hasNumbers) { 
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasLowerCase) { 
    possibleCharacters = possibleCharacters.concat(lowerCase); 
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasUpperCase) { 
    possibleCharacters = possibleCharacters.concat(upperCase); 
    guaranteedCharacters.push(getRandom(upperCase)); 
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters); 

    result.push(possibleCharacter);
  }  

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector('#generate');

writePassword();

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 
