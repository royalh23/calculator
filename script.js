// Basic math operations
function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
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
  operators.forEach(operator => operator.classList.remove("active"));
  if (display.textContent === "0") {
    display.textContent = e.target.textContent;
  } else if (display.textContent !== "0") {
      display.textContent += e.target.textContent;
      let paddingLeftValue = parseInt(window.getComputedStyle(display)
                                        .getPropertyValue("padding-left")) - 30;
      display.style.paddingLeft = `${paddingLeftValue}px`;
  }
}

function getValue() {
  if (firstDisplayValue) {
    secondDisplayValue = display.textContent;
    console.log(`second value: ${secondDisplayValue}`);
  } else {
      firstDisplayValue = display.textContent;
      console.log(`first value: ${firstDisplayValue}`);
  }
}

function getValueAndOp(e) {
  clearDisplay = true;
  operators.forEach(operator => operator.classList.remove("active"));
  e.target.classList.add("active");
  getValue();
  if (firstDisplayValue && secondDisplayValue) {
    solution = operate(operator, firstDisplayValue, secondDisplayValue);
    display.textContent = solution;
    firstDisplayValue = null;
    console.log("firstDisplayValue = null");
    secondDisplayValue = null;
    console.log("secondDisplayValue = null");
    let solutionLength = solution.toString().length;
    let paddingLeftValue = 440 - (solutionLength - 1) * 30;
    display.style.paddingLeft = `${paddingLeftValue}px`;
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

function calculate() {
  clearDisplay = true;
  operators.forEach(operator => operator.classList.remove("active"));
  getValue();
  solution = operate(operator, firstDisplayValue, secondDisplayValue);
  display.textContent = solution;
  firstDisplayValue = null;
  console.log("firstDisplayValue = null");
  secondDisplayValue = null;
  console.log("secondDisplayValue = null");
  let solutionLength = solution.toString().length;
  let paddingLeftValue = 440 - (solutionLength - 1) * 30;
  display.style.paddingLeft = `${paddingLeftValue}px`;
}

// Declare the main variables
let firstDisplayValue = null;
let secondDisplayValue = null;
let solution = null;
let operator = null;
let clearDisplay = false;

// Create the display variable
const display = document.querySelector(".display");

// Add event listeners to the digits
const buttons = document.querySelectorAll("#one, #two, #three, #four, #five," + 
                                " #six, #seven, #eight, #nine, #zero, #dot");
buttons.forEach(button => button.addEventListener("click", displayValue));

// Add event listeners to the operators
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", getValueAndOp));

// Add an event listener to =
const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate);