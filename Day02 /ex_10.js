let breadCount = Math.floor(Math.random() * 6) + 10;
let hamCount = Math.floor(Math.random() * 4) + 2;
let tunaCount = Math.floor(Math.random() * 2) + 1;
let saladCount = Math.floor(Math.random() * 7);
let tomatoCount = Math.floor(Math.random() * 2) + 1;

let breadCountBis = breadCount
let hamCountBis = hamCount
let tunaCountBis = tunaCount
let saladCountBis = saladCount
let tomatoCountBis = tomatoCount


let increaseNumberVegetarianSandwich = 0;
let increaseNumberHamSandwich = 0;
let increaseNumberTunaSandwich = 0;

const ingredientsImages = [
    "https://image.flaticon.com/icons/png/512/135/135633.png",
    "https://image.flaticon.com/icons/png/512/135/135649.png",
    "https://image.flaticon.com/icons/png/512/135/135677.png",
    "https://image.flaticon.com/icons/png/512/135/135715.png",
    "https://image.flaticon.com/icons/png/512/135/135702.png"
];
const outDiv = $("#out");

while (breadCountBis >= 2) { // Au moins 2 morceaux de pain nécessaires
    if (hamCountBis > 0) {
        breadCountBis -= 2;
        hamCountBis -= 1;
        increaseNumberHamSandwich += 1;
    } else if (tunaCountBis > 0) {
        breadCountBis -= 2;
        tunaCountBis -= 1;
        increaseNumberTunaSandwich += 1;
    } else if (saladCountBis > 0 && tomatoCountBis > 0) {
        breadCountBis -= 2;
        saladCountBis -= 1;
        tomatoCountBis -= 1;
        increaseNumberVegetarianSandwich += 1;
    } else {
        break; // Sortir si aucun sandwich ne peut être fabriqué
    }
}

displayThisText("Number of ham Sandwich: " + increaseNumberHamSandwich);
displayThisText("Number of tuna Sandwich: " + increaseNumberTunaSandwich);
displayThisText("Number of vegetarian Sandwich: " + increaseNumberVegetarianSandwich);

function displayThisText(str) {
    if (outDiv.text() !== '') {
        outDiv.append("<br>");
    }
    outDiv.append(str);
}

function displayIngredients() {
    outDiv.append('<div class="ingredients"></div>');
    const ingredientContainer = outDiv.find(".ingredients").last();
    displayOneIngredient(ingredientContainer, "bread", ingredientsImages[0], breadCount);
    displayOneIngredient(ingredientContainer, "ham", ingredientsImages[1], hamCount);
    displayOneIngredient(ingredientContainer, "tuna", ingredientsImages[2], tunaCount);
    displayOneIngredient(ingredientContainer, "salad", ingredientsImages[3], saladCount);
    displayOneIngredient(ingredientContainer, "tomato", ingredientsImages[4], tomatoCount);
}

function displayOneIngredient(div, ingredientName, ingredientImage, ingredientQuantity) {
    div.append('<div><img class="ingredient" alt="'
        + ingredientName + '" src="'
        + ingredientImage + '"></img><p class="quantity">'
        + ingredientQuantity + "</p></div>");
}

displayIngredients();