const num1 = 10;
const num2 = 2;

// addition +
num1 + num2;
const addition = num1 + num2;
// 12

// subtraction -
num1 - num2;
const difference = num1 - num2; 
// 8

// division /
num1 / num2;
const quotient = num1 / num2;
// 5

// multiplication *
num1 * num2;
const product = num1 * num2;
// 20

// remainder (mod) %
5 % 4 // 1
const remainder = num1 % num2;
// 0

// power **
const power = num1 ** num2;
// 100


Math

// round
Math.round(4.1); // 4
Math.round(4.9); // 5
Math.round(4.5); // 5

// floor
Math.floor(4.1); // 4
Math.floor(4.9); // 4
Math.floor(4.5); // 4

// ceil
Math.ceil(4.1); // 5
Math.ceil(4.9); // 5
Math.ceil(4.5); // 5

// random
Math.random(); // between 0 and 1, except 0 and 1

parseInt("10.7"); // 10
parseInt("lsadkjsa"); // NaN
parseInt("tyuiop67"); // 67
NaN; // datatype of NaN is number

Math.round(Math.random() * 5) + 10 
// 0.367890 * 5 = 1.6 = 2 + 10 = 12
// 0.9 * 5 = 4.5 = 5 + 10 = 15
// 0.8 * 5 = 4 = 4 + 10 = 14
// 0.1 * 5 = 1 + 10 = 11
// 0.08 * 5 = 0.4 = 0 + 10 = 10


// shortcuts (operators)
// increment ++
let number = 1;
number++;
++number;

// decrement --
number--;
--number;

number = number + 5;
number += 5;