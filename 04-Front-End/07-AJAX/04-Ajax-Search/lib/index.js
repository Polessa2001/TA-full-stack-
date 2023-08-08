const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";
const input = document.getElementById("movie-name");

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

// Your turn to code!
const displayMovies = (data) => {
  const movieCards = document.getElementById("movie-cards");
  movieCards.innerHTML = "";
  data.forEach((movie) => {
    movieCards.insertAdjacentHTML("afterbegin",
      `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card mb-2">
          <img src="${movie.Poster}">
          <div class="card-body">
            <span class="badge bg-primary mb-2">${movie.Year}</span>
            <h5 class="card-title">${movie.Title}</h5>
          </div>
        </div>
      </div>
      `);
  });
};

const searchMovies = (movie) => {
  fetch(`${omdbapiUrl}?s=${movie}&apikey=48727053`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search);
      displayMovies(data.Search);
    });
};

input.addEventListener("keyup", () => {
  searchMovies(input.value);
});

const form = document.querySelector("#search-movies");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchMovies(input.value);
});
