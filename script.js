// function getHumanChoice(){
//     let myChoice=prompt("Enter your choice: Rock, Paper or Scissor").toLowerCase();
//     return myChoice;
// }

function getComputerChoice(){
    let choice=0+Math.floor(Math.random()*3);
    if(choice==0){
        return "rock";
    }
    else if(choice==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

let result=document.querySelector('#result');
let myScore=0, compScore=0;

let yourScore=document.querySelector('#yourScore');
yourScore.textContent=myScore;
let computerScore=document.querySelector('#computerScore');
computerScore.textContent=compScore;

let userChoice=document.querySelector('#userChoice');
let computerChoice=document.querySelector('#computerChoice');

function playRound(myChoice, compChoice) {
    userChoice.textContent=(`Your choice is ${myChoice}`);
    computerChoice.textContent=(`Computer's choice is ${compChoice}`);
    if(myChoice==compChoice){
        result.textContent="Match drawn";
    }
    else if((myChoice=="rock" && compChoice=="scissor") ||
        (myChoice=="scissor" && compChoice=="paper") ||
        (myChoice=="paper" && compChoice=="rock")){
            result.textContent="You win this game";
            myScore++;
    }
    else{
        result.textContent="You lose this game";
        compScore++;
    }
    yourScore.textContent=myScore;
    computerScore.textContent=compScore;
}


// function playGame(){
//     for(let i=0;i<5;i++){
//         const myChoice = getHumanChoice();
//         const compChoice = getComputerChoice();
//         playRound(myChoice, compChoice);
//     }
//     if(myScore==compScore){
//         console.log("Game drawn");
//     }
//     else if(myScore>compScore){
//         console.log("You won the Game");
//     }
//     else{
//         console.log("You lost. Game Over!");
//     }
// }


// playGame();

function Rock(){
    let userChoice='rock';
    let compChoice=getComputerChoice();
    playRound(userChoice,compChoice);
}

function Paper(){
    let userChoice='paper';
    let compChoice=getComputerChoice();
    playRound(userChoice,compChoice);
}

function Scissor(){
    let userChoice='scissor';
    let compChoice=getComputerChoice();
    playRound(userChoice,compChoice);
}

let rock=document.querySelector("#rock");
rock.addEventListener("click",(e)=>Rock());
let paper=document.querySelector("#paper");
paper.addEventListener("click",(e)=>Paper());
let scissor=document.querySelector("#scissor");
scissor.addEventListener("click",(e)=>Scissor());