
function getComputerChoice()
{
    const choice = Math.random() * 10;
    if(choice <= 3)
    {
        return "rock";
    }
    else if(choice <= 6)
    {
        return "paper";
    }
    return "scissor";
}

function humanChoiceIcon(choice)
{
    if(choice == "rock")
    {
        humanIcon.innerHTML = '<img src="./icons/humanChoice/rock-sign.jpeg" alt="rock sign">';
    }
    else if(choice == "paper")
    {
        humanIcon.innerHTML = '<img src="./icons/humanChoice/paper-sign.jpeg" alt="paper sign">';
    }
    else if(choice == "scissor")
    {
        humanIcon.innerHTML = '<img src="./icons/humanChoice/scissor-sign.jpeg" alt="scissor sign">';
    }
    else
    {
        humanIcon.innerHTML = '<img src="./icons/human-icon.jpg" alt="human icon">';
    }
}

function computerChoiceIcon(choice)
{
    if(choice == "rock")
    {
        computerIcon.innerHTML = '<img src="./icons/computerChoice/invert-rock-sign.jpeg" alt="rock sign">';
    }
    else if(choice == "paper")
    {
        computerIcon.innerHTML = '<img src="./icons/computerChoice/invert-paper-sign.jpeg" alt="paper sign">';
    }
    else if(choice == "scissor")
    {
        computerIcon.innerHTML = '<img src="./icons/computerChoice/invert-scissor-sign.jpeg" alt="scissor sign">';
    }
    else
    {
        computerIcon.innerHTML = '<img src="./icons/computer-icon.png" alt="computer icon">';
    }
}

function colorChange(win = 0)
{
    if(win == 1)
    {
        humanIcon.setAttribute("style", "border-color : green");
        computerIcon.setAttribute("style", "border-color : red");
    }
    else if(win == 0)
    {
        humanIcon.setAttribute("style", "border-color : red");
        computerIcon.setAttribute("style", "border-color : green");
    }
    else
    {
        humanIcon.setAttribute("style", "border-color : black");
        computerIcon.setAttribute("style", "border-color : black");
    }
}

function playRound(humanChoice , computerChoice)
{
    humanChoiceIcon(humanChoice);
    computerChoiceIcon(computerChoice);
    if(humanChoice.toUpperCase() == computerChoice.toUpperCase())
    {
        result.textContent = ("Tie, both chose " + computerChoice);
        colorChange(0.5);
    }
    else if(humanChoice.toUpperCase() == "ROCK")
    {
        if(computerChoice == "scissor")
        {
            colorChange(1);
            result.textContent = ("You win! Rock beats Scissor");
            humanScore += 1;
        }
        else 
        {
            colorChange();
            result.textContent = ("You lose! Paper beats Rock");
            computerScore += 1;
        }
    }
    else if(humanChoice.toUpperCase() == "PAPER")
    {
            if(computerChoice == "scissor")
            {
                colorChange();
                result.textContent = ("You lose! Scissor beats Paper");
                computerScore += 1;
            }
            else 
            {
                colorChange(1);
                result.textContent = ("You win! Paper beats Rock");
                humanScore += 1;
            }
    }
    else if(humanChoice.toUpperCase() == "SCISSOR")
    {
        if(computerChoice == "paper")
        {
            colorChange(1);
            result.textContent = ("You win! Scissor beats Paper");
            humanScore += 1;
        }
        else 
        {
            colorChange();
            result.textContent = ("You lose! Rock beats Scissor");
            computerScore += 1;
        }
    }
    const score = document.querySelector("#score");
    score.textContent = humanScore + " - " + computerScore;
    if(humanScore == 5)
    {
        result.textContent = "You win!😊";
    }
    else if(computerScore == 5)
    {
        result.textContent = "You lose! Computer wins 😙"
    }
}

function reset()
{
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Play again!!";
    computerChoiceIcon("reset");
    humanChoiceIcon("reset");
    humanIcon.setAttribute("style", "border-color : black");
    computerIcon.setAttribute("style", "border-color : black");
}

let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#result");
const score = document.querySelector("#score");
score.textContent = humanScore + " - " + computerScore;
const humanIcon = document.querySelector("#human-choice");
const computerIcon = document.querySelector("#computer-choice");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        const computerSelection = getComputerChoice();
        if(humanScore == 5 || computerScore == 5 || button.id == "reset")
        {
            reset();
            score.textContent = humanScore + " - " + computerScore;
            
        }
        else
        {
            playRound(button.id, computerSelection);
        }
    });
});

