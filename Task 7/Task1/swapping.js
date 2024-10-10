// ask the user to enter a number of at least 3 digits
let number = prompt("Enter a number of at least 3 digits:");
// store the original number
let originalNumber = number;
// get the length of the number
let length = number.length;

// check if number has at least 3 digits
if (length < 3) {
  console.log("Number must have at least 3 digits.");
} else {
  // swap second and last digit using a for loop
  // get the second digit and last digit of the number
  let secondDigit = number.charAt(1);
  let lastDigit = number.charAt(length - 1);
  // create a new string to store the swapped number
  let newNumber = "";
  // iterate through each character of the original number
  for (let i = 0; i < length; i++) {
    if (i == 1) { // if we are at the second digit
      // append the last digit to the new string
      newNumber += lastDigit;
    } else if (i == length - 1) { // if we are at the last digit
      // append the second digit to the new string
      newNumber += secondDigit;
    } else { // for all other digits
      // append the current digit to the new string
      newNumber += number.charAt(i);
    }
  }

  // output the original number and the new number
  console.log("Original number: " + originalNumber);
  console.log("New number: " + newNumber);
}
