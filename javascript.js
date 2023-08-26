let numOne = '';
let operator = '';
let numTwo = '';


function add(numOne, numTwo) {
  return parseFloat(numOne) + parseFloat(numTwo);
}

function subtract(numOne, numTwo) {
  return parseFloat(numOne) - parseFloat(numTwo);
}

function multiply(numOne, numTwo) {
  return parseFloat(numOne) * parseFloat(numTwo);
}

function divide(numOne, numTwo) {
  return parseFloat(numOne) / parseFloat(numTwo);
}

function percentage(numOne, operator, numTwo) {
  if (numTwo === '' && operator === '%') { 
    // What is a one percent of a number
    return parseFloat(numOne) / 100;
  } else if (operator === '*') { 
    // What a specific percentage is of a number
    return parseFloat(numOne) / 100 * parseFloat(numTwo);
  } else if (operator === '+') { 
    // Calculate a percentage of a number and add it to the number
    return add(numOne, (parseFloat(numOne) / 100 * parseFloat(numTwo)));
  } else if (operator === '-') { 
    // Calculate a percentage of a number and subtract it to the number
    return subtract(numOne, (parseFloat(numOne) / 100 * parseFloat(numTwo)));
  } else {
    return 'ERROR!'
  }
}

function operate(numOne, operator, numTwo) {
  if (operator === '+') {
    return parseFloat(add(numOne, numTwo).toFixed(2));
  } else if (operator === '-') {
    return parseFloat(subtract(numOne, numTwo).toFixed(2));
  } else if (operator === '*') {
    return parseFloat(multiply(numOne, numTwo).toFixed(2));
  } else if (operator === '/') {
    return parseFloat(divide(numOne, numTwo).toFixed(2));
  } else if (operator === '%') {
    return parseFloat(percentage(numOne, operator, numTwo));
  } else {
    return 'ERROR!';
  }
}
let screenPrevious = document.querySelector('#screen-previous');
let screenCurrent = document.querySelector('#screen-current');

const btnCE = document.querySelector('#ce');
btnCE.addEventListener('click', () => {
  screenCurrent.textContent = '';
});

const btnAC = document.querySelector('#ac');
btnAC.addEventListener('click', () => {
  screenCurrent.textContent = '';
  screenPrevious.textContent = '';
  numOne = '';
  operator = '';
  numTwo = '';
});

const btnZero = document.querySelector('#zero');
btnZero.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '0';
  }
});

const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '1';
  }
});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '2';
  }
});

const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '3';
  }
});

const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '4';
  }
});

const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '5';
  }
});

const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '6';
  }
});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '7';
  }
});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '8';
  }
});

const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    screenCurrent.textContent += '9';
  }
});

const btnDot = document.querySelector('#dot');
btnDot.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (screenCurrent.textContent.includes('.')) {
    } else if (screenCurrent.textContent == '') {
      screenCurrent.textContent =+ '0' + '.';
    } else {
    screenCurrent.textContent += '.';
    }
  }
});

const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (numOne === '') {
      operator = '+';
      numOne = screenCurrent.textContent;
      screenCurrent.textContent += '+';
      screenPrevious.textContent = screenCurrent.textContent;
      screenCurrent.textContent = '';
    } else if (operator !== '+' && numTwo == '') {
      operator = '+';
      screenPrevious.textContent = screenPrevious.textContent.replace('-', '+');
      screenPrevious.textContent = screenPrevious.textContent.replace('/', '+');
      screenPrevious.textContent = screenPrevious.textContent.replace('*', '+');
      screenPrevious.textContent = screenPrevious.textContent.replace('%', '+');
    } else {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent = operate(numOne, operator, numTwo) + '+';
      numOne = operate(numOne, operator, numTwo);
      screenCurrent.textContent = '';
      operator = '+';
    }
  }
});

const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (numOne === '') {
      operator = '-';
      numOne = screenCurrent.textContent;
      screenCurrent.textContent += '-';
      screenPrevious.textContent = screenCurrent.textContent;
      screenCurrent.textContent = '';
    } else if (operator !== '-' && numTwo == '') {
      operator = '-';
      screenPrevious.textContent = screenPrevious.textContent.replace('+', '-');
      screenPrevious.textContent = screenPrevious.textContent.replace('/', '-');
      screenPrevious.textContent = screenPrevious.textContent.replace('*', '-');
      screenPrevious.textContent = screenPrevious.textContent.replace('%', '-');
    } else {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent = operate(numOne, operator, numTwo) + '-';
      numOne = operate(numOne, operator, numTwo);
      screenCurrent.textContent = '';
      operator = '-';
    }
  }
});

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (numOne === '') {
      operator = '*';
      numOne = screenCurrent.textContent;
      screenCurrent.textContent += '*';
      screenPrevious.textContent = screenCurrent.textContent;
      screenCurrent.textContent = '';
    } else if (operator !== '*' && numTwo == '') {
      operator = '*';
      screenPrevious.textContent = screenPrevious.textContent.replace('-', '*');
      screenPrevious.textContent = screenPrevious.textContent.replace('/', '*');
      screenPrevious.textContent = screenPrevious.textContent.replace('+', '*');
      screenPrevious.textContent = screenPrevious.textContent.replace('%', '*');
    } else {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent = operate(numOne, operator, numTwo) + '*';
      numOne = operate(numOne, operator, numTwo);
      screenCurrent.textContent = '';
      operator = '*';
    }
  }
});

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (numOne === '') {
      operator = '/';
      numOne = screenCurrent.textContent;
      screenCurrent.textContent += '/';
      screenPrevious.textContent = screenCurrent.textContent;
      screenCurrent.textContent = '';
    } else if (operator !== '/' && numTwo == '') {
      operator = '/';
      screenPrevious.textContent = screenPrevious.textContent.replace('-', '/');
      screenPrevious.textContent = screenPrevious.textContent.replace('+', '/');
      screenPrevious.textContent = screenPrevious.textContent.replace('*', '/');
      screenPrevious.textContent = screenPrevious.textContent.replace('%', '/');
    } else {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent = operate(numOne, operator, numTwo) + '/';
      numOne = operate(numOne, operator, numTwo);
      screenCurrent.textContent = '';
      operator = '/';
    }
  }
});

const btnPercentage = document.querySelector('#percentage');
btnPercentage.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (numOne === '') {
      operator = '%';
      numOne = screenCurrent.textContent;
      screenCurrent.textContent += '%';
      screenPrevious.textContent = screenCurrent.textContent;
      screenCurrent.textContent = '';
    } else if (operator !== '%' && numTwo == '') {
        if (operator === '+' || operator === '-') {
          numTwo = screenCurrent.textContent / 100 * numOne;
          screenPrevious.textContent += screenCurrent.textContent + '%=';
          screenCurrent.textContent = operate(numOne, operator, numTwo);
          numOne = '';
        } else {
          numTwo = screenCurrent.textContent / 100;
          screenPrevious.textContent += screenCurrent.textContent + '%=';
          screenCurrent.textContent = operate(numOne, operator, numTwo);
          numOne = '';
          return
        }
    } else {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent = operate(numOne, operator, numTwo) + '%';
      numOne = operate(numOne, operator, numTwo);
      screenCurrent.textContent = '';
      operator = '%';
    }
  }
});

const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
  if (screenCurrent.textContent.includes('ERROR!') || screenCurrent.textContent.includes('Infinity')) {
    return
  } else {
    if (operator !== '=' && numOne !== '') {
      numTwo = screenCurrent.textContent;
      screenPrevious.textContent += screenCurrent.textContent + '=';
      screenCurrent.textContent = operate(numOne, operator, numTwo);
      numOne = '';
      operator = '=';
    } else {
      return
    }
  }
});