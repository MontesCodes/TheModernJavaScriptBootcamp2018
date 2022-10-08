'use strict';
// JavaScript uses Lexical Scope (static Scope)
// Global Scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
// first Local Scope (varTwo)
// third Local Scope (varFour) child to first Local Scope
// second Local Scope (varThree)

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);

  if (true) {
    let varFour = 'varFour';
  }
}

if (true) {
  let varThree = 'varThree';
}

console.log(varTwo);
