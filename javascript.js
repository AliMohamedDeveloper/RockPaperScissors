function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);

    if (ran == 0) {
        return "Rock";
    }

    else if (ran == 1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'Rock' , 'Paper' or 'Scissors'");

    return humanChoice;
}


console.log(getComputerChoice());
console.log(getHumanChoice());
