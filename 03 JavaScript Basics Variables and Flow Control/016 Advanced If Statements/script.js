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
