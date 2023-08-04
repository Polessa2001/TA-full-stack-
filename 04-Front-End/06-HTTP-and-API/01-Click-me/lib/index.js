const displayAlertOnButtonClick = () => {
  const btn = document.querySelector(".btn-success");
  btn.addEventListener("click", () => {
    alert("Thank you!");
  });
  // TODO: Select the big green button
  // TODO: Bind the `click` event to the button
  // TODO: On click, display `Thank you!` in a JavaScript alert!
};

displayAlertOnButtonClick(); // Do not remove!
