let breadCount = Math.floor(Math.random() * 4)
let hamCount = Math.floor(Math.random() * 3)
let tunaCount = Math.floor(Math.random() * 3)

function displayThisText(str) {
  const outDiv = $("#out");
  if (outDiv.text() !== '')
    outDiv.append("<br>")
  outDiv.append(str)
}

const ingredientsImages = [
  "https://image.flaticon.com/icons/png/512/135/135633.png",
  "https://image.flaticon.com/icons/png/512/135/135649.png",
  "https://image.flaticon.com/icons/png/512/135/135677.png"
]
const outDiv = $("#out");

 if(breadCount == 2 && (hamCount == 1 || hamCount > 1) && tunaCount == 1 ){
displayThisText("I can make a royal sandwich!.")
} 
else if(breadCount == 2 && hamCount == 1 ){
displayThisText("I can make a ham sandwich!.")
} else if(breadCount == 2 && tunaCount == 1 ){
displayThisText("I can make a tuna sandwich!")
} else {
 displayThisText("I'd rather be fasting tonight..")
}



function displayThisText(str) {
  if (outDiv.text() !== '')
    outDiv.append("<br>");
  outDiv.append(str);
}

function displayIngredients() {
  outDiv.append('<div class="ingredients"></div>');
  const ingredientContainer = outDiv.find(".ingredients").last();
  displayOneIngredient(ingredientContainer, "bread",  ingredientsImages[0], breadCount);
  displayOneIngredient(ingredientContainer, "ham",    ingredientsImages[1], hamCount);
  displayOneIngredient(ingredientContainer, "tuna",   ingredientsImages[2], tunaCount);
}

function displayOneIngredient(div, ingredientName, ingredientImage, ingredientQuantity) {
  div.append('<div><img class="ingredient" alt="'
  + ingredientName + '" src="' 
  + ingredientImage + '"></img><p class="quantity">' 
  + ingredientQuantity + "</p></div>");
}

displayIngredients();