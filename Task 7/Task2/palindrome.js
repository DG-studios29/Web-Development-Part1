// Ask user for input
let word = prompt("Enter a word:");

// Initialize variables
let reversedWord = "";
let i = word.length - 1;

// Use a while loop to reverse the word
while (i >= 0) {
  reversedWord += word[i];
  i--;
}

// Check if the reversed word is equal to the original word
if (word.toLowerCase() === reversedWord.toLowerCase()) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
