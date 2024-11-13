const resultDisplay = document.getElementById("result");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const tiesDisplay = document.getElementById("ties");
const computerChoiceDisplay = document.getElementById("computerChoice");

let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice) {
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = `Computer last chose: ${computerChoice}`;
    const result = determineWinner(userChoice, computerChoice);

    resultDisplay.textContent = result;

    switch (result) {
        case "You win!":
            wins++;
            winsDisplay.textContent = `${wins}`;
            document.getElementById("pc-choise").style.backgroundColor = "#459b42";
            document.getElementById("pc-choise").style.boxShadow = "0px 0px 100px #459b42";
            break;
        case "You lose!":
            losses++;
            lossesDisplay.textContent = `${losses}`;
            document.getElementById("pc-choise").style.boxShadow = "0px 0px 100px #b42323";
            document.getElementById("pc-choise").style.backgroundColor = "#b42323";

            break;
        case "It's a tie!":
            ties++;
            tiesDisplay.textContent = `${ties}`;
            document.getElementById("pc-choise").style.boxShadow = "0px 0px 100px #d1d43c";
            document.getElementById("pc-choise").style.backgroundColor = "#d1d43c";
           
            break;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(randomIndex);
if (randomIndex == 0){
    document.getElementById("computerChoice").src="1.png";
    
}
else if (randomIndex == 1){
    document.getElementById("computerChoice").src="2.png";
}
else if (randomIndex == 2){
    document.getElementById("computerChoice").src="3.png";
}
    return choices[randomIndex];
  }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    const winningConditions = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"

    };

    return userChoice === winningConditions[computerChoice] ? "You win!" : "You lose!";
}