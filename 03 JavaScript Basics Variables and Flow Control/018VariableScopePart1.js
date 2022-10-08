'use strict';
// Lexical Scope (Static Scope)
// Local Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne) --> level 1
// Local Scope (varTwo) --> level 2
// Local Scope (varFour) -- level 2.1
// local Scope (varThree) --> level 3

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);
  if (true) {
    let = varFour = 'varFour';
  }
}

if (true) {
  let varThree = 'varThree ';
}

// varTwo is within the above block and can not be accessed below
console.log(varTwo);
