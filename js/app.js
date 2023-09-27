const words = ["chat", "chien", "non", "oui"];
let wordToGuess = "";
let guessedLetters = [];
let attempts = 6; 


function selectRandomWord() {
    wordToGuess = words[Math.floor(Math.random() * words.length)];
}    

function displayWord() {
    const motmystere = document.getElementById("motmystere");
    motmystere.innerHTML = wordToGuess
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
}


function updateLetterHistory() {
    const letterHistory = document.getElementById("letterHistory");
    letterHistory.textContent = `Lettres utilisées : ${guessedLetters.join(", ")}`;
}


function checkWin() {
    if (wordToGuess === displayWord().replace(/ /g, "")) {
        alert("Vous avez gagné !");
        resetGame();
    }
}


document.getElementById("guessButton").addEventListener("click", function () {
    const guessInput = document.getElementById("guessInput").value.toLowerCase();
    if (guessInput === wordToGuess) {
        alert("Vous avez gagné !");
        resetGame();
    } else {
        alert("Mauvaise réponse. La partie est terminée.");
        resetGame();
    }
});


document.getElementById("newGameButton").addEventListener("click", function () {
    resetGame();
});

document.addEventListener("keydown", function (event) {
    const keyPressed = event.key.toLowerCase();
    if (/^[a-z]$/.test(keyPressed) && guessedLetters.indexOf(keyPressed) === -1) {
        guessedLetters.push(keyPressed);
        displayWord();
        updateLetterHistory();
        checkWin();
    }
});

function resetGame() {
    selectRandomWord();
    guessedLetters = [];
    attempts = 6;
    displayWord();
    updateLetterHistory();
    document.getElementById("guessInput").value = "";
}


resetGame();