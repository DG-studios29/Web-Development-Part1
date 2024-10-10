// Define numerical variables with appropriate data types
const myFirstNumber = 6;
const mySecondNumber = 5;

// Define string variables with appropriate data types
const myFirstString = "This is my first string.";
const mySecondString = "This is my second string!";

// Define boolean variable
const myBoolean = true;

// Output the result of multiplying the two numerical variables
console.log(myFirstNumber * mySecondNumber); // Output: 30

// Concatenate the two strings and output the result
console.log(myFirstString + " " + mySecondString); // Output: "This is my first string. This is my second string!"

// Using template literals, output a multiline string
console.log(`The boolean is: ${myBoolean}
The first number is: ${myFirstNumber}
The second number is: ${mySecondNumber}
${myFirstNumber} x ${mySecondNumber} = ${myFirstNumber * mySecondNumber}
The first string is: ${myFirstString}
The second string is: ${mySecondString}
These two together make: ${myFirstString} ${mySecondString}`); 
