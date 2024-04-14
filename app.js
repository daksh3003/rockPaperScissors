let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
};

const drawGame = ()=>{
// console.log("draw game");

// message.classList.remove("userWin");
// message.classList.remove("computerWin");
message.innerText= "Game was draw! Play again.";
message.style.backgroundColor = "#081b31"
};

const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        // console.log("you win!");
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "lightgreen";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        // console.log("computer wins!");
        message.innerText = `Computer Wins! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice)=>{
    // console.log("user-choice =", userChoice);
    //generating computer choice
    const computerChoice = getComputerChoice();
    // console.log(`computer choice = ${computerChoice}`);

    if(userChoice===computerChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice === "paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = computerChoice === "scissors"? false:true;
        }
        else{
            userWin = computerChoice === "rock"? false:true;
        }

        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});