/**
 * CHALLENGES
 */

 /**
  * TASK 1
  * 
  * Fucntion scopes
  */
 const b = 2;
 let d = 15;
 function myFn1(a) {
    let b;
    let d = 10;
    myFn2(b);
 }
 function myFn2(a) {
    let c = 5;
    console.log(a,b,c,d); // undefined 2 5 15;
 }
 myFn1();

 /**
  * TASK 2
  * strict mode
  */

  "use strict";
  function myFn() {
      a = 2;
      return a;
  }
  myFn(); // uncaught reference error: a is undefined.

/**
 * TASK 3
 * 
 * callback function
 */
setTimeout(function myFn() {
    console.log('hello from myFn');
},2000);

myFn();

// answer
// uncaught ReferenceError:myFn is not defined
// hello from myFn;