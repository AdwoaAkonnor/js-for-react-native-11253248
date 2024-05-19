// Task One
function processArray(arr) {
    const newArray = [];
    for (let num of arr) {
      if (num % 2 === 0) {
        newArray.push(num * num);  // Square even numbers
      } else {
        newArray.push(num * 3);  // Triple odd numbers
      }
    }
    return newArray;
  }
  // Task Two
  function processArray(arr) {
    const newArray = [];
    for (let num of arr) {
      if (num % 2 === 0) {
        newArray.push(num * num);  // Square even numbers
      } else {
        newArray.push(num * 3);  // Triple odd numbers
      }
    }
    return newArray;
  }
  
  function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
      throw new Error("Input arrays must have the same length");
    }
    const formattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
      formattedStrings.push(`Original String: ${strings[i]}, Processed Number: ${processedNumbers[i]}, Formatted String: ${formatString(processedNumbers[i])}`);
    }
    return formattedStrings;
  }
  
  function formatString(number) {
    return number % 2 === 0 ? number.toString().toUpperCase() : number.toString().toLowerCase();
  }
  
  // Example Usage
  const myArray = [4, 5, 6, 7, 8];
  const processedArray = processArray(myArray);
  const myStrings = ["Hello", "world", "how", "are", "you?"];
  const formattedResult = formatArrayStrings(myStrings, processedArray);
  console.log(formattedResult);