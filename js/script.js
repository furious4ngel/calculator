function formatResult(result) {
  let rounded = Number(result.toFixed(3));

  if (result >= 1000000) {
    result = result.toExponential(2);
  } else if (result !== rounded) {
    result = rounded;
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