// TODO: React to a click on the button!
const btn = document.getElementById("clickme");
const audio = new Audio('sound.mp3');
btn.addEventListener("click", () => {
  btn.innerText = "Bingo!";
  btn.classList.add("disabled");
  audio.play();
});
