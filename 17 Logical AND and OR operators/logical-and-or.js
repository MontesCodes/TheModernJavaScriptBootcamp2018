'use strict';

let temp = 150;

// Logical AND operator - True if both sides are True. False otherwise
// Logical OR operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out');
}
if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
}
// adding in else statement

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
} else {
  console.log('Eh. Do what you want');
}

// Challenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? make sure to offer up some vegan options.
// Else, Offer up anything on the menu.

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('only offer up vegan dishes.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('make sure to offer up some vegan options.');
} else {
  console.log('Offer up anything on the menu.');
}
