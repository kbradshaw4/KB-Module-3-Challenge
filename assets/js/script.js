// Assignment code here
var uppercase = ["A", "B", "C"]
var lowercase = ["a", "b", "c"]
var numeric = ["1", "2", "3"]
var special = ["!", "@", "#"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var options = []
    var length = prompt("How long would you like your password?")
    if (length < 8 || length > 128){
        alert("the length must be at least 8 characters but no more than 128")
        return
    }
    var wantsUppercase = confirm("Would you like uppercase characters?")
    var wantsLowercase = confirm("Would you like lowercase characters?")
    var wantsNumeric = confirm("Would you like numeric characters?")
    var wantsSpecial = confirm("Would you like special characters?")

    if (!wantsUppercase && !wantsLowercase && !wantsNumeric && !wantsSpecial) {
        alert("you must choose at least one character type")
        return
    }
    if (wantsUppercase) {
        options = options.concat(uppercase)
    }

    if (wantsLowercase) {
        options = options.concat(lowercase)
    }

    if (wantsNumeric) {
        options = options.concat(numeric)
    }

    if (wantsSpecial) {
        options = options.concat(special)
    }

    var password = ""
    for (var i=0; i<length; i++) {
        password += options[Math.floor(Math.random()*options.length)]
    }

    return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);