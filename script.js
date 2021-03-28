let totalCards = 0;
let matchMake = [];
let victoryState = null;

// Joga a carta para o usuário
function playCard() {
  const start = document.getElementById("start");
  start.classList.add("-none");

  while (totalCards < 21) {
    const cardNumber = Math.floor(Math.random() * 13) + 1;
    const gamePlay = {
      cardNumber,
      naipeCard: Math.floor(Math.random() * 4) + 1,
      score: cardNumber <= 9 ? cardNumber : 10,
    };

    matchMake.push(gamePlay);
    totalCards += gamePlay.score;

    if (totalCards === 21) {
      victoryState = true;
    } else if (totalCards > 21) {
      victoryState = false;
    }
  }
  gameOver(victoryState);
}

// Mostra a tela de vitoria ou derrota
function gameOver(victoryState) {
  const gameOver = document.getElementById("game-over");
  const divCard = document.getElementById("display-card");

  if (victoryState) {
    document.getElementById("situation").innerHTML = "Você ganhou! :)";
    gameOver.classList.add("win");
  } else {
    document.getElementById("situation").innerHTML = "Você perdeu! :(";
    gameOver.classList.add("lose");
  }

  displayCards(divCard);
  gameOver.classList.remove("-none");
}

// Mostra as cartas na tela de vitoria/derrota
function displayCards(divCard) {
  matchMake.forEach((gamePlay, index) => {
    const card = document.createElement("img");
    const naipeName = getNaipeName(gamePlay.naipeCard);
    card.src = `/img/${gamePlay.cardNumber}-${naipeName}.png`;
    card.id = index;
    card.className = "end-game";
    divCard.appendChild(card);
  });
}

// Seleciona o naipe da carta que será mostrada na tela de vitoria/derrota
function getNaipeName(naipeIndex) {
  const naipes = {
    1: "ouro",
    2: "copas",
    3: "paus",
    4: "espada",
  };
  return naipes[naipeIndex];
}

//Inicia o jogo
function startGame() {
  const start = document.getElementById("start");
  start.classList.add("-none");
}

//Restarta o jogo
function restartGame() {
  location.reload();
  return false;
}
