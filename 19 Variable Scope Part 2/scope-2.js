'use strict';
// Global scope 1 (Andrew1)
// Local Scope 1 (Mike1)
// Global Scope 2 (Andrew2)
// Local Scope 2 (Mike2)
// Child Local Scope of Scope 2 (Jen2)

let name = 'Andrew1';

if (true) {
  let name = 'Mike1';
  if (true) {
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

let name2 = 'Andrew2';

if (true) {
  let name2 = 'Mike2';
  if (true) {
    name2 = 'Jen2';
    console.log(name2);
  }
}

if (true) {
  console.log(name2);
}

if (true) {
  //   let name3 = 'mike3';
  if (true) {
    name3 = 'Jen3';
    console.log(name3);
  }
}

if (true) {
  console.log(name3);
}
