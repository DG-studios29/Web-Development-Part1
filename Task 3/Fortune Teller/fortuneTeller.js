
let motherName = prompt("What is your mother's first name?");
let streetName = prompt("What is the name of the street you grew up on?");
let favoriteColor = prompt("What was your favorite color as a child?");
let currentAge = parseInt(prompt("What is your current age?"));
let chosenNumber = parseInt(prompt("Choose a number between 1 and 10."));

let yearsToBestFriend = chosenNumber;
let bestFriendName = motherName + " " + streetName;
let yearsToMarriage = Math.round(currentAge / chosenNumber);
let numberOfChildren = currentAge % chosenNumber;
let yearsToDyeHair = currentAge - chosenNumber;

console.log(`In ${yearsToBestFriend} years you are going to meet your best friend named ${bestFriendName}.
You will get married in ${yearsToMarriage} years and have ${numberOfChildren} children.
In ${yearsToDyeHair} years you are going to dye your hair ${favoriteColor}.`);
