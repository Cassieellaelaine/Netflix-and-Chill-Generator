var specificGenreBtn = document.getElementsByClassName('dropdown-item');
var randomCocktail = document.getElementById('randomcocktail');

function getApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(requestUrl)
        .then(function (repsonse) {
            return repsonse.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var cocktail = document.createElement('h4');
                cocktail.textContent = data[i].text();
                randomCocktail.appendChild(cocktail);

            }
        })

}
