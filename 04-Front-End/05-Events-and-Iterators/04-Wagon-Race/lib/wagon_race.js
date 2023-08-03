// TODO: write your code here
const First = document.querySelectorAll("#player1-race td");
const Second = document.querySelectorAll("#player2-race td");
let indexFirst = 0;
let indexSecond = 0;

const race = document.addEventListener("keyup", (event) => {
  if ((indexFirst === First.length - 1) || (indexSecond === First.length - 1)) {
    const w = (indexFirst === First.length - 1) ? alert('playerOne is the winner') : alert('playerTwo is the winner');
    document.location.reload();
  }
  if (event.key === "q") {
    First[indexFirst].classList.remove('active');
    First[indexFirst + 1].classList.add('active');
    indexFirst += 1;
  } else if (event.key === "p") {
    Second[indexSecond].classList.remove('active');
    Second[indexSecond + 1].classList.add('active');
    indexSecond += 1;
  }
});
