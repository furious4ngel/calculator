function formatResult(result) {
  const MILLION = 1000000;
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