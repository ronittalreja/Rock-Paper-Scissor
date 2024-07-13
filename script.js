const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('reset-score');

let score = 0;

rockButton.addEventListener('click', function() {
    playGame('Rock');
});

paperButton.addEventListener('click', function() {
    playGame('Paper');
});

scissorButton.addEventListener('click', function() {
    playGame('Scissors');
});

resetButton.addEventListener('click', function() {
    score = 0;
    updateScore();
});

function playGame(playerMove) {
    const randomnumber = Math.random();
    let computerMove = '';
    let result = '';

    if (randomnumber >= 0 && randomnumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomnumber >= 1/3 && randomnumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomnumber >= 2/3 && randomnumber < 1) {
        computerMove = 'Scissors';
    }

    if (computerMove === playerMove) {
        result = `<span style="color: yellow;">It's a Tie.</span>`;
    } else if (
        (computerMove === 'Rock' && playerMove === 'Scissors') ||
        (computerMove === 'Paper' && playerMove === 'Rock') ||
        (computerMove === 'Scissors' && playerMove === 'Paper')
    ) {
        result = `<span style="color: red;">You Lose.</span>`;
       
    } else {
        result = `<span style="color: green;">You Win.</span>`;
        score++; // Increment score if player wins
    }

    updateScore();

    const resultTextElement = document.getElementById('result-text');
    resultTextElement.innerHTML = `Computer picked ${computerMove}. You picked ${playerMove}. ${result}`;
}

function updateScore() {
    scoreElement.textContent = score;
}

const text = "ROCK PAPER SCISSORS..."; // Text you want to type out
const delay = 100; // Delay between each letter (adjust as needed)
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-heading").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, delay);
    }
}

// Start typing animation when page loads
window.onload = function() {
    typeWriter();
};

