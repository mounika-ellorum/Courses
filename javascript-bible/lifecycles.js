// Global scope
var a;

// function scope

function myFn() {
    var b;
}

// block scope
{
    var c;
}

if(true) {

} else {

}

for (var i=0; i<5; i++) {

}



// /**
//  * Diff bwn var and let
//  */

//  {
//      var b1 = 2;
//  }
//  console.log(b1); //2
//  {
//      let b1  = 2;
//  }
//  console.log(b1); // Uncaught RefrenceError: b nt defined4

//  // declare a variable using let in same scope gives error.
//  // reassigning variable using let is possible

//  // Hoisting using let

//  let e;
//  e = 5;
//  function fn4() {
//      let f;
//      f = 10;
//      console.log(f);  /// define first and then asign and then call
//  }

//  fn4();

/**
 * var -->  variables that are decalred across entire function. Declared
 * usually at beginning of scope.
 * 
 * let --> for temporary variables that are limited to the block scopes. 
 * decalred direclty in block or just before it.
 * 
 * 
 * const --> for variables that shouldn't be reassigned. declareation
 * place depends on const usage. 
 */

//  /**
//   * CHALLENGE
//   */
//  let b = 5;
 
//  a = b;

//  {
//      let c = a;

//  }

//  var a = 1;

//  var c;

//  console.log(a,b,c); //1 5 undefined