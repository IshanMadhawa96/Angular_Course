"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log("From Summition:-" + add(1, 2));
//Arrow function
const sub = (num1, num2) => num1 - num2;
console.log("From Substraction with Arrow Functions:-" + sub(1, 2));
//another way
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log("From Multipy with  Functions variable:-" + mult(2, 3));
//optional parameters
function addOptional(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log("Optional Parameters Functions:-" + addOptional(2, 3, 4));
//default values
function addDefualtParametrs(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
console.log("Default value with Function Params:-" + addDefualtParametrs(2, 3));
//spread syntax
function spreadSyntax(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("From Spred Syntax:- " + spreadSyntax(5, 3, ...numbers));
//genaric functions
function getIteams(items) {
    return new Array().concat(items);
}
let concatResult = getIteams([1, 2, 3]);
let concatResultString = getIteams(["a", "b", "c"]);
console.log("Genaric functions" + concatResultString);
console.log("Genaric function Strings" + concatResult);
