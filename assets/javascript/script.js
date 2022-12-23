var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()_+~-="
var number = "0123456789"
// Assignment code here

function generatePassword() {
    var passwordCharacters =""
    var madePassword =""




 // asking how many characters we want the password to be
var userLength = window.prompt("How many characters from between 8-128 would you like")
   
if (userLength >= 8 && userLength <=128) {
    length = userLength



//asking if I want uppercase and saving as userUppercase var
var userUpperCase = window.prompt("Would you like Upper Case Enter YES, NO")
    if(!userUpperCase) {
        return;
    }
userUpperCase = userUpperCase.toUpperCase();

// asking if i want lowercase and saving as userLowercase var
var userLowerCase = window.prompt("Would you like Lower Case Enter YES, NO")
    if(!userLowerCase) {
        return;
    }
userLowerCase = userLowerCase.toUpperCase();

var userNumeric = window.prompt("Would you like Numbers Enter YES, NO")
    if(!userNumeric) {
        return;
    }
userNumeric = userNumeric.toUpperCase();
} else {
    alert("Please choose a password length between 8-128 characters");
    return;
}




// asking if we would like Special characters
var userSpecial = window.prompt("Would you like Special characters Enter YES, NO")
    if(!userSpecial) {
        return;
    }
userSpecial = userSpecial.toUpperCase();

if (userUpperCase === "YES") {
    passwordCharacters += upperCase;8
}

if (userLowerCase === "YES") {
    passwordCharacters += lowerCase;
}

if (userSpecial === "YES") {
    passwordCharacters += special;
}

if (userNumeric === "YES") {
    passwordCharacters += number;
}

for (var i=0; i < userLength; i++) {
    madePassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
}
return madePassword;


















}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);