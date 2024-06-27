const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    for (let i = 0; i <= choices.length; i++) {
        if (i === computerChoice) {
            computerChoice = choices[i];
        }
    }
    return computerChoice;
}

// console.log(getComputerChoice());

const getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper, Scissors");

    humanChoice = humanChoice.toLowerCase();

    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid selection! Choose between Rock, Paper or Scissors");
    }
    console.log(humanChoice);
    return humanChoice;
    
}

// getHumanChoice()

const playRound = (humanChoice, computerChoice) => {
      
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        console.log("You win this round!")
    } else {
        computerScore++;
        console.log("Computer wins this round");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human Choice: " + humanSelection);
console.log("Computer Choice: " + computerSelection);
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
