let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    }
    if (letter === "s") {
        return "Scissor";
    }
}

function win(user, computer) {
    userscore++;
    userscore_span.innerHTML = userscore;
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUser}   beats ${convertToWord(computer)}${smallcomp}   . You Win!`;
}
function loose(user, computer) {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUser}   looses to ${convertToWord(computer)}${smallcomp}   . You Loose!`;
}
function draw(user, computer) {
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUser}   draws with ${convertToWord(computer)}${smallcomp} `;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });


    paper_div.addEventListener('click', function () {
        game("p");
    });


    scissors_div.addEventListener('click', function () {
        game("s");
    });

}
main();
