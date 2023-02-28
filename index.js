var counterElt = document.getElementById("counter");
function decreaseCounter() {
  var counter = Number(counterElt.textContent);
  if (counter > 1) {
    counterElt.textContent = counter - 1;
  } else {
    clearInterval(intervalId);
    var titre = document.getElementById("redirect");
    titre.click();
  }
}
var intervalId = setInterval(decreaseCounter, 1000);
