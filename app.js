const choices = ["rock", "paper", "scissors"];

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
let humanChoice = prompt("Rock, Paper, Scissors");

const getHumanChoice = () => {
    

    humanChoice = humanChoice.toLowerCase();

    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid selection! Choose between Rock, Paper or Scissors");
    }
    return humanChoice;
    
}

// getHumanChoice()

let computerScore = 0;
let humanScore = 0;

const playGame = () => {


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
 
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
    
    playRound(humanSelection, computerSelection)

    console.log("Human Choice: " + humanSelection);
    console.log("Computer Choice: " + computerSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    while (humanScore < 5) {
        humanChoice = prompt(`Human Score: ${humanScore} - Computer Score: ${computerScore}
            Next Round`)
        playGame()
    }
    
    if (humanScore === 5) {
        console.log("You Win!")
    }
    
    if (computerScore === 5) {
        console.log("You Loose!")
    }

}

playGame();

