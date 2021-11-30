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
      let paddingLeftValue = parseInt(window.getComputedStyle(display)
                                        .getPropertyValue("padding-left")) - 30;
      display.style.paddingLeft = `${paddingLeftValue}px`;
  }
}

function calculate(e) {
  firstDisplayValue = display.textContent;
  let operator;
  if (e.target.getAttribute("id") === "divide") {
    operator = "/";
  } else if (e.target.getAttribute("id") === "multiply") {
      operator = "*";
  } else if (e.target.getAttribute("id") === "subtract") {
      operator = "-";
  } else if (e.target.getAttribute("id") === "add") {
      operator = "+";
  }
}

let firstDisplayValue;

// Create the display variable
const display = document.querySelector(".display");

// Add event listeners to the digits
const buttons = document.querySelectorAll("#one, #two, #three, #four, #five," + 
                                " #six, #seven, #eight, #nine, #zero, #comma");
buttons.forEach(button => button.addEventListener("click", displayValue));

// Add event listeners to the operators
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", calculate));