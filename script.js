let runningTotal = 0;
let currentNumber = 0;
let previousOperator = '=';
let currentOperator;

const add = (number1, number2) => {
    return number1 + number2
}

const subtract = (number1, number2) => {
    return number1 - number2;
}

const multiply = (number1, number2) => {
    return number1 * number2;
}

const divide = (number1, number2) => {
    return number1 / number2;
}

const operate = (operator, number1, number2) => {
    let value = 0;

    switch (operator) {
        case '+':
            value = add(number1, number2);
            break;
        case '-':
            value = subtract(number1, number2);
            break;
        case '*':
            value = multiply(number1, number2);
            break;
        case '/':
            value = divide(number1, number2);
            break;
    }

    return value;
}

const clearCalculator = () => {
    display.textContent = 0;
    runningTotal = 0;
    currentNumber = 0;
    currentOperator = null;
    previousOperator = '=';
}

const enterNumber = number => {
    if (display.textContent.length < 9) {
        currentNumber += number;
        display.textContent = Number(currentNumber);
    } else {
        return;
    }
}

const display = document.querySelector('#display');
display.textContent = runningTotal;

const numberButtons = document.querySelectorAll('.calculator-number');
const operatorButtons = document.querySelectorAll('.calculator-operator');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', event => {
    if (!currentNumber.toString().includes('.')) {
        enterNumber(event.target.innerText);
    }
})

clearButton.addEventListener('click', () => {
    clearCalculator();
})

numberButtons.forEach(button => {
    button.addEventListener('click', event => {
        enterNumber(event.target.id);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (currentOperator) {
            if (currentOperator !== '=') {
                runningTotal = operate(currentOperator, Number(runningTotal), Number(currentNumber));
                display.textContent = runningTotal;
                previousOperator = currentOperator;
            } else if (currentOperator === '=') {
                runningTotal = operate(previousOperator, Number(runningTotal), Number(currentNumber));
                display.textContent = runningTotal;
            }
        } else {
            runningTotal = Number(currentNumber);
        }
        currentOperator = event.target.innerText;

        if (currentOperator !== '=') {
            currentNumber = '';
        }

    })
})