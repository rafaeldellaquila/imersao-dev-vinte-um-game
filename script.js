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
  displayGameOver(totalCards, victoryState);
}

// Mostra a tela de vitoria ou derrota
function displayGameOver(totalCards, victoryState) {
  const gameOverDiv = document.getElementById("game-over");

  if (victoryState) {
    document.getElementById("situation").innerHTML =
      "Você fez " + totalCards + " pontos e ganhou! :)";
    gameOverDiv.classList.add("win");
  } else {
    document.getElementById("situation").innerHTML =
      "Você fez " + totalCards + " pontos e  perdeu! :(";
    gameOverDiv.classList.add("lose");
  }

  displayCards(gameOverDiv);
  gameOverDiv.classList.remove("-none");
}

// Mostra as cartas na tela de vitoria/derrota
function displayCards(gameOverDiv) {
  const divCard = document.createElement("div");
  divCard.id = "display-card";
  divCard.className = "display-card";

  matchMake.forEach((gamePlay, index) => {
    let card = document.createElement("img");
    let naipeName = getNaipeName(gamePlay.naipeCard);
    card.src = `https://raw.githubusercontent.com/rafaeldellaquila/vinte-um-game/master/img/${gamePlay.cardNumber}-${naipeName}.png`;
    card.id = index;
    card.className = "end-game";
    divCard.appendChild(card);
  });
  gameOverDiv.appendChild(divCard);
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

function restartGame() {
  const start = document.getElementById("start");
  const gameOverDiv = document.getElementById("game-over");
  const divCard = document.getElementById("display-card");

  totalCards = 0;
  matchMake = [];
  victoryState = null;
  divCard.remove();
  start.classList.remove("-none");
  gameOverDiv.classList.add("-none");
  gameOverDiv.classList.remove("lose", "win");
}
