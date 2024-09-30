let integer = 42
let float = 42.42
let string  = "forty two"
let bool = true
let this_is_null  = null

      function displayThisText(str) {
        const outDiv = $("#out");
        if (outDiv.text() !== '')
          outDiv.append("<br>")
        outDiv.append(str)
      }
displayThisText(integer);
displayThisText(float);
displayThisText(string);
displayThisText(bool);
displayThisText(this_is_null);
