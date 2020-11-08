// /**
//  * EXAMPLE 1 - Variable Declaration
//  */

//  var a;
//  console.log(a);

// //  console.log(b); uncaught
// // ReferenceError: b is not defined

// let c;

// console.log(c);

// // const d; Uncaught SyntaxError: 
// // Missing initializer in const declaration

// /**
//  * EXAMPLE 2 - "let"
//  */
// let myNumber = 10;

// console.log(myNumber);

// // declaration
// let myString;

// console.log(myString);

// // assignment
// myString = "Hello from String";

// console.log(myString);

// //re-assignment
// myString = "New value for myString variable";

// console.log(myString);


// /**
//  * EXAMPLE 3 - "var"
//  */
// var myNumber = 10;

// console.log(myNumber);

// // declaration
// var myString;

// console.log(myString);

// // assignment
// myString = "Hello from String";

// console.log(myString);

// //re-assignment
// myString = "New value for myString variable";

// console.log(myString);


// /**
//  * EXAMPLE 4 - const
//  */

//  const myBoolean = true;
//  console.log(myBoolean);

// //  myBoolean = false; Uncaught TypeError: 
// //  Assignment to constant variable.

// // const myBoolean = false; Uncaught SyntaxError: 
// // Identifier 'myBoolean' has already been declared

// /**
//  * CHALLENGE 1
//  * 
//  * Declare variable "myobject" and assign value {}.
//  * Print this variable to the console.
//  * NOTE: variable "myObject" will not be reassigned in future.
//  */

//  const myObject = {};

//  console.log(myObject);

// //  myObject = {};Uncaught TypeError: 
// //  Assignment to constant variable.


// /**
//  * CHALLENGE 2
//  * Declare "x" and assign value 10 to it
//  * Declare "y" and assign value true to it
//  * Declare "myObject" and assign object with two name-value pairs
//  * Declare "anotherObj"
//  * later assign value to it with three name-value pairs
//  */
let x = 10;
// const y = true;
// const myObject = {
//     a: x,
//     b: y
// };
//  console.log(myObject);

//  /**
//   * {a: 10, b:true, __proto__: object}
//   */
 x = 20
//  let anotherObj;
//  anotherObj = {
//     newA: x,
//     b: y,
//     c: myObject
//  };
//  console.log(anotherObj);

//  /**
//   * {
//   * newA: 20, 
//   * b:true, 
//   * c:  {a: 10, b:true, 
//   * __proto__: object}, __proto__: object
//   * }
//   */
