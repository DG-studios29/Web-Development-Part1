// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program");
console.log("\n");

let ageStr = "24 years old";
let age = parseInt(ageStr); // Fixed by using parseInt to parse the string as an integer.
console.log("I'm " + age + " years old.");

let three = 3; // Removed quotation marks to represent the number 3 as a number, not a string.

let answerYears = age + three;
console.log("The total number of years: " + answerYears); // Added a space before "answerYears" and removed quotation marks to output the value of the variable.

answerMonths = answerYears * 12; // Renamed variable to match its usage in the next line and fixed multiplication by using the correct variable name.
console.log("In 3 years and 6 months, I'll be " + (answerMonths + 6) + " months old"); // Added parentheses to calculate the sum correctly and added a space after "old".


//HINT, 330 months is the correct answer