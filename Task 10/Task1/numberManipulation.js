// Function to prompt the user to input 10 numbers and return them as an array
function getNumbers() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      const number = parseFloat(prompt(`Enter number ${i}:`));
      numbers.push(number);
    }
    return numbers;
  }
  
  // Function to find the total of all the numbers in an array and return it
  function getTotal(numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr);
    return total;
  }
  
  // Function to find the index of the maximum number in an array and return it
  function getMaxIndex(numbers) {
    const maxIndex = numbers.indexOf(Math.max(...numbers));
    return maxIndex;
  }
  
  // Function to find the index of the minimum number in an array and return it
  function getMinIndex(numbers) {
    const minIndex = numbers.indexOf(Math.min(...numbers));
    return minIndex;
  }
  
  // Function to calculate the average of the numbers in an array and return it rounded to 2 decimal places
  function getAverage(numbers) {
    const total = getTotal(numbers);
    const average = total / numbers.length;
    return average.toFixed(2);
  }
  
  // Function to find the median number in an array and return it
  function getMedian(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const median = sortedNumbers.length % 2 !== 0
      ? sortedNumbers[middleIndex]
      : (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    return median;
  }
  
  // Call the functions and log the results to the console
  const numbers = getNumbers();
  console.log(`Numbers: ${numbers}`);
  const total = getTotal(numbers);
  console.log(`Total: ${total}`);
  const maxIndex = getMaxIndex(numbers);
  console.log(`Index of maximum number: ${maxIndex}`);
  const minIndex = getMinIndex(numbers);
  console.log(`Index of minimum number: ${minIndex}`);
  const average = getAverage(numbers);
  console.log(`Average: ${average}`);
  const median = getMedian(numbers);
  console.log(`Median: ${median}`);
  