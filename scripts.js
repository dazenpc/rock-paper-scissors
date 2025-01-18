let humanScore = 0
let computerScore = 0    
    
function getComputerChoice(){
    let choiceNo = Math.floor(Math.random() * 3)
    if(choiceNo == 0) return "rock"
    else if(choiceNo == 1) return "paper"
    else return "scissors"
}

function getHumanChoice(){
    let validEntry = false
    while(!validEntry){
        let choice = prompt("Rock, Paper & Scissors");
        if(choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors"){
            return  choice
        }
        alert("Please enter a valid choice") 
    }
}


function playGame(){
    
    let roundNo = 1
    
    while(roundNo <= 5){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(computerSelection, humanSelection)
        roundNo++
    }
    let winner = (humanScore > computerScore)? "You" : (humanScore == computerScore)? "No one" : "Computer"
    console.log("Game over!")
    console.log(`Your score : ${humanScore}`)
    console.log(`Computer score : ${computerScore}`)
    console.log(`Winner : ${winner}`)
    
}

function playRound(computerChoice, humanChoice){
    let humanChoiceLower = humanChoice.toLowerCase()
    let computerChoiceLower = computerChoice.toLowerCase()

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

    if(humanScore > computerScore){
        console.log("You Win!!")
        console.log(`${humanChoiceLower} beats ${computerChoiceLower}`)
    }
    else if(computerScore > humanScore){
        console.log("You Lose!!")
        console.log(`${humanChoiceLower} loses to ${computerChoiceLower}`)
    }
    else{
        console.log("It's a draw")
    }
}



