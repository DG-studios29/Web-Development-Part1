// Ask the user to input a word
const word = prompt('Enter a word:');

// Function to replace every second character with a '!'
function replaceEverySecondChar(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord += i % 2 === 0 ? word[i] : '!';
  }
  return newWord;
}

// Function to reverse a word
function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

// Function to capitalize every 6th letter of a word
function capitalizeEverySixthChar(word) {
  let capitalized = '';
  for (let i = 0; i < word.length; i++) {
    capitalized += i % 6 === 5 ? word[i].toUpperCase() : word[i];
  }
  return capitalized;
}

// Function to get an array of ascii values for each character in a word
function getAsciiValues(word) {
  const asciiValues = [];
  for (let i = 0; i < word.length; i++) {
    asciiValues.push(word.charCodeAt(i));
  }
  return asciiValues;
}

// Log the manipulations to the console
console.log(`Every second character replaced with '!': ${replaceEverySecondChar(word)}`);
console.log(`Reversed word: ${reverseWord(word)}`);
console.log(`Every 6th letter capitalized: ${capitalizeEverySixthChar(word)}`);
console.log(`ASCII values: ${getAsciiValues(word)}`);
