var specificGenreBtn = document.getElementsByClassName('dropdown-item')


function getApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(requestUrl)
        .then(function (repsonse) {
            return repsonse.json();
        })

}
