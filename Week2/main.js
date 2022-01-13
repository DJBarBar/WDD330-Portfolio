function displayText() {
  let text = document.getElementById("textInput").value;
  document.getElementById("displayResult").innerHTML = text;
}

function sumNumber() {
  let myNumber = parseInt(document.getElementById("numberInput").value);
  let mySum = 0;

  for (
    let previousNumber = myNumber - 1;
    previousNumber > 0;
    previousNumber--
  ) {
    mySum = mySum + previousNumber;
  }
  document.getElementById("showSum").innerHTML = parseInt(myNumber + mySum);
}

function addNumber() {
  let myNumber = parseInt(document.getElementById("numberInput").value);
  let myNumber2 = parseInt(document.getElementById("number2Input").value);
  let sum = myNumber + myNumber2;

  document.getElementById("sumAll").innerHTML = parseInt(sum);
}
