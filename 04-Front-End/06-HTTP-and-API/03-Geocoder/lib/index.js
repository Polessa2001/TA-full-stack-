const displayCoordinates = (longitude, latitude) => {
  const paragraphElement = document.getElementById('coordinates');
  paragraphElement.innerText = `${latitude}, ${longitude}`;
};

const injectMap = (lng, lat) => {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';

  mapboxgl.accessToken = 'pk.eyJ1IjoicG9sZXNzYTIwMDEiLCJhIjoiY2xrenJoMzQ3MHJybzNrcXBrYmI5cXVvYyJ9.dZNnXbkypaqZTCIi-1VZ1A';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [lng, lat],
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
};

const showMap = (userInput) => {
  console.log('hey');
  // TODO: Construct the URL (with apiKey & userInput) and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=pk.eyJ1IjoicG9sZXNzYTIwMDEiLCJhIjoiY2xrenJoMzQ3MHJybzNrcXBrYmI5cXVvYyJ9.dZNnXbkypaqZTCIi-1VZ1A`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const long = data.features[0].center[0];
      const lat = data.features[0].center[1];
      displayCoordinates(long, lat);
      injectMap(long, lat);
      // TODO: Insert the info into the DOM
      // - Extract the coordinates from the parsed JSON response (lang, lat)
      // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates
    });
};


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = document.querySelector('[type="text"]').value;
  showMap(userInput);
});

//
// TODO: Select the form element
// TODO: Add event listener to the form that:
// - Prevents the default form submission behavior
// - Get the user input
// - Calls the showMap function with the user input as an argument
