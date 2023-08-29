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
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}

const clearCalculator = () => {
    display.textContent = '0';
}

const enterNumber = number => {
    if (display.textContent === '0') {
        display.textContent = ''
    }
    if (display.textContent.length < 9) {
        display.textContent += number;
    } else {
        return;
    }

}

const display = document.querySelector('#display');
display.textContent = '0';

const numberButtons = document.querySelectorAll('.calculator-number');
const operatorButtons = document.querySelectorAll('.calculator-operator');
const clearButton = document.querySelector('#clear');

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
        console.log(event.target.innerText);
    })
})