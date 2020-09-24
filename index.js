let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

const diceGallery = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function player1() {
  let result1 = diceGallery[randomNumber1 - 1];
  document.querySelectorAll("img")[0].setAttribute("src", result1);
}

function player2() {
  let result2 = diceGallery[randomNumber1 - 1];
  document.querySelectorAll("img")[1].setAttribute("src", result2);
}

// const dice1 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice1.png");
// const dice2 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice2.png");
// const dice3 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice3.png");
// const dice4 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice4.png");
// const dice5 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice5.png");
// const dice6 = document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", "images/dice6.png");

// function dicePicker() {
//   if (randomNumber1 === 1) {
//     dice1;
//   } else if (randomNumber1 === 2) {
//     dice2;
//   } else if (randomNumber1 === 3) {
//     dice3;
//   } else if (randomNumber1 === 4) {
//     dice4;
//   } else if (randomNumber1 === 5) {
//     dice5;
//   } else if (randomNumber1 === 6) {
//     dice6;
//   }
// }
