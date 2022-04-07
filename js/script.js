const numberDisplay = document.querySelector('.display.number');
const numberKeys = [...document.querySelectorAll('.button.number')];
const operatorDisplay = document.querySelector('.display.operator');
const operatorKeys = [...document.querySelectorAll('.button.operator:not(.equal)')];
const equalKey = document.querySelector('.equal');
const allClearKey = document.querySelector('.all-clear');
const deleteKey = document.querySelector('.delete');
const operation = [];
let pressedOperatorKey = false;
let pressedEqualKey = false;

function main() {
  numberDisplay.textContent = '0';

  numberKeys.forEach((numberKey) => {
    numberKey.addEventListener('click', enterNumber);
  });
  operatorKeys.forEach((operatorKey) => {
    operatorKey.addEventListener('click', enterOperator);
  });
  equalKey.addEventListener('click', calculate);
  allClearKey.addEventListener('click', clearAll);
}

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
  let result;

  if (b === 0) {
    alert('ERROR: Divide by Zero');
    operatorDisplay.textContent = '';
    result = '0';
  } else {
    result = a / b;
  }
  return result;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  let result;

  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '–':
      result = subtract(a, b);
      break;
    case '×':
      result = multiply(a, b);
      break;
    case '÷':
      result = divide(a, b);
      break;
  }
  return result;
}

function enterNumber(event) {
  let displayValue = numberDisplay.textContent;
  let pressedKeys = pressedOperatorKey || pressedEqualKey;
  let digit = event.target.textContent;

  if (pressedKeys || displayValue === '0') {
    pressedOperatorKey = false;
    pressedEqualKey = false;
    numberDisplay.textContent = '';
  }
  numberDisplay.textContent += digit;
}

function enterOperator(event) {
  pressedOperatorKey = true;
  let result;
  let displayValue = numberDisplay.textContent;
  let operator = event.target.textContent;

  if (operation[0]) {
    operation[2] = displayValue;
    result = operate(operation[1], operation[0], operation[2]);
    operation[0] = result;
    numberDisplay.textContent = result;
  } else {
    operation[0] = displayValue;
  }
  operation[1] = operator;
  operatorDisplay.textContent = operator;
}

function calculate() {
  pressedEqualKey = true;
  operation[2] = numberDisplay.textContent;

  if (operation[0]) {
    operatorDisplay.textContent = '';
    numberDisplay.textContent = operate(operation[1], operation[0], operation[2]);
    operation[0] = null;
  }
}

function clearAll() {
  while (operation.length) {
    operation.pop();
  }
  operatorDisplay.textContent = '';
  numberDisplay.textContent = '0';
}

main();