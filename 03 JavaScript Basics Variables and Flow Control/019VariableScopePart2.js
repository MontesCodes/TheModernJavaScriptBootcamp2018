'use strict';
// Global Scope (name)
//->Local Scope (name)
//-->Local Scope
//->local scope

let name1 = 'Andrew';

if (true) {
  let name1 = 'Mike';
  if (true) {
    name1 = 'Jen';
    console.log(name1);
  }
}
if (true) {
  console.log(name1);
}

//Leaked Global Scope
if (true) {
  if (true) {
    name1 = 'Jen';
    console.log(name1);
  }
}
if (true) {
  console.log(name1);
}
