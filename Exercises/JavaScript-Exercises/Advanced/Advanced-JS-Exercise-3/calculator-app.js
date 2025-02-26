const display = document.querySelector('#calc-screen');
const numberButtons = document.querySelectorAll('.numberKeys');
const operatorButtons = document.querySelectorAll('.arithmeticKeys');
const equalButton = document.querySelector('#equalsBtn');
const clearButton = document.querySelector('#clearBtn');
const deleteButton = document.querySelector('#deleteBtn');
const decimalButton = document.querySelector('#decimalBtn');
const signButton = document.querySelector('#signBtn');
const percentButton = document.querySelector('#percentBtn');

let firstNumber = null;
let secondNumber = null;
let operator = null;
let resetScreen = true;

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return secondNumber === 0 ? 'Math Error' : firstNumber / secondNumber;
        default:
            return 'Error';
    }
    return parseFloat(result.toExponential(10));
}

function resultFormat(result) {
    if (typeof result === "number") {
        if (!Number.isInteger(result)) {
            return parseFloat(result.toFixed(10));
        }
        return result;
    }
    return result;
}

numberButtons.forEach(button => {
    button.addEventListener('click', (callback) => {
        if (display.textContent === '0' || resetScreen) {
            display.textContent = button.textContent;
            resetScreen = false;
        } else {
            display.textContent += button.textContent.trim();
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (callback) => {
        if (firstNumber !== null && operator !== null && display.textContent !== "") {
            secondNumber = parseFloat(display.textContent);
            let result = operate(firstNumber, secondNumber, operator);
            display.textContent = resultFormat(result);
            firstNumber = result;
        } else {
            firstNumber = parseFloat(display.textContent);
        }
        
        const operatorMapping = {"÷": "/", "×": "*", "−": "-", "+": "+"};
        operator = operatorMapping[button.textContent.trim()];

        display.textContent = "";
        resetScreen = false;
    });
});

equalButton.addEventListener('click', (callback) => {
    if (firstNumber === null || operator === null) {
        return;
    }

    if (display.textContent.trim() === "") {
        return;
    }

    secondNumber = parseFloat(display.textContent);

    if (isNaN(secondNumber)) {
        return;
    }

    let result = operate(firstNumber, secondNumber, operator);

    display.textContent = resultFormat(result);
    firstNumber = result;
    secondNumber = null;
    operator = null;
    resetScreen = true;
});

clearButton.addEventListener('click', (callback) => {
    display.textContent = `0`;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    resetScreen = true;
});

deleteButton.addEventListener('click', (callback) => {
    let currentText = display.textContent.trim();

    if (currentText.length > 1) {
        display.textContent = currentText.slice(0, -1);
    } else {
        display.textContent = '0';
        resetScreen = true;
    }
});

decimalButton.addEventListener('click', (callback) => {
    display.textContent = display.textContent.replace(/\s+/g, '');

    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
});

signButton.addEventListener('click', (callback) => {
    let currentNumber = parseFloat(display.textContent);
    if (!isNaN(currentNumber)) {
        display.textContent = currentNumber * -1;
    }
});

percentButton.addEventListener('click', (callback) => {
    let currentNumber = parseFloat(display.textContent);
    if (!isNaN(currentNumber)) {
        display.textContent = currentNumber / 100;
    }
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        if (display.textContent === "0" || resetScreen) {
            display.textContent = key;
            resetScreen = false;
        } else {
            display.textContent += key;
        }
    } else if (key === ".") {
        if (!display.textContent.includes(".")) {
            display.textContent += ".";
            resetScreen = false;
        }
    } else if (["+", "-", "*", "/"].includes(key)) {
        operatorButtons.forEach(button => {
            if (button.textContent.trim() === key) {
                button.click();
            }
        });
    } else if (key === "Enter" || key === "=") {
        equalButton.click();
    } else if (key === "Backspace") {
        deleteButton.click();
    } else if (key === "Escape") {
        clearButton.click();
    }
});