// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string.You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters.For strings with exactly 2 characters, return an empty string.
function removeChar(str) {
  //You got this!
  return str.substring(1, str.length - 1);
};
removeChar('eloquent')

// Rules of the "Rock, Paper, Scissors" game are:
// Rock beats Scissors
// Scissors beat Paper,
// Paper beats Rock.
// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw";
  let rules = {rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!"
  }else{
    return "Player 2 won!"
  }
}
console.log(rps('scissors', 'rock'))
