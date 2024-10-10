// Function to encode a message using the cipher
function encodeMessage(message) {
  let encodedMessage = ''; // Initialize an empty string to store the encoded message
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase alphabet string
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase alphabet string

  for (let i = 0; i < message.length; i++) {
    const char = message.charAt(i); // Get the current character from the message
    let encodedChar = char; // Initialize encodedChar with the current character

    if (char >= 'a' && char <= 'z') {
      // Find the index of the character in the lowercase alphabet
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      // Calculate the encoded index by adding 15 and wrapping around the alphabet
      const encodedIndex = (index + 15) % 26;
      // Get the encoded character from the lowercase alphabet
      encodedChar = String.fromCharCode('a'.charCodeAt(0) + encodedIndex);
    } else if (char >= 'A' && char <= 'Z') {
      // Find the index of the character in the uppercase alphabet
      const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
      // Calculate the encoded index by adding 15 and wrapping around the alphabet
      const encodedIndex = (index + 15) % 26;
      // Get the encoded character from the uppercase alphabet
      encodedChar = String.fromCharCode('A'.charCodeAt(0) + encodedIndex);
    }

    encodedMessage += encodedChar; // Append the encoded character to the encoded message string
  }

  return encodedMessage; // Return the encoded message
}

// Example usage
const message = 'Hello, thats so cool'; // The message to be encoded
const encodedMessage = encodeMessage(message); // Call the encodeMessage function to encode the message
console.log(encodedMessage); // Print the encoded message to the console
