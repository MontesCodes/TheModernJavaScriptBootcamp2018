'use strict';
let isAccountLocked = false;
let userRole = 'admin';
userRole = 'user';

if (isAccountLocked) {
  console.log('Account Status1\nIs account locked');
} else {
  console.log('Account Status1\nWelcome!');
}

if (isAccountLocked) {
  console.log('Account Status2\nIs account locked');
} else if (userRole === 'admin') {
  console.log('Account Status2\nWelcome Admin');
} else {
  console.log('Account Status2\nWelcome user');
}

/// Challenge Area
let temp = 121;

/// It is freezing outside!
/// It is hot outside!
/// Go for it. It is pretty nice.

if (temp <= 31) {
  console.log('Temp status\nIt is freezing outside!');
} else if (temp <= 45) {
  console.log('Temp status\nGo for it. It is pretty nice');
} else if (temp <= 110) {
  console.log('Temp status\nIt is hot outside!');
} else {
  console.log('Temp status\nIt is blazing hot outside!');
}
