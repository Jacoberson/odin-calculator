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

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.calculator-button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        display.textContent += event.target.innerText;
    })
})