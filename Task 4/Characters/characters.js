let char = prompt("Please enter a character (uppercase letter, lowercase letter or number):");

if (char >= 'A' && char <= 'Z') {
  console.log(char + " is an uppercase letter.");
}
else if (char >= 'a' && char <= 'z') {
  console.log(char + " is a lowercase letter.");
}
else if (Number.isInteger(parseInt(char))) {
  console.log(char + " is a number.");
}
else {
  console.log(char + " is not a letter or number.");
}
