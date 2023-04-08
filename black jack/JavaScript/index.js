// black jack

let name = prompt("Who is Playing?");
let chips = prompt("How many chips would you like to add?");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newcard-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = name + ": $" + chips;

function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1;
  if (number > 10) {
    return 10;
  } else if (number === 1) {
    return 11;
  } else {
    return number;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}
