const rock = document.querySelector(".fa-hand-rock");
const paper = document.querySelector(".fa-hand-paper");
const scissors = document.querySelector(".fa-hand-scissors");
const appendUserChoice = document.querySelector(".playerChose");
const appendComputerChoice = document.querySelector(".computerChose");
const appendWinner = document.querySelector(".winner");
const appendUserWinCount = document.querySelector(".userWinCount");
const appendComputerWinCount = document.querySelector(".computerWinCount");
const gamesPlayed = document.querySelector(".gamesPlayed");

let userWins = 0;
let computerWins = 0;

    rock.addEventListener("click", ()=>{
        let rng = Math.floor(Math.random()*3);
        appendUserChoice.innerHTML = `You chose: rock`;
        if(rng == 0){
            appendComputerChoice.innerHTML = `Computer chose: rock`;
            appendWinner.innerHTML = `The match is a tie.`;
        }
        if(rng == 1){
            appendComputerChoice.innerHTML = `Computer chose: paper`;
            appendWinner.innerHTML = `Computer wins!`;
            computerWins++;
        }
        if(rng == 2){
            appendComputerChoice.innerHTML = `Computer chose: scissors`;
            appendWinner.innerHTML = `You win!`;
            userWins++;
        }
        append();
    });

    paper.addEventListener("click", ()=>{
        let rng = Math.floor(Math.random()*3);
        appendUserChoice.innerHTML = `You chose: paper`;
        if(rng == 0){
            appendComputerChoice.innerHTML = `Computer chose: rock`;
            appendWinner.innerHTML = `You win!`;
            userWins++;
        }
        if(rng == 1){
            appendComputerChoice.innerHTML = `Computer chose: paper`;
            appendWinner.innerHTML = `The match is a tie.`;
        }
        if(rng == 2){
            appendComputerChoice.innerHTML = `Computer chose: scissors`;
            appendWinner.innerHTML = `Computer wins!`;
            computerWins++;
        }
        append();
    });

    scissors.addEventListener("click", ()=>{
        let rng = Math.floor(Math.random()*3);
        appendUserChoice.innerHTML = `You chose: scissors`;
        if(rng == 0){
            appendComputerChoice.innerHTML = `Computer chose: rock`;
            appendWinner.innerHTML = `Computer wins!`;
            computerWins++;
        }
        if(rng == 1){
            appendComputerChoice.innerHTML = `Computer chose: paper`;
            appendWinner.innerHTML = `You win!`;
            userWins++;
        }
        if(rng == 2){
            appendComputerChoice.innerHTML = `Computer chose: scissors`;
            appendWinner.innerHTML = `The match is a tie.`;
        }
        append();
    });

    append = () =>{
        appendUserWinCount.innerHTML = (userWins > 1 || userWins == 0) ? `${userWins} wins`: `${userWins} win`;
        appendComputerWinCount.innerHTML = (computerWins > 1 || computerWins == 0) ? `${computerWins} wins`: `${computerWins} win`;
        gamesPlayed.innerHTML++;
    };