
function getComputerChoice()
{
    const choice = Math.random() * 10;
    if(choice <= 3)
    {
        return "Rock";
    }
    else if(choice <= 6)
    {
        return "Paper";
    }
    return "Scissor";
}

function getHumanChoice()
{
    const choice = prompt("Enter rock, paper or scissor:");
    return choice;
}

function playRound(humanChoice , computerChoice)
{
    if(humanChoice.toUpperCase() == computerChoice.toUpperCase())
    {
        console.log("Tie, both chose " + computerChoice);
    }
    else if(humanChoice.toUpperCase() == "ROCK")
    {
        if(computerChoice == "Scissor")
        {
            console.log("You win! Rock beats Scissor");
            humanScore += 1;
        }
        else 
        {
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
        }
    }
    else if(humanChoice.toUpperCase() == "PAPER")
    {
            if(computerChoice == "Scissor")
            {
                console.log("You lose! Scissor beats Paper");
                computerScore += 1;
            }
            else 
            {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            }
    }
    else if(humanChoice.toUpperCase() == "SCISSOR")
    {
        if(computerChoice == "Paper")
        {
            console.log("You win! Scissor beats Paper");
            humanScore += 1;
        }
        else 
        {
            console.log("You lose! Rock beats Paper");
            computerScore += 1;
        }
    }
    else
    {
        console.log("Invalid Input");
        playRound(getHumanChoice(), getComputerChoice());
    }
}

function playGame()
{

    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("You " + humanScore + " : " + computerScore + " Computer");
    if(humanScore > computerScore)
    {
        console.log("You win!");
    }
    else if(humanScore < computerScore)
    {
        console.log("You lose!");
    }
    else
    {
        console.log("Tied!")
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
