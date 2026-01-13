const num1 = 5;
const num2 = 10;
const num3 = 15;

function sum(num1, num2){
    return num1 + num2;
}
let result = sum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);


let sum2 = (a, b) => a + b;
let result2 = sum2(20, 30);
console.log(`The sum of 20 and 30 is ${result2}`);

let score = num3 => num3 < 50;
let result3 = score(40);
console.log(`Is the score less than 50? ${result3}`);