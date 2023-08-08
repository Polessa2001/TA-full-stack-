// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector("input");
const list = document.getElementById("results");

const drawResponseList = (data) => {
  console.log(data);
  list.innerHTML = '';
  data.words.forEach((word) => {
    list.insertAdjacentHTML('beforeend', `<li>${word}</li>`);
  });
};
const fillTheList = (e) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${e.target.value}`)
    .then(response => response.json)
    .then(data => drawResponseList(data));
};
input.addEventListener("keyup", fillTheList);
