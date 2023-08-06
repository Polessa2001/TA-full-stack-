const searchForm = document.getElementById("searchForm");
const resultsList = document.querySelector("#restaurant-list")
const insertResults = (data) => {
  resultsList.innerHTML = "";
  if (data.length > 0) {
    data.forEach((restaurant) => {
      resultsList.insertAdjacentHTML("beforeend", `<li>${restaurant.name} in ${restaurant.address}</li>`);
    });
  } else {
    resultsList.innerHTML = "<p class=\"text-muted text-center\">No restaurants found! Please select another category or location.</p>";
  }
};

// Todo: select the HTML elements you need
const buildSearchUrl = (category, location) => {
  return `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${category}&location=${location}`;
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Todo: Find the category selected and build the URL you will send your request to
  console.log(searchForm);
  const category = document.querySelector('input[type="radio"]:checked').value;
  const location = document.querySelector('input[type="address"]').value;
  // Todo: Replace "the-endpoint-url" with the URL you built
  fetch(buildSearchUrl(category, location))
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // Todo: Insert results into the list
      insertResults(data);
    });
});
