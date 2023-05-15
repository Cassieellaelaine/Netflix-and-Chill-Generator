var showTitle = document.createElement("h6");
var showRating = document.createElement("p");
var showSynopsis = document.createElement("p")

function getShowsApi(event) {
    
    if (event.target.getAttribute('id') !== null) {
        const genre = event.target.getAttribute('data-genre')
        var requestUrl = `https://api.tvmaze.com/shows`;
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // clear out the ul from previous appendagesgit checkout 
                console.log(data)
                const filteredData = data.filter(show => show.genres.includes(genre))
                console.log(filteredData)
                for (var i = 0; i < 4; i++) {
                    const value = data[i]
                    
                    if (filteredData.includes(genre)) {
                        console.log(filteredData)
                        const h2 = document.createElement('h2')
                        h2.innerHTML = value.name

                        const ratingPEl = document.createElement('p')

                        ratingPEl.innerHTML = value.rating.average
                        // div.append(h2, ratingPEl, synopsisP)
                        // or showLi.append(h2, ratingPEl, synopsisP)
                        // ul.appendChild(showLi)
                        const synopsisPEl = document.createElement("p")
                        synopsisPEl.innerHTML = value.summary
                    }
                }
               
                       
            })
        // getRandomValueFromArray(value);
    };
}

// Pull random value from tv shows array
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

document.querySelector('.dropdown-content').addEventListener('click', getShowsApi);