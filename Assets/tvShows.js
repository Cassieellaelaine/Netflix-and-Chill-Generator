// var showTitle = document.createElement("h6");
// var showRating = document.createElement("p");
// var showSynopsis = document.createElement("p")
var comedyBtn = document.getElementById("comedyBtn")
var dramaBtn = document.getElementById("dramaBtn")
var sciFiBtn = document.getElementById("sciFiBtn")
var romanceBtn = document.getElementById("romanceBtn")

// function getShowsApi(event) {
//     var requestUrl = 'https://api.tvmaze.com/shows';

//     const genre = event.target.getAttribute('data-genre')
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // clear out the ul from previous appendagesgit checkout 
//             for (var i = 0; i < 4; i++) {
//                 const value = data[i]
//                 if (value.genres.includes(genre)) {
//                     console.log(value)
//                     // const showLi = document.createElement('li')
//                     const h2 = document.createElement('h2')
//                     h2.innerHTML = value.name

//                     const ratingPEl = document.createElement('p')
//                     // Pull random value from tv shows array

//                     // div.append(h2, ratingPEl, synopsisP)
//                     // or showLi.append(h2, ratingPEl, synopsisP)
//                     // ul.appendChild(showLi)
//                     showTitle.innerHTML = value.name
//                     showRating.innerHTML = value.rating.average
//                     showSynopsis.innerHTML = value.summary
//                 }
//             }

//         })

//     // Append ELs
// }

// getShowsApi();

//  // Pull random value from tv shows array
//  function getRandomValue(min, max) {
//     var randomValue=Math.random() // Random number between 0 and 0.99
//     var randomValueUpToMax=randomValue * max // Random number between 0 and max - 0.1
//     var randomValueInRange= min + randomValueUpToMax;

//     return Math.floor(randomValueInRange); // Remove the decimal places
//  }

//  getRandomValueFromArray(value)
// function getRandomValueFromArray(array) {
//     var randomArrayPosition=getRandomValue(0,array.length);
//     return array[randomArrayPosition];
// }

// // genreBtn.addEventListener('click', getShowsApi);
// comedyBtn.addEventListener('click', getShowsApi);
// dramaBtn.addEventListener('click', getShowsApi);
// sciFiBtn.addEventListener('click', getShowsApi);
// romanceBtn.addEventListener('click', getShowsApi);

var usersContainer = document.getElementById('menu');

function getApi(event) {
  var requestUrl = 'https://api.tvmaze.com/shows';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      const genre = event.target.getAttribute('data-genre')
      var filteredShows = data.filter(function (show) { return show.genres.includes(genre) })
      console.log(filteredShows);
      removeAllChildren(usersContainer);
      for (var i = 0; i < 5; i++) {
        let randomShows = getRandomValueFromArray(filteredShows)
        //Creating a h3 element and a p element
        var showTitle = document.createElement('h3');
        var showRating = document.createElement('p');
        var showSynopsis = document.createElement('p');
        var watchlistLi = document.createElement("div")
        var watchlistCopy = document.createElement('label')
        var watchlistCheckBox = document.createElement('input');

        //Setting the text of the h3 element and p element.
        showTitle.textContent = randomShows.name;
        showRating.innerHTML = "<b> Rating: </b> " + randomShows.rating.average;
        showSynopsis.textContent = removeTags(randomShows.summary);
        watchlistCheckBox.type = "checkbox"
        watchlistCheckBox.style.marginBottom = "30px"
        watchlistCheckBox.style.marginRight = "5px"
        watchlistCopy.innerHTML = "<b> Add to your watchlist </b>"
        watchlistLi.style.display = "flex"
        watchlistLi.style.alignItems = "flex-start"
        watchlistLi.style.display = "inline"

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(showTitle);
        usersContainer.append(showRating);
        usersContainer.append(showSynopsis);
        usersContainer.append(watchlistLi);
        watchlistLi.append(watchlistCheckBox);
        watchlistLi.append(watchlistCopy);

        watchlistCheckBox.addEventListener("click", function () {
          console.log(randomShows.name, randomShows.rating.average, randomShows.summary)
          // Step 1 - Create an object with the properties name, rating, summary
          // Step 2 - Update the object with the random shows data
          // Step 3 - Use JSON.stringfy to create a JSON object
          // Step 4 - save to local storage

        }) 
      }

      });
}

function getRandomValue(min, max) {
  var randomValue = Math.random() // Random number between 0 and 0.99
  var randomValueUpToMax = randomValue * max // Random number between 0 and max - 0.1
  var randomValueInRange = min + randomValueUpToMax;

  return Math.floor(randomValueInRange); // Remove the decimal places
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomValue(0, array.length);
  return array[randomArrayPosition];
}
comedyBtn.addEventListener('click', getApi);
dramaBtn.addEventListener('click', getApi);
sciFiBtn.addEventListener('click', getApi);
romanceBtn.addEventListener('click', getApi);

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)

  }


}

function removeTags(string) {
  return string.replace(/(<([^>]+)>)/ig, '');

};