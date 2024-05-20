let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];
let dice = document.querySelectorAll("img");
let currentPlayer = 1;
function roll() {
  dice.forEach((die) => die.classList.add("shake"));
  setTimeout(() => {
    dice.forEach((die) => die.classList.remove("shake"));

    let dieOneValue = Math.floor(Math.random() * 6) + 1; // Dice values should be 1-6
    let dieTwoValue = Math.floor(Math.random() * 6) + 1;
    let total = dieOneValue + dieTwoValue;

    console.log(dieOneValue, dieTwoValue);

    document
      .querySelector("#die-1")
      .setAttribute("src", images[dieOneValue - 1]);
    document
      .querySelector("#die-2")
      .setAttribute("src", images[dieTwoValue - 1]);

    // game rules

    let message = `Player ${currentPlayer}`;
    if (total === 7) {
      message += " 🎖🎉🎉wins!";
     
    } else if (total === 9) {
      message += " 😥loses!";
    } else {
      message += "'s  turn";
      currentPlayer = currentPlayer === 1 ? 2 : 1;
    }

    document.querySelector("#total").innerHTML = message;
  }, 1996);
}
roll();
