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
