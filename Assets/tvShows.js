var comedyBtn = document.getElementById("comedyBtn");
var dramaBtn = document.getElementById("dramaBtn");
var sciFiBtn = document.getElementById("sciFiBtn");
var romanceBtn = document.getElementById("romanceBtn");
var backBtn = document.getElementById("goBackBtn");
var usersContainer = document.getElementById("menu");

function getApi(event) {
  var requestUrl = "https://api.tvmaze.com/shows";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      const genre = event.target.getAttribute("data-genre");
      var filteredShows = data.filter(function (show) {
        return show.genres.includes(genre);
      });
      console.log(filteredShows);
      removeAllChildren(usersContainer);
      for (var i = 0; i < 5; i++) {
        let randomShows = getRandomValueFromArray(filteredShows);
        //Creating a h3 element and a p element
        var showTitle = document.createElement("h3");
        var showRating = document.createElement("p");
        var showSynopsis = document.createElement("p");
        var watchlistLi = document.createElement("div");
        var watchlistCopy = document.createElement("label");
        var watchlistCheckBox = document.createElement("input");

        //Setting the text of the h3 element and p element.
        showTitle.textContent = randomShows.name;
        showRating.innerHTML = "<b> Rating: </b> " + randomShows.rating.average;
        showSynopsis.textContent = removeTags(randomShows.summary);
        watchlistCheckBox.type = "checkbox";
        watchlistCheckBox.style.marginBottom = "30px";
        watchlistCheckBox.style.marginRight = "5px";
        watchlistCopy.innerHTML = "<b> Add to your watchlist </b>";
        watchlistLi.style.display = "flex";
        watchlistLi.style.alignItems = "flex-start";
        watchlistLi.style.display = "inline";

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(showTitle);
        usersContainer.append(showRating);
        usersContainer.append(showSynopsis);
        usersContainer.append(watchlistLi);
        watchlistLi.append(watchlistCheckBox);
        watchlistLi.append(watchlistCopy);

        watchlistCheckBox.addEventListener("click", function() {
          console.log(
            randomShows.name,
            randomShows.rating.average,
            randomShows.summary
          );
          // Step 1 - Create an object with the properties name, rating, summary
          // Step 2 - Update the object with the random shows data
          // Step 3 - Use JSON.stringfy to create a JSON object
          // Step 4 - save to local storage
          var watchlistData = {
            name: randomShows.name,
            rating: randomShows.rating.average
        };
            // step 1 - get watchlist data from local storage
            var storageData = JSON.parse(localStorage.getItem("watchlistData"));
            // step 1.5 - if watchlist data array is null, create an empty array
            if (!storageData) {
                storageData = []
            }
            // step 2 - add new object to existing array from local storage(.push)
            storageData.push(watchlistData);
            // step 3 - save new array in local storage
            localStorage.setItem("watchlistData", JSON.stringify(storageData));
            // addShowToWatchlist();
        });
      }
    });
}

function addShowToWatchlist() {
var storageData = JSON.parse(localStorage.getItem("watchlistData"));
let showName = document.createElement("li")
let showRating = document.createElement("li")
var WatchlistCointainer = document.querySelector(".list-group")
showName.textContent = storageData.name
showRating.textContent = storageData.rating.average
WatchlistCointainer.append(showName);
WatchlistCointainer.append(showRating);
}

function getRandomValue(min, max) {
  var randomValue = Math.random(); // Random number between 0 and 0.99
  var randomValueUpToMax = randomValue * max; // Random number between 0 and max - 0.1
  var randomValueInRange = min + randomValueUpToMax;

  return Math.floor(randomValueInRange); // Remove the decimal places
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomValue(0, array.length);
  return array[randomArrayPosition];
}
comedyBtn.addEventListener("click", loadGenreShows);
dramaBtn.addEventListener("click", loadGenreShows);
sciFiBtn.addEventListener("click", loadGenreShows);
romanceBtn.addEventListener("click", loadGenreShows);

function loadGenreShows (event) {
    getApi(event)
    var newShowsBtn = document.createElement("button");
  newShowsBtn.innerText = "New Shows";
  newShowsBtn.style.display = "block";
  newShowsBtn.addEventListener("click", getApi);
  const genre = event.target.getAttribute("data-genre");
  newShowsBtn.setAttribute("data-genre", genre);
  document.getElementById('tvshow').append(newShowsBtn);
  
  }

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeTags(string) {
  return string.replace(/(<([^>]+)>)/gi, "");
}
