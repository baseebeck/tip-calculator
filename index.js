function tipCalculator() {
  let bill = document.querySelector(".bill").value;
  let party = document.querySelector(".party").value;
  let service = document.querySelector(".service").value;

  // Make sure values have been set
  if (bill === "" || service === 0) {
    alert("Please enter values");
    return;
  }

  // Check to see if the number of people is less than or equal to 1
  if (party === "" || party <= 1) {
    party = 1;
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "inline";
  }

  // Calculate the tip
  let tip = (bill * service) / party;
  // Round to nearest hundreth
  tip = Math.round(tip * 100) / 100;
  // Keep two decimal places
  tip = tip.toFixed(2);

  document.querySelector("#tip").innerHTML = tip;

  // Display tip
  let result = document.querySelector("#result");
  result.classList.remove("hidden");
}

// Function called on click
document.querySelector(".button").onclick = function() {
  tipCalculator();
};
