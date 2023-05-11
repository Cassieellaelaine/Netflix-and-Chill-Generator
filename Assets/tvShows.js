var showTitle = document.createElement("h6");
var showRating = document.createElement("p");
var showSynopsis = document.createElement("p")
var comedyBtn = document.getElementById("comedyBtn")
var dramaBtn = document.getElementById("dramaBtn")
var sciFiBtn = document.getElementById("sciFiBtn")
var romanceBtn = document.getElementById("comedyBtn")

function getShowsApi(event) {
    var requestUrl = 'https://api.tvmaze.com/shows';

    const genre = event.target.getAttribute('data-genre')
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // clear out the ul from previous appendagesgit checkout 
            for (var i = 0; i < 4; i++) {
                const value = data[i]
                if (value.genres.includes(genre)) {
                    console.log(value)
                    // const showLi = document.createElement('li')
                    const h2 = document.createElement('h2')
                    h2.innerHTML = value.name

                    const ratingPEl = document.createElement('p')
                    // Pull random value from tv shows array

                    // div.append(h2, ratingPEl, synopsisP)
                    // or showLi.append(h2, ratingPEl, synopsisP)
                    // ul.appendChild(showLi)
                    showTitle.innerHTML = value.name
                    showRating.innerHTML = value.rating.average
                    showSynopsis.innerHTML = value.summary
                }
            }

        })

    // Append ELs
}

getShowsApi();

 // Pull random value from tv shows array
 function getRandomValue(min, max) {
    var randomValue=Math.random() // Random number between 0 and 0.99
    var randomValueUpToMax=randomValue * max // Random number between 0 and max - 0.1
    var randomValueInRange= min + randomValueUpToMax;

    return Math.floor(randomValueInRange); // Remove the decimal places
 }

 getRandomValueFromArray(value)
function getRandomValueFromArray(array) {
    var randomArrayPosition=getRandomValue(0,array.length);
    return array[randomArrayPosition];
}

// genreBtn.addEventListener('click', getShowsApi);
comedyBtn.addEventListener('click', getShowsApi);
dramaBtn.addEventListener('click', getShowsApi);
sciFiBtn.addEventListener('click', getShowsApi);
romanceBtn.addEventListener('click', getShowsApi);