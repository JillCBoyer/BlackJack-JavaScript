let player = [];
let playerWins = 0;
let dealer = [];
let dealerWins = 0;

let score = 0;

//welcome message
console.log("$$$$$$ BlackJack Simulator $$$$$$");
console.log("        Best of 10 hands.");
console.log();

//generates deck
let deck = [
  { card: "Ace", suite: "Hearts", points: 1 },
  { card: "Ace", suite: "Spades", points: 1 },
  { card: "Ace", suite: "Diamonds", points: 1 },
  { card: "Ace", suite: "Clubs", points: 1 },

  { card: 2, suite: "Hearts", points: 2 },
  { card: 2, suite: "Spades", points: 2 },
  { card: 2, suite: "Diamonds", points: 2 },
  { card: 2, suite: "Clubs", points: 2 },

  { card: 3, suite: "Hearts", points: 3 },
  { card: 3, suite: "Spades", points: 3 },
  { card: 3, suite: "Diamonds", points: 3 },
  { card: 3, suite: "Clubs", points: 3 },

  { card: 4, suite: "Hearts", points: 4 },
  { card: 4, suite: "Spades", points: 4 },
  { card: 4, suite: "Diamonds", points: 4 },
  { card: 4, suite: "Clubs", points: 4 },

  { card: 5, suite: "Hearts", points: 5 },
  { card: 5, suite: "Spades", points: 5 },
  { card: 5, suite: "Diamonds", points: 5 },
  { card: 5, suite: "Clubs", points: 5 },

  { card: 6, suite: "Hearts", points: 6 },
  { card: 6, suite: "Spades", points: 6 },
  { card: 6, suite: "Diamonds", points: 6 },
  { card: 6, suite: "Clubs", points: 6 },

  { card: 7, suite: "Hearts", points: 7 },
  { card: 7, suite: "Spades", points: 7 },
  { card: 7, suite: "Diamonds", points: 7 },
  { card: 7, suite: "Clubs", points: 7 },

  { card: 8, suite: "Hearts", points: 8 },
  { card: 8, suite: "Spades", points: 8 },
  { card: 8, suite: "Diamonds", points: 8 },
  { card: 8, suite: "Clubs", points: 8 },

  { card: 9, suite: "Hearts", points: 9 },
  { card: 9, suite: "Spades", points: 9 },
  { card: 9, suite: "Diamonds", points: 9 },
  { card: 9, suite: "Clubs", points: 9 },

  { card: 10, suite: "Hearts", points: 10 },
  { card: 10, suite: "Spades", points: 10 },
  { card: 10, suite: "Diamonds", points: 10 },
  { card: 10, suite: "Clubs", points: 10 },

  { card: "Jack", suite: "Hearts", points: 10 },
  { card: "Jack", suite: "Spades", points: 10 },
  { card: "Jack", suite: "Diamonds", points: 10 },
  { card: "Jack", suite: "Clubs", points: 10 },

  { card: "Queen", suite: "Hearts", points: 10 },
  { card: "Queen", suite: "Spades", points: 10 },
  { card: "Queen", suite: "Diamonds", points: 10 },
  { card: "Queen", suite: "Clubs", points: 10 },

  { card: "King", suite: "Hearts", points: 10 },
  { card: "King", suite: "Spades", points: 10 },
  { card: "King", suite: "Diamonds", points: 10 },
  { card: "King", suite: "Clubs", points: 10 },
]

//deals two cards
const deal = () => {
  for (i = 0; i <= 1; i++) {
    let deckIndex = Math.floor((Math.random() * deck.length));
    player.push(deck[deckIndex]);
    console.log(`Player holds the ${player[i].card} of ${player[i].suite}...`);
    deck.splice(deck[deckIndex], 1);
  }

  console.log();

  for (j = 0; j <= 1; j++) {
    let deckIndex = Math.floor((Math.random() * deck.length));
    dealer.push(deck[deckIndex]);
    console.log(`Dealer holds the ${dealer[j].card} of ${dealer[j].suite}...`);
    deck.splice(deck[deckIndex], 1);
  }

  console.log(`with ${deck.length} cards remaining...`);
  console.log();
}

//determines winner
const winner = () => {
  let playerScore = player[0].points + player[1].points;
  let dealerScore = dealer[0].points + dealer[1].points;
  console.log(`Player has ${playerScore} points and dealer has ${dealerScore} points:`);

  if (playerScore === dealerScore) {//tie
    console.log("-------IT'S A TIE!-------");
  } else if (playerScore > 21 && dealerScore < 21) { //player busts
    console.log("$$$$$$$$$ DEALER WINS! $$$$$$$$$$");
    dealerWins++;
  } else if (playerScore < 21 && dealerScore > 21) { //dealer busts
    console.log("$$$$$$$$$ PLAYER WINS! $$$$$$$$$$");
    playerWins++;
  } else if (playerScore > dealerScore) {
    console.log("$$$$$$$$$ PLAYER WINS! $$$$$$$$$$");
    playerWins++;
  } else {
    console.log("$$$$$$$$$ DEALER WINS! $$$$$$$$$$");
    dealerWins++;
  }

  player.pop();
  player.pop();
  dealer.pop();
  dealer.pop();
}

//starts game
const hands = () => {
  for (k = 1; k <= 10; k++) {
    console.log("------------------------------------------");
    console.log();
    console.log(`------------ Round ${k} ---------------------`);
    console.log();

    deal();
    winner();
    console.log();
    console.log(`End of Round ${k}`);
    console.log(`Player: ${playerWins} ----- Dealer: ${dealerWins}`);
    console.log();
    if (k === 10) { //sums up games
      console.log();
      console.log("------------- FINAL TOTALS ----------------");
      console.log();
      console.log(`Player: ${playerWins} ----- Dealer: ${dealerWins}`);
      if (playerWins > dealerWins) {
        console.log("$$$$$$$$$ PLAYER WINS! $$$$$$$$$$");
      } else if (dealerWins > playerWins) {
        console.log("$$$$$$$$$ DEALER WINS! $$$$$$$$$$");
      } else {
        console.log("$$$$$$$$$ IT'S A TIE! $$$$$$$$$$");
      }
    }
  }
};

hands();




