function displayText() {
  let text = document.getElementById("textInput").value;
  document.getElementById("displayText").innerHTML = text;
}

function sumNumbers() {
  let myNumber = Number(document.getElementById("numberInput").value);

  let mySum = 0;

  for (
    let previousNumber = myNumber - 1;
    previousNumber > 0;
    previousNumber--
  ) {
    mySum = mySum + previousNumber;
  }

  document.getElementById("displayResult").innerHTML = myNumber + mySum;
}
