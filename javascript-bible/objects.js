// /**
//  * Create object and modify its props
//  */
// let myObj;

// myObj = {
//     a: 10,
//     b: "abc"
// };
// console.log(myObj);

// myObj.a = 15;
// console.log(myObj);

// myObj.c = true;
// console.log(myObj);

// delete myObj.b;

// console.log(myObj);

// console.log(myObj.a);

// /**
//  * CHALLENGE 1
//  * 
//  * create variable "myPost"
//  * initial value should be {}
//  * add prop "postTitle" and value "Object is reference type"
//  * add one more prop with "postLikes" with value 0
//  * add third prop "shared" and set its value "false"
//  * increase value of "postLikes" by 1
//  * delete prop "shared"
//  */

//  let myPost = {};
//  myPost.postTitle = "Object is ref type";
//  myPost.postLikes = 0;
//  myPost.shared = false;

//  console.log(myPost);
//  myPost.postLikes = myPost.postLikes + 1;

//  console.log(myPost);
//  delete myPost.shared;

//  console.log(myPost);


// /**
//  * CHALLENGE 2
//  * 
//  * Use "const" for obj declaration
//  */

//  const myObj = {};
//  myObj.a = true; // No error variable is not reassigned
//  console.log(myObj);

//  myObj = {
//      a: true
//  }; 
// //  uncaught TypeError: 
// //  Assignment to constant variable.


// /**
//  * CHALLENGE 3
//  * 
//  * create variable "myobj" and add prop "a" - 10
//  * create another variable "copyMyObj" and value is myObj
//  * add new value to prop "b" with value false to "copyMyObj"
//  * print console "myObj" and "copyMyObj"
//  */

//  let myObj = {
//     a: 10,
//  };
//  let copyMyObj = myObj;
//  copyMyObj.b = false;
//  console.log(myObj);
//  console.log(copyMyObj);


// /**
//  * CHALLLENGE 4
//  * Bracket notation
//  */

//  let myObj = {
//      a: true,
//      b: null,
//      c: 25
//  };

//  console.log(myObj["a"]);

// //  console.log(myObj[a]); 
// //  Uncaught ReferenceError: a is not defined

// const propName = "c";

// console.log(myObj[propName]);
// // 25

// console.log(myObj["propName"]);
// // undefined

// myObj["new" + "Prop" + "Name"] = "Value for dynamically computed prop";

// console.log(myObj);


// /**
//  * CHALLENGE 5
//  * 
//  */

//  const myObj = {
//      a: 3,
//      b: true
//  };

//  // code exec is not stopped

//  console.log(myObj.c); // undefined

//  // code exec is stopped
// //  console.log(nonDecVar); Uncaught ReferenceError: 
// //  nonDecVar is not defined


// // IMPORTANT !!!
// // never assign "undefined" to any prop or variable.
// // use "null" instead.
// myObj.newProp = undefined;

// console.log(myObj);

// console.log(myObj.newProp);


// /**
//  * CHALLENGE 6
//  * 
//  * create obj "objNes" with intial value {}
//  * add prop with initial value {}
//  * add prop a with value "null" to objNes --> dot notation
//  * add prop b with value "true" to objNes --> bracket not
//  * create new variable with prop name
//  */

//  let objNes = {};
//  objNes.nestObj = {};
//  objNes.nestObj.a = null;

//  const newProp = "b";
//  objNes.nestObj[newProp] = true;

//  console.log(objNes);
