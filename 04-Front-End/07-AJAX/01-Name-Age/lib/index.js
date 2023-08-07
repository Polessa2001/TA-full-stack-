const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  // TODO: Display your age with an AJAX call instead of the console.log()
  console.log(firstName);
  const agifyApiUrl = `https://api.agify.io/?name=${firstName}`;
  fetch(agifyApiUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("your-age").innerText = `You're ${data.age} years old.`; // Wait for parsing, allowing us to manipulate the data
    });
};

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
