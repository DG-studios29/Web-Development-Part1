// Get input from user
var num = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by both 7 and 11
if (num % 7 === 0 && num % 11 === 0) {
    console.log(num + " is divisible by both 7 and 11.");
}
// Check if the number is divisible by only 7
else if (num % 7 === 0) {
    console.log(num + " is divisible by 7.");
}
// Check if the number is divisible by only 11
else if (num % 11 === 0) {
    console.log(num + " is divisible by 11.");
}
// If none of the above conditions are met, the number is not divisible by 7 or 11
else {
    console.log(num + " is divisible by neither 7 nor 11.");
}
