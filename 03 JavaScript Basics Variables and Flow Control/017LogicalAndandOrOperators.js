'use strict';
let temp = 59;

// Logical "And" Operator - True if both sides are true. False otherwise
if (temp >= 60 && temp <= 90) {
  console.log('1-It is  Pretty Nice Out');
}

// Logical "Or" Operator - True if at least one side is true. False otherwise

if (temp <= 0 || temp >= 120) {
  console.log('1-Best not to go out side at this time.');
}

// Same setup as above but If else setup
if (temp >= 60 && temp <= 90) {
  console.log('2-It is  Pretty Nice Out');
} else if (temp <= 0 || temp >= 120) {
  console.log('2-Best not to go out side at this time.');
} else {
  console.log('2-eh. Do what you want with this current Temp');
}

// Challenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu

if (isGuestOneVegan == true && isGuestTwoVegan == true) {
  console.log('Only offer up Vegan dishes.');
} else if (isGuestOneVegan == false && isGuestTwoVegan == false) {
  console.log('Offer up all items on the menubar.');
} else if (isGuestOneVegan == false || isGuestTwoVegan == false) {
  console.log('Offer up some Vegan dishes');
}

// Correct way:
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('2-Only offer up Vegan dishes.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('2-Offer up some Vegan dishes');
} else {
  console.log('2-Offer up all items on the menubar.');
}
