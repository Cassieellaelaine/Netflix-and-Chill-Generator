var specificGenreBtn = document.getElementsByClassName('dropdown-item');
var randomCocktail = document.getElementById('randomcocktail');

function getcocktailApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        
        })
        .then(function (data) {
            console.log(data.drinks[0])
            var drinkName = data.drinks[0].strDrink
            var drinkInstructions = data.drinks[0].strInstructions
            var drinkIngredients = []
            for (var i = 1; i < 16; i++) {
                var value = data.drinks[0]["strIngredient"+i]
                if (value === null ){break}
                else { 
                   drinkIngredients.push(value) 
                }
                //console.log(data);
                // var cocktail = document.createElement('h4');
                // cocktail.textContent = data[i].text();
                // randomCocktail.appendChild(cocktail);

            }
            console.log(drinkIngredients)

            //'dropdown-item'.addEventListener("click",displayFunction);
            //function displayFunction() {

            //}

        })

}

getcocktailApi();
