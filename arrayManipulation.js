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
  const myArray = [4, 5, 6, 7, 8];
const result = processArray(myArray);
console.log(result); 