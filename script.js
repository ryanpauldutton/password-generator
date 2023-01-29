// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// ALL CHARACTERS IN ARRAY
var characterTypes = [upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters];


// Function to prompt user for password options
function getPasswordOptions() {
  return prompt('How long would you like your password to be ? (10 - 64)');
}


// FOR LOOP TO GENERATE PASSWORD


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// function 



var passwordLength = 0;
// Function to generate password with user input
function generatePassword(a) {
  let result = [];
  for (let i = 0; i < a; i++) {

    result += getRandom(getRandom(characterTypes));
  }

  return result;

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // var passwordLength = getPasswordOptions();
  var password = generatePassword(getPasswordOptions());
  var passwordText = document.querySelector('#password');
  console.log(passwordLength);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);