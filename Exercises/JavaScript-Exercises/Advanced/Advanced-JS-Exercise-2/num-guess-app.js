const minNum = 1;
const maxNum = 100;
let randomNum = Math.floor(Math.random() * 100) + 1;

let maxAttempts = 5;
let attempts = 0;

const guessInput = document.querySelector("#guess-input");
const guessButton = document.querySelector("#guess-btn");
const guessResult = document.querySelector("#result-div");
const previousGuesses = document.querySelector("#guess-container");
const newGameButton = document.querySelector("#new-game-div button");
const selectDifficulty = document.querySelector("#difficulty");

guessButton.addEventListener("click", function(callback) {
    let guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        guessResult.textContent = `Please enter a valid number between ${minNum} and ${maxNum}.`;
        return;
    }

    attempts++;
    
    if (guess === randomNum) {
        guessResult.textContent = `Congrats! You win! The number was ${randomNum}.`;
        guessResult.style.color = "darkorchid";
        addGuessToHistory(guess, "darkorchid");
        endGame();
    } else if (guess > randomNum) {
        guessResult.textContent = `Lower!`;
        guessResult.style.color = "red";
        addGuessToHistory(guess, "red");
    } else {
        guessResult.textContent = `Higher!`;
        guessResult.style.color = "green";
        addGuessToHistory(guess, "green");
    }
    
    if (attempts === maxAttempts && guess !== randomNum) {
        guessResult.textContent = `Game over! The number was ${randomNum}.`;
        guessResult.style.color = "black";
        endGame();
    }

    guessInput.value = "";
    });

function addGuessToHistory(guess, color) {
    const guessDiv = document.createElement("div");
    guessDiv.textContent = guess;
    guessDiv.classList.add("previous-guess");
    guessDiv.style.backgroundColor = color;
    previousGuesses.appendChild(guessDiv);
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    newGameButton.style.display = "block";
}

newGameButton.addEventListener("click", function(callback) {
    setDifficulty();

    attempts = 0;
    randomNum = Math.floor(Math.random() * 100) + 1;

    guessResult.textContent = "";
    previousGuesses.innerHTML = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    newGameButton.style.display = "none";
});

function setDifficulty() {
    let difficulty = selectDifficulty.value;

    if (difficulty === "easy") {
        maxAttempts = 10;
    } else if (difficulty === "medium") {
        maxAttempts = 5;
    } else {
        maxAttempts = 3;
    }

    attempts = 0;
}

selectDifficulty.addEventListener("change", function(callback) {
    setDifficulty();
    newGameButton.click();
});