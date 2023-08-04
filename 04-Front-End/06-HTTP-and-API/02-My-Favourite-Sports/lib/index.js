// TODO: write your code here!
const boxes = document.querySelectorAll(".clickable");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

// const boxToggleActive = (event) => {
//   event.currentTarget.classList.toggle("active");
// };
//
// const boxOnClick = (box) => {
//   box.addEventListener("click", boxToggleActive);
// };
//
// boxes.forEach(boxOnClick);
