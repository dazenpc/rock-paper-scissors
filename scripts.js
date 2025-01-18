let humanScore = 0
let computerScore = 0    
    
function getComputerChoice(){
    let choiceNo = Math.floor(Math.random() * 3)
    if(choiceNo == 0) return "rock"
    else if(choiceNo == 1) return "paper"
    else return "scissors"
}


function playRound(humanChoice){
    let humanChoiceLower = humanChoice.toLowerCase()
    let computerChoice = getComputerChoice();
    let computerChoiceLower = computerChoice.toLowerCase()
    const message = document.querySelector('.message-text')

    const myScore = document.querySelector('.myScore')
    const cScore = document.querySelector('.computerScore')

    if(humanChoiceLower == "rock"){
        if(computerChoiceLower == "scissors") humanScore++
        else if(computerChoiceLower == "paper") computerScore++
    }
    else if(humanChoiceLower == "paper"){
        if(computerChoiceLower == "rock") humanScore++
        else if(computerChoiceLower == "scissors") computerScore++
    }
    else{
        if(computerChoiceLower == "paper") humanScore++
        else if(computerChoiceLower == "rock") computerScore++
    }

    message.textContent = `Computer choice => ${computerChoice}. Your choice => ${humanChoiceLower}`;
    
    if(humanScore === 5 || computerScore === 5){
        let winner = (humanScore > computerScore)? "You" : "Computer"
        message.textContent = `Game over!! Winner ==> ${winner}`
        humanScore = 0;
        computerScore = 0;
    }
    myScore.textContent = humanScore;
    cScore.textContent = computerScore;
}




const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click",  () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

