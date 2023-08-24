let numOne = '';
let operator = '';
let numTwo = '';

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function percentage(numOne, operator, numTwo) {
  if (numTwo === '' && operator === '') { 
    // What is a one percent of a number
    return numOne / 100;
  } else if (operator === '*') { 
    // What a specific percentage is of a number
    return numOne / 100 * numTwo;
  } else if (operator === '+') { 
    // Calculate a percentage of a number and add it to the number
    return add(numOne, numOne / 100 * numTwo);
  } else if (operator === '-') { 
    // Calculate a percentage of a number and subtract it to the number
    return subtract(numOne, numOne / 100 * numTwo);
  } else {
    return 'ERROR!'
  }
}

function operate(numOne, operator, numTwo) {
  if (operator === '+') {
    return add(numOne, numTwo);
  } else if (operator === '-') {
    return subtract(numOne, numTwo);
  } else if (operator === '*') {
    return multiply(numOne, numTwo);
  } else if (operator === '/') {
    return divide(numOne, numTwo)
  } else {
    return 'ERROR!'
  }
}