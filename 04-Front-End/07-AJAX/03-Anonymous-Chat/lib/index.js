const id = 1333;
const url = `https://wagon-chat.herokuapp.com/${id}/messages`;

const comment = document.getElementById("your-message");
const userName = document.getElementById("your-name");
const refresh = document.getElementById("refresh");
const messages = document.querySelector(".list-unstyled");
const form = document.getElementById('comment-form');

const refreshChat = () => {
  messages.innerHTML = "";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.messages.forEach((message) => {
        const minutesAgo = Math.round((new Date() - new Date(message.created_at)) / 60000);
        const msgElement = `<li>${message.content} (posted <span class="date">${minutesAgo} minutes</span> ago) by ${message.author}</li>`;
        messages.insertAdjacentHTML("afterbegin", msgElement);
      });
    });
};

const postMessage = (message, callback) => {
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      callback();
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = { author: userName.value, content: comment.value };
  postMessage(data, refreshChat);
});

refresh.addEventListener("click", refreshChat);

document.addEventListener("DOMContentLoaded", refreshChat);

setInterval(refreshChat, 5000);
