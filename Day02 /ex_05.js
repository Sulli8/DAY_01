let firstName = "John" 
let name = "Doe"
let cardCode = 1111222233334444
let expiryDateMonth = 21
let expiryDateYear = 2042
let concat = firstName + ","+ name + "," + cardCode + "," + expiryDateMonth + "/" + expiryDateYear  

let computedBankInfo = 'John,Doe,1111222233334444,21/2042'
console.log(computedBankInfo)
displayInCard(concat)

  function displayInCard(str) {
    const args = str.split(",");
    if (args.length !== 4) {
      console.error("Incorrect bank info format");
      return;
    }
    try {
      $(".card-number").text(args[2].match(/[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/g));
      $(".card-name").text(args[0] + " " + args[1]);
      $(".card-expiry").text(args[3]);
    } catch (error) {
      console.log("Incorrect bank info format");
    }
  }
