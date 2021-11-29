// Basic math operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
      return subtract(a, b);
  } else if (operator === "*") {
      return multiply(a, b);
  } else if (operator === "/") {
      return divide(a, b);
  }
}

function displayValue(e) {
  if (display.textContent === "0") {
    display.textContent = e.target.textContent;
  } else if (display.textContent !== "0") {
      display.textContent += e.target.textContent;
  }
}

// Create the display variable
const display = document.querySelector(".display");

// Create the variables for digits
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const comma = document.querySelector("#comma");

// Add event listeners to the digits
one.addEventListener("click", displayValue);
two.addEventListener("click", displayValue);
three.addEventListener("click", displayValue);
four.addEventListener("click", displayValue);
five.addEventListener("click", displayValue);
six.addEventListener("click", displayValue);
seven.addEventListener("click", displayValue);
eight.addEventListener("click", displayValue);
nine.addEventListener("click", displayValue);
zero.addEventListener("click", displayValue);
comma.addEventListener("click", displayValue);