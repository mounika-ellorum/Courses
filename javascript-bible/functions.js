// /**
//  * EXAMPLE 1
//  * 
//  * simplest fun in js
//  */
// function myFunc() {}

// console.log(myFunc); // myFunc
// {}

// myFunc();

// const functionResult = myFunc();

// console.log(functionResult); // undefined

// console.log(myFunc()); // undefined

// console.log(myFunc(10, true));// undefined


// /**
//  * EXAMPLE 2
//  * 
//  * parameters of fun
//  */

//  function myFun(a,b) {
//      console.log(a,b);
//  }

//  myFun(10,5); // 10 5

//  myFun(true,null); // true null

//  myFun(); // undefined undefined

//  myFun("ABC"); //ABC undefined

// console.log(myFun(4,3)); // undefined as there is no return inside function

// /**
//  * EXAMPLE 3
//  * 
//  * functions call
//  */

//  function myFun(a,b) {
//      console.log(a,b);
//  }
//  console.log(myFun(3,2));

// //  console.log(a); Uncaught ReferenceError: 
// //  a is not defined

// /**
//  * EXAM 4
//  * 
//  * reuse params names
//  */

//  function myFun1(a,b) {
//      console.log(a,b);
//  }

//  function myFun2(a,b) {
//      console.log(a,b);
//  }
//  const a = true;
//  const b = null;
  
//  myFun1(1,2);
//  myFun2(3,4);

//  console.log(a,b);


// /**
//  * Add return
//  */

//  function sum(a,b) {
//      return a+b;
//  }

//  sum(10,5);
//  sum(); 
// console.log(sum(1,2)); // 3
// console.log(sum()); //Nan undefined + undefined


// /**
//  * 
//  * what happens after return
//  */

//  function myFun(a) {
//      console.log(a);
//      return a; //function stops here
//      console.log(a);
//      console.log("run");
//  }

//  myFun(10);


// /**
//  * CHallenge 1
//  * 
//  * CREATE fun called "mult" with 3 params
//  * print multiplication of 3 params
//  * create var and assign result
//  * dont use return
//  */

//  function mult(a,b,c) {
//      const result = a*b*c;
//      console.log(result);
//  }
// mult(1,2,3); // 6

// mult(2,3,"abc"); // NaN;

// mult(); //Nan;

// console.log(mult(0,2,3)); // 0 is printed inside and as there is no return we will get undefined


// /**
//  * challenge 2
//  * 
//  * concatenate strings
//  */


//  function concatenateStrings(str1,str2) {
//      return str1 + str2;
//  }
//  const str3 = concatenateStrings("hello", "world");
//  // hello world;

//  console.log(str3);


// /**
//  * CHALLENGE
//  * 
//  * use following built in functions:
//  * setTimeout
//  * setInterval
//  * clearInterval
//  * 
//  * you should print in console only 5 messages with two interval 2 seconds
//  * "here is msg no 1"
//  * "here is msg no 2"
//  * "here is msg no 3"
//  * "here is msg no 4"
//  * "here is msg no 5"
//  */
// let i = 1;
// const myInterval = setInterval(function() {
//     console.log('here is msg no' + i);
//     i = i + 1;
// },2000);

// setTimeout(function() {
//     clearInterval(myInterval);
// },10000);
