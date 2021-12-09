// Basic math operations
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
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
  if (clearDisplay) {
    display.textContent = "";
    display.style.paddingLeft = "470px";
  }
  clearDisplay = false;
  if (display.textContent.length < 15) {
    operators.forEach(operator => operator.classList.remove("active"));
    if (display.textContent === "0") {
      display.textContent = e.target.textContent;
    } else if (display.textContent !== "0") {
        display.textContent += e.target.textContent;
        paddingLeftValue = parseInt(window.getComputedStyle(display)
                                          .getPropertyValue("padding-left")) - 30;
        display.style.paddingLeft = `${paddingLeftValue}px`;
    }
  }
}

function displayPoint(e) {
  if (!pointClicked) {
    display.textContent += e.target.textContent;
    paddingLeftValue = parseInt(window.getComputedStyle(display)
                                          .getPropertyValue("padding-left")) - 17;
    display.style.paddingLeft = `${paddingLeftValue}px`;
  }
  pointClicked = true;
  if (clearDisplay) {
    display.textContent = "0.";
    display.style.paddingLeft = "423px";
  }
  clearDisplay = false;
}

function getValue() {
  if (firstDisplayValue) {
    secondDisplayValue = display.textContent;
  } else {
      firstDisplayValue = display.textContent;
  }
}

function getValueAndOp(e) {
  clearDisplay = true;
  pointClicked = false;
  operators.forEach(operator => operator.classList.remove("active"));
  e.target.classList.add("active");
  getValue();
  if (firstDisplayValue && secondDisplayValue) {
    calculate();
    getValue();
  }
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

function displaySolution() {
  clearDisplay = true;
  pointClicked = false;
  operators.forEach(operator => operator.classList.remove("active"));
  if (firstDisplayValue) {
    getValue();
    calculate();
  }
}

function calculate() {
  solution = operate(operator, firstDisplayValue, secondDisplayValue);
  if (secondDisplayValue === "0" && operator === "/") {
    solution = "Duh";
    paddingLeftValue = 365;
  } else {
      let solutionLength = solution.toString().length;
      if (!Number.isInteger(solution)) {
        if (solutionLength > 16) {
          let text = solution.toString();
          let afterDcml = text.length - text.indexOf(".") - 1;
          let beforeDcml = text.length - afterDcml - 1;
          solution = parseFloat(solution.toFixed(15 - beforeDcml));
          solutionLength = solution.toString().length;
        } 
        paddingLeftValue = 423 - (solutionLength - 2) * 30;
      } else {
          if (solutionLength > 15) {
            solution = Number(solution.toString().substring(0, 15));
            solutionLength = solution.toString().length;
          }
          paddingLeftValue = 440 - (solutionLength - 1) * 30;
        }
  }
  display.textContent = solution;
  firstDisplayValue = null;
  secondDisplayValue = null
  display.style.paddingLeft = `${paddingLeftValue}px`;
}

function clearData() {
  display.textContent = "0";
  display.style.paddingLeft = "440px";
  paddingLeftValue = null;
  solution = null;
  operator = null;
  clearDisplay = false;
  pointClicked = false;
}

// Declare the main variables
let paddingLeftValue = null;
let firstDisplayValue = null;
let secondDisplayValue = null;
let solution = null;
let operator = null;
let pointClicked = false;
let clearDisplay = false;

// Create the display variable
const display = document.querySelector(".display");

// Add event listeners to the digits
const buttons = document.querySelectorAll("#one, #two, #three, #four, #five," + 
                                " #six, #seven, #eight, #nine, #zero");
buttons.forEach(button => button.addEventListener("click", displayValue));

// Add an event listener to the point
const point = document.querySelector("#point");
point.addEventListener("click", displayPoint);

// Add event listeners to the operators
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", getValueAndOp));

// Add an event listener to =
const equal = document.querySelector("#equal");
equal.addEventListener("click", displaySolution);

// Add an event listener to the clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearData);