var specificGenreBtn = document.getElementsByClassName('dropdown-item');
var randomCocktail = document.getElementById('randomcocktail');
var comedyBtn = document.getElementById('comedyBtn');
var dramaBtn = document.getElementById('dramaBtn');
var sciFiBtn = document.getElementById('sciFiBtn');
var romanceBtn = document.getElementById('romanceBtn');
var menu = document.getElementById('menu');

function getcocktailApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    console.log("clicked")
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
                var value = data.drinks[0]["strIngredient" + i]
                if (value === null) { break }
                else {
                    drinkIngredients.push(value)
                }
            }
            console.log(drinkIngredients)
            while(randomCocktail.firstChild){
                randomCocktail.firstChild.remove()
            }
            randomCocktail.append(drinkName, drinkIngredients, drinkInstructions);
        })
    //append or show drinkName drinkIngredients drinkInstructions

}

function onButtonClick(){
    if(menu.style.display !== "none"){
        menu.style.display = "none";

    } else if(menu.style.display === "none"){
        menu.style.display ==="flex";
    }
    
}

//getcocktailApi();

comedyBtn.addEventListener('click', getcocktailApi);
dramaBtn.addEventListener('click', getcocktailApi);
sciFiBtn.addEventListener('click', getcocktailApi);
romanceBtn.addEventListener('click', getcocktailApi);
