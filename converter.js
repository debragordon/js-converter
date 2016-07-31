// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// var x = what the user puts in
var button = document.getElementById("converter");

button.addEventListener("click", determineConverter);

function determineConverter (clickEvent) {
  var temp = document.getElementById("temperature").value;
  if (document.getElementById("cel").checked) {
    if (temp > 32) {
      document.getElementById("answer").innerHTML = "<span class='red'>" + toFahrenheit(temp) + "&deg; F</span>"
    } else if (temp < 0) {
      document.getElementById("answer").innerHTML = "<span class='blue'>" + toFahrenheit(temp) + "&deg; F</span>"
    } else {
      document.getElementById("answer").innerHTML = "<span class='green'>" + toFahrenheit(temp) + "&deg; F</span>"
    }
  } else {
    if (temp > 90) {
      document.getElementById("answer").innerHTML = "<span class='red'>" + toCelsius(temp) + "&deg; C</span>"
    } else if (temp < 32) {
      document.getElementById("answer").innerHTML = "<span class='blue'>" + toCelsius(temp) + "&deg; C</span>"
    } else {
      document.getElementById("answer").innerHTML = "<span class='green'>" + toCelsius(temp) + "&deg; C</span>"
    }
  }
}

function toCelsius (x) {
  return (x - 32) * .5556;
}

function toFahrenheit (x) {
  return (x * 1.8) +32;
}