// ****#1 Add items to beggining and end of array

// let myArray = ["1", "2", "3", "4", "5"];

// myArray.unshift("start");
// myArray.push("end");

// myArray = ["start", ...myArray, "end"];

// console.log(myArray);

// ****#2 Create private variable in JS

// function secretVariable() {
//   let private = "sensitive data";

//   return function() {
//     return private;
//   };
// }

// console.log(secretVariable());

// ****#3 What is the output of console.log(typeof typeof 1)

//type of returns the type of the data in a string form
// typeof 1 = "number"
// typeof "number" = string
// answer is string

// ****#4 what is the output

// console.log(2+"2") = output is 22 because + operator can be used on multiple data types.
//  if used on two #s then it will add, if used on two diff data types
//  then it will concatinate (2 + 2 == 22)
// console.log(2-"2") = output is 0 because - operator can only be used on numbers and will
//  interperate data types as such if possible.

// // Complete the compareTriplets function below. (hackerrank)
// function compareTriplets(a, b) {
//   let bob = 0;
//   let alice = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice++;
//     } else if (a[i] < b[i]) {
//       bob++;
//     } else {
//       continue;
//     }
//   }

//   let final = [alice, bob];

//   return final;
// }

// console.log(compareTriplets([2, 4, 6], [1, 2, 3]));

// // Complete the aVeryBigSum function below. hackerrank
// function aVeryBigSum(ar) {
//   let sumArray = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sumArray = sumArray + ar[i];
//   }

//   return sumArray;
// }

// console.log(aVeryBigSum([1, 2, 3, 4, 5, 6, 7]));

//Given a 3x3 square matrix, calculate the absolute difference between the sums of its diagonals.

// function diagonalDifference(arr) {
//   let leftDi = 0;
//   let rightDi = 0;

//   for (let i = 0; i < arr.length; i++) {
//     leftDi += arr[i][i];
//     rightDi += arr[i][arr.length - 1 - i];
//   }

//   difference = leftDi - rightDi;

//   if (difference < 0) {
//     difference = difference * -1;
//   }

//   return difference;
// }

// let test = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];
// console.log(diagonalDifference(test));

// Complete the plusMinus function below.  It should print out the ratio of positive,
// //negative and zero items in the array, each on a separate line rounded to six decimals.
// function plusMinus(arr) {
//   let neg = 0;
//   let pos = 0;
//   let zer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       neg++;
//     } else if (arr[i] > 0) {
//       pos++;
//     } else {
//       zer++;
//     }

//     negVal = neg / arr.length;
//     posVal = pos / arr.length;
//     zerVal = zer / arr.length;
//   }

//   negVal = (neg / arr.length).toFixed(6);
//   posVal = (pos / arr.length).toFixed(6);
//   zerVal = (zer / arr.length).toFixed(6);

//   console.log(negVal);
//   console.log(posVal);
//   console.log(zerVal);
// }

// let test = [1, 3, 0, 2, 5, 6, 8, 0, 3, 4];

// plusMinus(test);
