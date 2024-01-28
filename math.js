let currentInput ='';
let operation = '+';
let previousInput = '';

function input(num) {
    currentInput += num;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
             break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
              break;
        case '*':
             result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
             result = parseFloat(previousInput) / parseFloat(currentInput);
             break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    currentInput = result;
    operation = null;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    document.getElementById('display').value = '';
}