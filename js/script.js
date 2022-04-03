function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  const ERROR = 'ERR: DIVIDE BY 0';
  return (b === '0') ? ERROR : a / b;
}

function operate(operator, a, b) {
  let result;
  const operators = {
      plus: '+',
      minus: '-',
      times: '×',
      slash: '÷'
  };

  switch (operator) {
    case operators.plus:
      result = add(a, b);
      break;
    case operators.minus:
      result = subtract(a, b);
      break;
    case operators.times:
      result = multiply(a, b);
      break;
    case operators.slash:
      result = divide(a, b);
      break;
  }
  return result;
}