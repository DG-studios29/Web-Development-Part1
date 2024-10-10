// Initialize variables
let sum = 0;
let count = 0;
let input = 0;

// Use a while loop to ask for numbers and calculate the sum and count
while (input !== -1) {
  // Ask user for input
  input = parseInt(prompt("Enter a number (-1 to stop):"));

  // Add input to the sum if it's not -1
  if (input !== -1) {
    sum += input;
    count++;
  }
}

// Calculate the average
let average = sum / count;

// Output the result
console.log("The average is: " + average);
