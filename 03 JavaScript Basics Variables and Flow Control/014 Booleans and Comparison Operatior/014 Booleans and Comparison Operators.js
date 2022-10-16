'use strict';
/// ===  -> equality operator
/// !==  -> not equal opertor
/// <  -> less than Operator
/// >  -> Greater than Opeartor
/// <=  -> less than or equal to Operator
/// >=  -> Greater than or equal to Opeartor

let temp = 31;
let isFreezing1 = temp === 31;
isFreezing1 = temp !== 32;
isFreezing1 = temp < 32;
isFreezing1 = temp > 32;
isFreezing1 = temp <= 32;
isFreezing1 = temp >= 32;

console.log(isFreezing1);

/// Challenge Area

/// Create age set to Your age
let age = 38;
/// Calculate is child - if they are 7 or under
let isChild = age <= 7;
/// Calculate is senior - if they are 65 or older
let isSenior = age >= 65;
/// Print is child value
console.log(isChild);
/// Print is senior value
console.log(isSenior);
