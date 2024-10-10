// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"; // Added quotation marks to represent the string "Lion".
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = 4; // Removed quotation marks to represent the number 4 as a number, not a string.

fullSpec = "This is a " + animalType + ". It is a " + animal + " and it has " + numberOfTeeth + " teeth."; // Added appropriate concatenation of strings and variables.

if (numberOfLegs >= 3) { // Fixed comparison operator to inculde greater than signs, instead of just an equal sign.
  console.log(fullSpec); // Fixed syntax to include parentheses after console.log.
}

