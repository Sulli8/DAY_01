var values = [
    "Jean-Michel-Eude", 
  Math.random() * 5,
  Math.floor(Math.random() * (50 - 40 + 1) + 40),
     Math.random() < 0.5,
  "42"
]

  var input_var = values[Math.floor(Math.random() * values.length)]

displayThisText("The variable value is : "+input_var)
displayThisText("Its Type is : "+ typeof input_var)
displayThisText("It is the meaning of life")

function displayThisText(str) {
  const outDiv = $("#out");
  if (outDiv.text() !== '')
    outDiv.append("<br>")
  outDiv.append(str)
}