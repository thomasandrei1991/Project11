let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let total = document.querySelector('#total');
let op = document.querySelector('#op');
let computeBtn = document.querySelector('#compute');

num1.placeholder = "First number";
num2.placeholder = "Second number";
total.placeholder = "Total";
op.placeholder = "Operator (+ - * /)";

function compute() {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const operator = (op.value || '+').trim();

    if (isNaN(a) || isNaN(b)) {
        total.value = 'Invalid input';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b === 0 ? '∞' : a / b;
            break;
        default:
            total.value = 'Unknown op';
            return;
    }

    total.value = result;
}

if (computeBtn) {
    computeBtn.addEventListener('click', compute);
}