// TODO: Write your gambling application here.
const stratchcards = document.querySelectorAll(".scratchcard");
const balance = document.getElementById("balance");
let score = 100;
stratchcards.forEach((card) => {
  card.addEventListener("click", () => {
    if (score > 0 && card.dataset.scratched !== "true") {
      card.innerText = card.dataset.amount;
      card.dataset.scratched = true;
      const cardValue = parseInt(card.innerText, 10);
      score = score - 10 + cardValue;
      balance.innerText = score;
    };
  });
});

// const balance = document.querySelector("#balance");
// const scratchcards = document.querySelectorAll(".scratchcard");
// const price = 10;
//
// scratchcards.forEach((scratchcard) => {
//   scratchcard.addEventListener("click", () => {
//     const currentBalance = parseInt(balance.innerText, 10);
//     const scratchcardAmount = parseInt(scratchcard.dataset.amount, 10);
//     if (currentBalance > 0 && scratchcard.dataset.scratched !== "true") {
//       scratchcard.dataset.scratched = "true";
//       balance.innerText = currentBalance - price + scratchcardAmount;
//       scratchcard.innerText = `${scratchcardAmount}€`;
//     }
//   });
// });
