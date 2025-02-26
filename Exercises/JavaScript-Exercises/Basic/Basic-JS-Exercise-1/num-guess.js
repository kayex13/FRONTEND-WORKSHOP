function playAgain() {
const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * 100) + 1;

let guess;
let guessedCorrectly = false;

console.log(`Random Number (for debugging): ${randomNum}`);

for (let attempts = 0; attempts < 5; attempts++) {
  guess = prompt(`Guess the number chosen by the computer between ${minNum} and ${maxNum} in only 5 maximum guesses.`);
  guess = Number(guess);

  console.log(`Attempt ${attempts + 1}: User guessed ${guess}`);

  if(isNaN(guess) || guess < minNum || guess > maxNum) {
    alert(`Please enter a valid number between ${minNum} and ${maxNum}.`);
    console.log("Invalid input. Please enter a valid number.");
    attempts--;
    continue;
  } 

  if (guess === randomNum) {
    alert(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    console.log("User guessed the number correctly.");
    guessedCorrectly = true;
    break;
  } else if (guess > randomNum) {
    alert(`Lower. Try again.`);
    console.log("User guessed a number higher than the random number.");
  } else {
    alert(`Higher. Try again.`);
    console.log("User guessed a number lower than the random number.");
  }
}

if (!guessedCorrectly) {
    alert(`Game over! The correct number was ${randomNum}.`);
    console.log("User failed to guess the number.");
}

return true;
}

do {
    console.log("User wants to play again.");
    playAgain();
} while (confirm("Do you want to play again?"));