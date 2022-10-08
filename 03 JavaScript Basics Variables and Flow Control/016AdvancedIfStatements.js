'use strict';
// let isAccountLocked1 = true;
let isAccountLocked1 = false;
let userRole = 'admin';

if (isAccountLocked1) {
  console.log('Is account locked');
} else {
  console.log('Welcome!');
}

// let isAccountLocked = true;
let isAccountLocked = false;
let userRole1 = 'admin2';

// if (true)
// if (false)
if (isAccountLocked) {
  console.log('Is account locked');
} else if (userRole1 === 'admin2') {
  console.log('Welcome Admin!');
} else {
  console.log('Welcome User!');
}

//Challenge area

let temp = 81;

// It is Freezing outside!
// It is hot outside!
//Go for it. It is pretty nice.

if (temp <= 45) {
  console.log('It is Freezing outside!');
} else if (temp >= 110) {
  console.log('It is hot outside!');
} else if (temp === 80) {
  console.log('Nice and Sunny 80 degree weather');
} else {
  console.log('Go for it. It is pretty nice.');
}
