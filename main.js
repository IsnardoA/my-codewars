// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string.You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters.For strings with exactly 2 characters, return an empty string.

// function removeChar(str) {
//   //You got this!
//   return str.substring(1, str.length - 1);
// };
// removeChar('eloquent')

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

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }