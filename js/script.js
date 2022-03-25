function add(a, b) {
  let result = Number(a) + Number(b);
  let rounded = Number(result.toFixed(3));

  if (result >= 1000000) {
    result = result.toExponential(2);
  } else if (result !== rounded) {
    result = rounded;
  }
  return result;
}

function subtract(a, b) {
  let result = a - b;
  let rounded = Number(result.toFixed(3));
  
  if (result >= 1000000) {
    result = result.toExponential(2);
  } else if (result !== rounded) {
    result = rounded;
  }
  return result;
}