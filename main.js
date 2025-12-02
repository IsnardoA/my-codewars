// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string.You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters.For strings with exactly 2 characters, return an empty string.

// function removeChar(str){
//   return str.substring(1, str.length - 1)
// }
// console.log(removeChar('IisnardoO'))

// Rules of the "Rock, Paper, Scissors" game are:
// Rock beats Scissors
// Scissors beat Paper,
// Paper beats Rock.
// Let's play! You have to return which player won! In case of a draw return Draw!.

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw";
//   let rules = {rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!"
//   }else{
//     return "Player 2 won!"
//   }
// }
// console.log(rps('scissors', 'rock'))

// Task
// You get an array of numbers, return the sum of all of the positives ones.
// function positiveSum(arr){
//   let sum = 0;
//   for( let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       sum = sum + arr[i]
//     }
//   }
//   return sum
// }
// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
// } 
// console.log(positiveSum([1, 2, 3, 4, 5]))


// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string / char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }
// console.log(basicOp('*',20,10))

// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }


// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function repeatStr(n, s) {
//   let starterString = '';

//   for (let i = 0; i < n; i++) {
//     starterString += s
//   }
//   return starterString;
// }
// repeatStr = (n, s) => s.repeat(n)
// console.log(repeatStr(5, 'Hi '))

// Write a function to split a string and convert it into an array of words.
// function stringToArray(string) {
//   return string.split(" ")
// }
// console.log(stringToArray("Happy Birthday"))

// Given an array of integers, return a new array with each value doubled.
// function maps(x) {
//   return x.map((num) => num * 2)
// }
// console.log(maps([2,4,6]))

// A hero is on his way to the castle to complete his mission.However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive ?
// Return true if yes, false otherwise:)
// function hero(bullets, dragons) {
//   //Get Coding!
//   return bullets / dragons >= 2;
// }

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S.Each array includes only integer numbers.Output is a number too.
// function arrayPlusArray(arr1, arr2){
//   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }
// console.log(arrayPlusArray([9,8,7], [6,5,4]))
// function arrayPlusArray(arr1, arr2){
//   let arr = [...arr1, ...arr2];
//   return arr.reduce((a, b) => a + b)
// }
// console.log(arrayPlusArray([20, 21], [22, 23]))


// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// function century(year){
// return Math.ceil( year / 100)
// }
// const century = year => Math.ceil(year / 100)
// console.log(century(2300))