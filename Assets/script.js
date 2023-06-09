var specificGenreBtn = document.getElementsByClassName("dropdown-item");
var randomCocktail = document.getElementById("randomcocktail");
var drinkName = document.createElement("h6");
var drinkIngredients = document.createElement("p");
var drinkInstructions = document.createElement("p");
var comedyBtn = document.getElementById("comedyBtn");
var dramaBtn = document.getElementById("dramaBtn");
var sciFiBtn = document.getElementById("sciFiBtn");
var romanceBtn = document.getElementById("romanceBtn");
var menu = document.getElementById("menu");

function getcocktailApi() {
  var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log("clicked");
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks[0]);
      drinkName.innerHTML = data.drinks[0].strDrink;
      drinkInstructions.innerHTML = data.drinks[0].strInstructions;
      var ingredients = [];
      for (var i = 1; i < 16; i++) {
        var value = data.drinks[0]["strIngredient" + i];
        if (value === null) {
          break;
        } else {
          ingredients.push(value);
        }
      }
      drinkIngredients.textContent = ingredients.join(", ");
      while (randomCocktail.firstChild) {
        randomCocktail.firstChild.remove();
      }
      randomCocktail.style.display = "flex";
      randomCocktail.style.display = "block";

      randomCocktail.append(drinkName);
      randomCocktail.append(drinkIngredients);
      randomCocktail.append(drinkInstructions);

      drinkName.style.fontSize = "25px";
      drinkIngredients.style.fontSize = "15px";
      drinkInstructions.style.fontSize = "15px";
    });
}

refreshButton.addEventListener("click", getcocktailApi);

//  function onButtonClick(){
//      if(menu.style.display !== "none"){
//          menu.style.display = "none";

//      } else if(menu.style.display === "none"){
//          menu.style.display ==="flex";
//      }

//  }

comedyBtn.addEventListener("click", getcocktailApi);
dramaBtn.addEventListener("click", getcocktailApi);
sciFiBtn.addEventListener("click", getcocktailApi);
romanceBtn.addEventListener("click", getcocktailApi);

comedyBtn.addEventListener("click", onButtonClick);
dramaBtn.addEventListener("click", onButtonClick);
sciFiBtn.addEventListener("click", onButtonClick);
romanceBtn.addEventListener("click", onButtonClick);
