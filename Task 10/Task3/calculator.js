// Define functions for each operation
function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  // Ask the user for the first number, second number, and operation
  const num1 = parseFloat(prompt('Enter the first number:'));
  const num2 = parseFloat(prompt('Enter the second number:'));
  const operation = prompt('Enter the operation you would like to perform (add, subtract, multiply, divide):');
  
  // Perform the calculation based on the operation
  let total;
  switch (operation) {
    case 'add':
      total = add(num1, num2);
      console.log(`${num1} + ${num2} = ${total}`);
      break;
    case 'subtract':
      total = subtract(num1, num2);
      console.log(`${num1} - ${num2} = ${total}`);
      break;
    case 'multiply':
      total = multiply(num1, num2);
      console.log(`${num1} x ${num2} = ${total}`);
      break;
    case 'divide':
      total = divide(num1, num2);
      console.log(`${num1} / ${num2} = ${total}`);
      break;
    default:
      console.log('Invalid operation. Please try again.');
  }
  