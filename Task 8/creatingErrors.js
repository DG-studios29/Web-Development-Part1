// Compilation Error: Missing closing parenthesis in console.log statement
console.log("Hello, world!"; // SyntaxError: Unexpected token ')' - This error occurs because a closing parenthesis is missing, causing a syntax error.

// Compilation Error: Variable redeclaration with let keyword
let name = "John";
let name = "Jane"; // SyntaxError: Identifier 'name' has already been declared - This error occurs because the variable 'name' is being redeclared using the 'let' keyword, which is not allowed.

// Runtime Error: Division by zero
let num = 10;
let result = num / 0; // TypeError: Cannot divide by zero - This error occurs during runtime because division by zero is undefined in mathematics and not allowed.

// Logical Error: Incorrect variable assignment in calculation
let radius = 5;
let area = 2 * Math.PI * radius; // Logical error: The formula for calculating the area of a circle is Math.PI * radius * radius. This error results in an incorrect calculation of the circle's area.

console.log(area); // Prints NaN (Not a Number) due to the logical error above.
