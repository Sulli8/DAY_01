let passwords = ["IAmAHacker", "forty-two", "azerty", "efebh65^", "de_fzHef", "HGC1__100"];
let password = passwords[Math.floor(Math.random() * passwords.length)];;

if(password == "forty-two"){
displayThisText("Success")
}else {
 displayThisText("Wrong Password")
}
displayThisText("Password entered : " + password);
displayThisText("");
function displayThisText(str) {
  const outDiv = $("#out");
  if (outDiv.text() !== '')
    outDiv.append("<br>")
  outDiv.append(str)
}
