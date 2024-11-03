// Assignment Code
var generateBtn = document.querySelector("#generate");

// Counter set to 0 before code is ran
var counter = 0;

// Empty/blank for later use in if statements/other functions
var pass = [];
var pwd = [];
var length ;

// Character arrays, lowercase and uppercase shortened to lowers and uppers to be in align with the s in number(s) and symbol(s).
var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

// Minimum and Maximum length of the password as provided by the readme
var minLength = 8;
var maxLength = 128;

// Creating the variable for an invalid input.
var invalidInput = "Invalid input - Please try again.";

// Lets the user know that the invalid i
var invalid = document.querySelector("#password");

// Function to generate the password
function generatePassword() {

  // Prompt the use for the number of characters to be used in the password
  var lengthOfPassword = window.prompt("How long should your password be? Please choose a number between " + minLength +" and " + maxLength); 
  if (lengthOfPassword === null) {
    window.alert("Please enter a value");
    return invalid.value = invalidInput;
  } else if (!Number.isInteger(Number(lengthOfPassword)) || isNaN(lengthOfPassword) || lengthOfPassword > 128 || lengthOfPassword < 8) {
    window.alert(lengthOfPassword +" is not a valid number. Please try again.");
    return invalid.value = invalidInput;
   }

  // The 4 important questions to the user
  let numUppers = Number(window.confirm("Would you like uppercase letters?"));  
  let numLowers = Number(window.confirm("Would you like lowercase letters?"));
  let numNumbers = Number(window.confirm("Would you like Numbers?"));
  let numSymbols = Number(window.confirm("would you like symbols?"));
  
  /* All if statements for the 4 questions, randomizing characters into the password based on which questions the user said yes to.
  This is done by using the concat method which combines arrays together.
  Arrays will be continually combined together until the password is "generated." */
  if (numUppers) {
    pwd = pwd.concat(uppers);
    pass.push(uppers[Math.floor(Math.random() * uppers.length)]);
    counter++ 
  } if (numLowers) {
    pwd = pwd.concat(lowers);
    pass.push(lowers[Math.floor(Math.random() * lowers.length)]);
    counter++ 
  } if (numNumbers) {
    pwd = pwd.concat(numbers);
    pass.push(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++ 
  } if (numSymbols) {
    pwd = pwd.concat(symbols);
    pass.push(symbols[Math.floor(Math.random() * symbols.length)]);
    counter++ 
  } if (!(numUppers || numUppers || numSymbols || numNumbers)) {
    window.alert("Please select a valid password format.");
  }
  
    // For loop used to randomize password more
  for (let i = 0; i < lengthOfPassword - counter; i++) {
    var random = Math.floor(Math.random() * pwd.length);
    pass.push(pwd[random]);
  }

  // Shuffle function added to further randomize the password
  function shufflePass(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // Runs the shuffle function on the current pass
  shufflePass(pass);

  // Join() Method is used to remove commas from array
  return pass.join("");
}

// Function is used to auto copy to clipboard.
function autoCopy(){
  var empty = document.querySelector("#password").value;
  if (empty == null || empty == " " || empty.length == 0 || empty === "Invalid input. Please try again.") {
    return;
  }
  else {
    var copyText = document.querySelector("#password")
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the password: " + copyText.value + " to the clipboard!");
  }
}

// Creates the password and writes it on the website
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  autoCopy();
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);