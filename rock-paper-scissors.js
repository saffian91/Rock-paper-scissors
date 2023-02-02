let icons = document.querySelectorAll(".icon");
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let choices = [rock, paper, scissors];
let restartButton = document.querySelector(".button")

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        clearPlayerChoices();
        let dataIcon = icon.getAttribute("data-icon");
        let playerDisplay = document.querySelector("." + dataIcon);
        playerDisplay.style.display="block";
        compDisplayIcon(icon);
    })
});
restartButton.addEventListener("click", () => {
    clearPlayerChoices();
    clearCompChoices();
});

function compChoiceRandom () {
    let randy = Math.floor((Math.random() * 3));
        return choices[randy];
};

function compDisplayIcon (playerChoice) {
    clearCompChoices();
    let icon = compChoiceRandom();
    let dataIcon = icon.getAttribute("data-icon-comp");
    let compDisplay = document.querySelector("." + dataIcon);
    compDisplay.style.display="block";
    document.querySelector(".result").innerHTML = checkGameResult(playerChoice, icon);
};

function clearPlayerChoices () {
    let playerDisplayIcons = document.querySelectorAll(".player-choice");
    playerDisplayIcons.forEach(element => {
        element.style.display="none";
    });
};

function clearCompChoices () {
    let compDisplayIcons = document.querySelectorAll(".comp-choice");
    compDisplayIcons.forEach(element => {
        element.style.display="none";
    });
};

function checkGameResult (playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        return "draw"
    }
    if (playerChoice == rock && compChoice == paper) {
        return "compChoice wins"
    }
    if (playerChoice == rock && compChoice == scissors) {
        return "playerChoice wins"
    }
    if (playerChoice == scissors && compChoice == rock) {
        return "compChoice wins"
    }
    if (playerChoice == scissors && compChoice == paper) {
        return "playerChoice wins"
    }
    if (playerChoice == paper && compChoice == scissors) {
        return "compChoice wins"
    }
    if (playerChoice == paper && compChoice == rock) {
        return "playerChoice wins"
    }
    if (compChoice == rock && playerChoice == paper) {
        return "playerChoice wins"
    }
    if (compChoice == rock && playerChoice == scissors) {
        return "compChoice wins"
    }
    if (compChoice == scissors && playerChoice == rock) {
        return "playerChoice wins"
    }
    if (compChoice == scissors && playerChoice == paper) {
        return "compChoice wins"
    }
    if (compChoice == paper && playerChoice == scissors) {
        return "playerChoice wins"
    }
    if (compChoice == paper && playerChoice == rock) {
        return "compChoice wins"
    }
    };
