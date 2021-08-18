let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("userscore");
let compScore_span = document.getElementById("compscore");
let scoreboard_div = document.querySelector(".scoreboard");
let result_div = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "p") {
    return "Paper";
  }
  if (letter === "s") {
    return "Scissors";
  }
}

function win(userChoice, compChoice) {
  let userWord = "user".fontsize(3).sub();
  let compWord = "comp".fontsize(3).sub();
  userScore++;
  let userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${userWord} beats ${convertToWord(compChoice)}${compWord}. You WIN!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 350);
}
function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  let userWord = "user".fontsize(3).sub();
  let compWord = "comp".fontsize(3).sub();
  let userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    compChoice
  )}${compWord} beats ${convertToWord(userChoice)}${userWord}. You LOSE.`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 350);
}
function tie(userChoice, compChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  let userWord = "user".fontsize(3).sub();
  let compWord = "comp".fontsize(3).sub();
  let userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${userWord} VS ${convertToWord(compChoice)}${compWord}. It's a TIE.`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 350);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();
