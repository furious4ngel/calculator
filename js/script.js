function formatResult(result) {
  const MILLION = 1e6;
  let decimal = Number(result.toFixed(3));
  let exponent = result.toExponential(2);

  if (result >= MILLION) {
    result = exponent;
  } else if (result !== decimal) {
    result = decimal;
  }
  return result;
}

function add(a, b) {
  return formatResult(Number(a) + Number(b));
}

function subtract(a, b) {
  return formatResult(a - b);
}

function multiply(a, b) {
  return formatResult(a * b);
}

function divide(a, b) {
  const ERROR = 'ERR: DIVIDE BY 0';
  return (b === '0') ? ERROR : formatResult(a / b);
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