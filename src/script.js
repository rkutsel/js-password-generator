// Assignment Code
var generateBtn = document.querySelector("#generate");


//User Error Messages
const errNum = document.querySelector("#error");
errNum.innerHTML = ""; 

const errRange = document.querySelector("#error");
errRange.innerHTML = "";

const errNoChoice = document.querySelector("#error");
errNoChoice.innerHTML = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function that generates a random password.  
function generatePassword() {

  let pwLen = Number(prompt("Password Length. Between 8 and 128 Characters."));
  let capsChoice; 
  let lowerChoice;
  let digitChoice;
  let specialChoice;

  // Create an empty string to store the generated password. 
  let generatedPw = ""; // initial password
  let generatedRandom = ""; // randomize initial password

  // Create an object to store different char types. 
  const inputOptions = {
      capsChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      lowerChars: "abcdefghijklmnopqrstuvwxyz",
      digitChars: "0123456789",
      specialChars: "~.!@#$%^&*()_+|}{\":?><',",
  }

  /* Edge Cases 
  * 01. Length: must be set as a number.  
  * 02. Allowed range: 8 - 128 characters.  
  * 03. Must be at least one character set. 
  */
  i = 0
  while (i < 1) {  
    if (isNaN(pwLen)) {
      document.getElementById("error").innerHTML = "Must be a number.";
      alert("Error: Password length must be a number. Refresh to continue.");
      break;
    } else if (pwLen < 8 || pwLen > 128) {
      document.getElementById("error").innerHTML = "Allowed length between 8 - 128 characters. Refresh to continue.";
      alert("Error: Length must be between 8 - 128 characters.");
      break;
    } 
      else {
        capsChoice = confirm("Do you want caps in your password?");
        lowerChoice = confirm("Do you want lowercase characters in your password?");
        digitChoice = confirm("Do you want digit characters in your password?");
        specialChoice = confirm("Do you want special characters in your password?");
        if (!capsChoice && !lowerChoice && !digitChoice && !specialChoice) {
          document.getElementById("error").innerHTML = "Must select at least one character type. Refresh to continue.";
          alert("Error: Must select at least one character type for your password.");
        }
    }
    i++;
  }

  // Iterate over char types individually based on input choices. 
  for (let i = 0; i < pwLen; i++) {
      if (capsChoice === true && generatedPw.length != pwLen.length) {
          generatedPw += inputOptions.capsChars.charAt(Math.floor(Math.random() * (inputOptions.capsChars.length - 1) + 0));
          // console.log(`>CAPS char condition ${generatedPw.charAt(generatedPw.length - 1)} <`, typeof capsChoice, capsChoice);
      } 
      if (lowerChoice === true && generatedPw.length != pwLen.length) {
          generatedPw += inputOptions.lowerChars.charAt(Math.floor(Math.random() * (inputOptions.lowerChars.length - 1) + 0));
          // console.log(`>>LOWER char condition ${generatedPw.charAt(generatedPw.length - 1)} <<`, typeof lowerChoice, lowerChoice);
      } 
      if (digitChoice === true && generatedPw.length != pwLen.length) {
          generatedPw += inputOptions.digitChars.charAt(Math.floor(Math.random() * (inputOptions.digitChars.length - 1) + 0));
          // console.log(`>>>DIGIT char condition ${generatedPw.charAt(generatedPw.length - 1)}  <<<`, typeof digitChoice, digitChoice);
      } 
      if (specialChoice === true && generatedPw.length != pwLen.length) {
          generatedPw += inputOptions.specialChars.charAt(Math.floor(Math.random() * (inputOptions.specialChars.length - 1) + 0));
          // console.log(`>>>>SPECIAL char condition ${generatedPw.charAt(generatedPw.length - 1)} <<<<`, typeof specialChoice, specialChoice);
      }
  }

  // Iterate over initially generated password. 
  for ( let i = 0; i < pwLen; i++ ) {
    generatedRandom += generatedPw.charAt(Math.floor(Math.random() * (generatedPw.length - 1) + 0));
  }

  //  console.log(`initial password !!!${generatedPw}!!!`)
  //  console.log(`randomized password >>>${generatedRandom}<<<`)

 return generatedRandom;
}