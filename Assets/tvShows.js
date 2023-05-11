var showTitle = document.createElement("h6");
var showRating = document.createElement("p");
var showSynopsis = document.createElement("p")
var comedyBtn = document.getElementById("#comedyBtn")
var dramaBtn = document.getElementById("#dramaBtn")
var sciFiBtn = document.getElementById("#sciFiBtn")
var romanceBtn = document.getElementById("#comedyBtn")

function getShowsApi() {
    var requestUrl = 'https://api.tvmaze.com/shows';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                const value = data[i]
                if (value.genres.includes("Drama")) {
                    console.log(value)
                    showTitle.innerHTML = data[i]
                    showRating.innerHTML = data[i]
                    showSynopsis.innerHTML = data[i]
                }
            }

        })

    // Append ELs
}
getShowsApi();

// genreBtn.addEventListener('click', getShowsApi);
comedyBtn.addEventListener('click', getShowsApi);
comedyBtn.addEventListener('click', getShowsApi);
comedyBtn.addEventListener('click', getShowsApi);
comedyBtn.addEventListener('click', getShowsApi);