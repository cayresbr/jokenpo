const result = document.querySelector(".result");
const yourScore = document.querySelector("#your-score");
const iaScore = document.querySelector("#ia-score");
const empate = document.querySelector("#empates");

let yourScoreNumber = 0;
let iaScoreNumber = 0;
let empateNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playIa());
};

const playIa = () => {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, ia) => {
  if (human === ia) {
    empateNumber++;
    empate.innerHTML = empateNumber;
    result.innerHTML = "Deu empate!";
  } else if (
    (human === "rock" && ia === "scissor") ||
    (human === "paper" && ia === "rock") ||
    (human === "scissor" && ia === "paper")
  ) {
    yourScoreNumber++;
    yourScore.innerHTML = yourScoreNumber;
    result.innerHTML = "Voce ganhou!";
  } else {
    iaScoreNumber++;
    iaScore.innerHTML = iaScoreNumber;
    result.innerHTML = "Voce perdeu!";
  }

  console.log(`Humano: ${human} Maquina: ${ia}`);
};
