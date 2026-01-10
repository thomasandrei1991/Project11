let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operator = document.querySelector('#operator');
let total = document.querySelector('#total');
let compute = document.querySelector('#compute');


function calculate() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let op = operator.value;
    let result;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            result = 'Invalid operator';
            return;
    }   
    total.value = result;    
    
}