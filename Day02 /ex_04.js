let indefini;
let entier = 42;
let float = 42.2;
let bigint = 123456789123456789n
let fonction = function() { console.log("ok")}
let objet = {}
let symbole = Symbol("toto")

displayThisText(String(indefini));
displayThisText(typeof entier);
displayThisText(typeof float);
displayThisText(typeof bigint);
displayThisText(typeof fonction);
displayThisText(typeof objet);
displayThisText(typeof symbole.toString());

function displayThisText(str) {
const outDiv = $("#out");
if (outDiv.text() !== '')
    outDiv.append("<br>")
outDiv.append(str)
}
