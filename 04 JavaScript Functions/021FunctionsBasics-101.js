'use strict';
// Function - input (argument), -> code, -> output(Return value)

let greetUser = function () {
  console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();
greetUser();

let square1 = function (num) {
  console.log(num);
};

let square2 = function (num) {
  let result = num * num;
  return result;
};

square1(3);
square1(12);

let value = square2(4);
let otherValue = square2(9);

console.log(value);
console.log(otherValue);

// Challenge

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
