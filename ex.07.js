// IEEE 754-200 PADRÃO


let num1 =1;
let num2 = 2.5;

//console.log(num1.tostring() + num2);
//console.log(typeof num1);

let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

let num2 = 0.1; // number
 

num1  +=    num2;
num1  +=    num2;
num1  +=    num2;
num1  +=    num2;
num1  +=    num2;
num1  +=    num2;
num1  +=    num2;
num1  +=    num2;

num1 = parseFloat(num1.toExponential(2));

console.log(num1);
console.log(Number.isInteger(num1));