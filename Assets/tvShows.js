var showTitle = document.createElement("h6");
var showRating = document.createElement("p");
var showSynopsis = document.createElement("p")

function getShowsApi() {
    var requestUrl = 'https://api.tvmaze.com/shows';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                // showTitle.innerHTML = data[i]
                // showRating.innerHTML = data[i]
                // showSynopsis.innerHTML = data[i]
                const value = data[i]
                if (value.genres.includes("Drama")) {
                    console.log(value)
                }
            }

        })

        // Append ELs
}
getShowsApi();
// genreBtn.addEventListener('click', getShowsApi);