// Task 3 
function processArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArray.push(arr[i] * arr[i]);  // Square even numbers
      } else {
        newArray.push(arr[i] * 3);  // Triple odd numbers
      }
    }
    return newArray;
  }
  
  // Function to format array strings 
  function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    let formattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
      let formattedString;
      if (processedNumbers[i] % 2 === 0) {
        formattedString = processedNumbers[i].toString().toUpperCase();
      } else {
        formattedString = processedNumbers[i].toString().toLowerCase();
      }
      formattedStrings.push("Original String: " + strings[i] + ", Processed Number: " + processedNumbers[i] + ", Formatted String: " + formattedString);
    }
    return formattedStrings;
  }
  
  // Function to create user profiles
  function createUserProfiles(names, formattedResult) {
    if (names.length !== formattedResult.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    let userProfiles = [];
    for (let i = 0; i < names.length; i++) {
      let profile = {
        id: i + 1,
        originalName: names[i],
        modifiedName: formattedResult[i].split(", ")[2].split(": ")[1]
      };
      userProfiles.push(profile);
    }
    return userProfiles;
  }
  
  let myArray = [4, 5, 6, 7, 8];
  let myStrings = ["Hello", "world", "how", "are", "you?"];
  
  let processedArray = processArray(myArray);
  let formattedResult = formatArrayStrings(myStrings, processedArray);
  let userProfiles = createUserProfiles(myStrings, formattedResult);
  
  console.log(userProfiles);
  
  