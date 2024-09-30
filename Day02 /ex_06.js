function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bananasCount = randomIntFromInterval(-10, 10);

if (bananasCount === 0) {
    displayThisText('Oh no, there is no banana');
} 
if (bananasCount > 0) {
    displayThisText('Yummy!');
} 
if (bananasCount < 0) {
    displayThisText('Do I owe you bananas?');
}

function displayThisText(str) {
    const outDiv = $("#out");
    if (outDiv.text() !== '')
        outDiv.append("<br>");
    outDiv.append(str);
}

displayThisText("Number of bananas: " + bananasCount);
