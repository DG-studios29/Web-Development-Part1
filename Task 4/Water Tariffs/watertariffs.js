let litresUsed = prompt("Please enter the number of litres of water you have used:");

let billAmount = 0;

if (litresUsed <= 6000) {
    billAmount = litresUsed * 15.73 / 1000;

  } else if (litresUsed > 6000 && litresUsed <= 10500) {
    billAmount = (6000 * 15.73 + (litresUsed - 6000) * 22.38) / 1000;

  } else if (litresUsed > 10500 && litresUsed <= 35000) {
    billAmount = (6000 * 15.73 + 4500 * 22.38 + (litresUsed - 10500) * 31.77) / 1000;

  } else if (litresUsed > 35000) {
    billAmount = (6000 * 15.73 + 4500 * 22.38 + 9500 * 31.77 + (litresUsed - 35000) * 69.76) / 1000;
  }
  
  console.log("Your water bill is R" + billAmount.toFixed(2));
