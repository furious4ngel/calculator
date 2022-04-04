const numberDisplay = document.querySelector('.display.number');
const numberKeys = [...document.querySelectorAll('.button.number')];
const operation = [];
let pressedOperatorKey = false;
let pressedEqualKey = false;

function main() {
  numberDisplay.textContent = '0';

  numberKeys.forEach((numberKey) => {
    numberKey.addEventListener('click', enterNumber);
  });
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
  const ERROR = 'NONSENSE';
  return (b === 0) ? ERROR : a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  let result;
  
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
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
  const results = ['0', 'NaN', 'Infinity', 'NONSENSE'];
  let pressedKeys = pressedOperatorKey || pressedEqualKey;
  let digit = event.target.textContent;
  let displayValue = numberDisplay.textContent;

  for (const result of results) {
    if (result === displayValue) {
      numberDisplay.textContent = '';
    }
  }

  if (pressedKeys) {
    pressedOperatorKey = false;
    pressedEqualKey = false;
    numberDisplay.textContent = '';
  }

  numberDisplay.textContent += digit;
}

main();