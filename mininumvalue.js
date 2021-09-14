//In this activity, we're going to write code that finds the smallest value in a list of numbers. We will need to use our knowledge of arrays, loops, and variables.

// function
// how to know the smallest number of a list >> array -- looping
// use comparion to check if the previous number was bigger >> if statement
// console log  the results to check the hypothises

let myArray = [1, 2, 4, 8, 0];

const min = function (myArray) {
  let smallest = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < smallest) {
      smallest = myArray[i];
    }
  }
  return smallest;
};

console.log(min(myArray));
