const choices = ["rock", "papper", "scissors"];

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    for (let i = 0; i <= choices.length; i++) {
        if (i === computerChoice) {
            computerChoice = choices[i];
        }
    }
    return computerChoice;
}

console.log(getComputerChoice())