const numberDisplay = document.querySelector('.display.number');

function main() {
  numberDisplay.textContent = '0';
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

main();