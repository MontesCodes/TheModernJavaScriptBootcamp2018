'use strict';
/// ===  -> equality operator
/// !==  -> not equal opertor
/// <  -> less than Operator
/// >  -> Greater than Opeartor
/// <=  -> less than or equal to Operator
/// >=  -> Greater than or equal to Opeartor

let temp = 131;
let isFreezing = temp === 31;
let isFreezing1 = temp === 31;
isFreezing1 = temp !== 32;
isFreezing1 = temp < 32;
isFreezing1 = temp > 32;
isFreezing1 = temp <= 32;
isFreezing1 = temp >= 32;

console.log(isFreezing1);

/// if statement
if (isFreezing) {
  console.log('It is freezing Outside!');
}
if (temp <= 32) {
  console.log('Yes It is freezing Outside!');
}

if (temp >= 110) {
  console.log('It is way to hot outside!');
  console.log('Testing123');
}

/// Challenge Area

/// Create age set to Your age
let age = 66;

/// If 7 or under print message about child pricing
if (age <= 7) {
  console.log('Child pricing is be applied');
}
/// If 65 or older print message about senior discount
if (age >= 65) {
  console.log('Senior pricing is be applied');
}
