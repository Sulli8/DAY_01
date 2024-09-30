let number1 = "1";
let number2 = "2";
let add = "<p>" + number1 + number2  + "</p>";
displayThisText(add);
function displayThisText(str) {
document.getElementById("out").innerHTML = str;
};