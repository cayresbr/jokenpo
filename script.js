const result = document.querySelector(".result");
const yourScore = document.querySelector("#your-score");
const iaScore = document.querySelector("#ia-score");
const empate = document.querySelector("#empates");

let yourScoreNumber = 0;
let iaScoreNumber = 0;
let empateNumber = 0;

const GAME_OPTION = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor'
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playIa());
};

const playIa = () => {
  const choices = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSOR];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, ia) => {
  if (human === ia) {
    empateNumber++;
    empate.innerHTML = empateNumber;
    result.innerHTML = "Deu empate!";
  } else if (
    (human === GAME_OPTION.ROCK && ia === GAME_OPTION.SCISSOR) ||
    (human === GAME_OPTION.PAPER && ia === GAME_OPTION.ROCK) ||
    (human === GAME_OPTION.SCISSOR && ia === GAME_OPTION.PAPER)
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
