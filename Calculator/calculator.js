// Variables to store the current input, operator, and operands
let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// Functions for basic operations
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
  return b !== 0 ? a / b : "Error: Cannot divide by 0";
}
function modulus(a, b) {
  return a % b;
}
function power(a, b) {
  return Math.pow(a, b);
}
function factorial(a) {
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulus(a, b);
    case "^":
      return power(a, b);
    default:
      return null;
  }
}

// Function to append digits to the display
function appendToDisplay(value) {
  const display = document.getElementById("display");
  displayValue += value;
  display.value = displayValue;
}

// Function to set the operator
function setOperator(operator) {
  if (currentOperator !== null && displayValue !== "") calculate();
  firstOperand = parseFloat(displayValue);
  currentOperator = operator;
  displayValue = "";
}

// Function to calculate the result
function calculate() {
  if (currentOperator === null || displayValue === "") return;
  secondOperand = parseFloat(displayValue);
  let result = operate(firstOperand, secondOperand, currentOperator);
  result = Math.round(result * 1e10) / 1e10; // Round to avoid long decimals
  displayValue = result.toString();
  document.getElementById("display").value = displayValue;
  firstOperand = result;
  currentOperator = null;
}

// Function to clear the display
function clearDisplay() {
  displayValue = "";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  document.getElementById("display").value = displayValue;
}
