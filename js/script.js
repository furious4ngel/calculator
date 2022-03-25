function formatResult(value) {
  let rounded = Number(value.toFixed(3));

  if (value >= 1000000) {
    value = value.toExponential(2);
  } else if (value !== rounded) {
    value = rounded;
  }
  return value;
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