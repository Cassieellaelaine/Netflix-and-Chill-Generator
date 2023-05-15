var specificGenreBtn = document.getElementsByClassName('dropdown-item');
var randomCocktail = document.getElementById('randomcocktail');
var drinkName = document.createElement('h7');
var drinkIngredients = document.createElement('p');
var drinkInstructions = document.createElement('p');
var comedyBtn = document.getElementById('comedyBtn');
var dramaBtn = document.getElementById('dramaBtn');
var sciFiBtn = document.getElementById('sciFiBtn');
var romanceBtn = document.getElementById('romanceBtn');
var newCocktail = document.getElementById('newcocktail');

function getcocktailApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    console.log("clicked")
    fetch(requestUrl)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data.drinks[0])
            drinkName.innerHTML = data.drinks[0].strDrink
            drinkInstructions.innerHTML = data.drinks[0].strInstructions
            drinkIngredients.innerHTML = []
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
            //append or show drinkName drinkIngredients drinkInstructions
            //create function to display another random drink on button click
            $('#newcocktail').click(function getcocktailApi () {
    
                randomCocktail.append(drinkName, drinkIngredients,drinkInstructions);
            
            })

})
}

//getcocktailApi();

comedyBtn.addEventListener('click', getcocktailApi);
dramaBtn.addEventListener('click', getcocktailApi);
sciFiBtn.addEventListener('click', getcocktailApi);
romanceBtn.addEventListener('click', getcocktailApi);



//save show to local storage in watchlist
$(document).ready(function () {

    $('saveWatchlistBtn').on('click', function(){
        var show = {title:'title', rating:'rating', synopsis: 'synopsis'};
        var watchlist = $('.corner-button');
        var showObj = JSON.stringify(show);
        localStorage.setItem(showObj, watchlist);

        
    })

    //view saved shows on watchlist
    
})