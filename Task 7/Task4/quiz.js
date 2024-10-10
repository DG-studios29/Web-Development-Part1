// Initialize variables
let answer = "c";
let guess = "";

// Use a do-while loop to ask the question and give user a chance to try again
do {
  // Ask the question
  guess = prompt("What colour is the sky?\na. Purple\nb. Pink\nc. Blue\nd. Yellow\nEnter a, b, c or d:");

  // Check if the guess is correct
  if (guess === answer) {
    console.log("That's correct!");
    break;
   }else {
    // Ask user if they want to try again
    let tryAgain = prompt("That's incorrect! Would you like to try again? (y/n)");

    // If user doesn't want to try again, exit the loop
    if (tryAgain.toLowerCase() !== "y") {
      break;
    }
  }
} while (true);
