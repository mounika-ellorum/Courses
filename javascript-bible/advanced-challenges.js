/**
 * CHALLENGE 
 * create fun sum() that will sum all argmnts passed to it
 * quantity of argmnts is unknown.
 * 
 * use console.log() at the end of sum() to porint result
 */

 "use strict";

 function sum(...args) {
    var total;
    total = args.reduce((acc, elem) => acc + elem, 0);
    console.log(total);
 }
 sum(1,3);
 //4

 sum(10, 20, 5);
//

/**
 * CHALLENGE 2 - Const
 * answer following questins
 * 1. why no error is generated after the line 34?
 * 2. why after the line 41 type error is generared?
 */
"use strict";

var arr = [1,2];

arr.push(3);

console.log(arr); // [1,2,3];

arr = [1,2,3,4];
// before uncaughttype error:
// assignment to constant variable.
// after: no error

console.log(arr);

// replace const with var;
 

/**
 * CHALLENGE -Let
 * change code to match the output
 * 
 */
"use strict";

var i = 10;

for(let i = 0; i < 5; i++){
    // some stuff
    console.log(i); // 5
}

console.log(i); // 10
// before 50
// after 55

/**
 * Hoisting
 * 
 * change code to fix first error after the line 79
 * error after line 20 should stillbe generated
 * 
 */
"use strict";

var a = 5;
var b = 10;

if(b > a) {
    let c = 2;
    c = a + b + c;
    console.log(c);
    // before: uncaught reference error c is not defined
}

// console.log(c);

/** 
 * CHALLENGE
 * Ternary operator 
 * */

 "use strict";

 function isNumber(a) {

    return typeof a === 'number' ? "that's a num" : "that's not a num"
    //  if(typeof a === "number") {
    //     return "That's number";
    //  } else {
    //      return "That's not a number";
    //  }
 }
 console.log(isNumber(10));
 // That's number

 console.log(isNumber("Hey there"));
 // that's not a number

 console.log(isNumber(true));
 // that's not a number

 /**
  * CHALLENGE
  * Arrow functions
  */
 "use strict";

 var mult = (a,b) => a*b;

 setTimeout(() => console.log(mult(5,10)) , 1000);

 // 50

 /**
  * CHALLENGE - Default parameters
  * 1. why on theline 134 we can't simply use following stmnts
  mult = mult || 2;

  set default value of the mult paramter
  in the multiplyBy() function.
  */

  "use strict";

  function multiplyBy(a, mult = 2) {
    // mult = mult || 2;
    // mult = mult !== undefined ? mult : 2;
    console.log(a * mult);
  }

  multiplyBy(2);
  //4

  multiplyBy(2, undefined);
  //4

  multiplyBy(2,0);


  /**
   * CHALLENGE Object Destructuring
   * 
   * declare mult() function that will multiply values of the x,y,z fields of the passed object.
   * 
   */
  "use strict";

  var obj = {
      x: 5,
      y: 20,
      z: 3
  };

  
  // write mult() function here

  function mult(object) {
      var { x, y, z } = object;
      return x * y * z;
  }

  console.log(mult(obj));
  //300

  /**
   * Destructuring and Rest operator
   * 
   * assign values to the a,b,c variables
   * using destructuring and rest operator.
   * 
*/
"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];
[a,b, ...c] = arr;
// write code here

console.log(a);
//1

console.log(b);
//2

console.log(c);
//[3,4,5,6,7];

/**
 * CHALLENGE Spread operator
 * use spread operator to construct arr variable
 */

 "use strict";

 var a, b, c, d, arr;

 a = [1, 2];
 b = [4, 5];
 c = [8, 9, 10];
 d = 11;

 // write code here
  arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

 console.log(arr); // [0,1,2,3,4,5,6,7,8,9,10,11];


 /**
  * CHALLENGE
  * copy array
  * create copy of array
  */
 "use strict";

 var a = [1, 2, 3,[4, 5]];

 var b;

//  b = a.slice();

b = [...a];
 // copy array here

 b.push("newElement");
//  b[3].push(6);

 console.log(a);

 console.log(b);

 /**
  * CHALLENGE
  * template literals
  * 
  * create carInfo() function that
  * will return info about each car.
  * 
  * Car is considered cheap if it's price is <= 20000
  * car is considered expensive if it's price is > 20000
  */
 "use strict";

 var cars = [
    {brand: "Honda", price: 13000},
    {brand: "Rolls-Royce", price: 120000}
 ];

 function carInfo(car) {
    var s;
    s = car.price <= 20000 ? "cheap" : "expensive";
    // if(car.price <= 20000) s = "cheap";
    // else s = "expensive";
    return `Price of my new ${car.brand} \
    is ${car.price}$ and it is \ 
    ${car.price <= 20000 ? "cheap" : "expensive"} car.`;
 }
 // write carInfo() function here

 cars.forEach(car => console.log(carInfo(car)));

 /**
  * price of my new Honda is 13000$
  * and it is cheap car.
  */

  /**
   * price of my new Rolls-Royce
   * is 120000$ and it is expensive car
   */


   /**
    * CHALLENGE Object Destructuring
    * 
    * create shortPerson() function that will destructure each person
    * object.
    * sample result:
    * {n: "Mike", c: "Spain", a: 23 p: 100}
    * if input object doesn't have postQuantity field 
    * it should get default value 0.
    */

    "use strict";

    var person1 = {
        name: "Mike",
        info: {
            country: "Spain",
            age: 23
        },
        postQuantity: 100
    };

    var person2 = {
        name: "Alice",
        info:{
            country: "Italy",
            age: 25
        }
    };

    function shortPerson(obj) {
        var {
            name: n,
            info: {
                country: c,
                age: a
            },
            postQuantity: p = 0
        } = obj;
        return {
            n,
            c,
            a,
            p
        };
    }
    console.log(shortPerson(person1));
    console.log(shortPerson(person2));

    /**
     * CHALLENGE Iterate over string
     * 
     * count number of the lowercase vowel letters in the string.
     * vowel letters - a, e, i, o, u
     */
    "use strict";

    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];

    var str = "Today is best day of my life";

    // write code here

    // for(let i = 0; i < str.length; i++) {
    //     if(vowels.includes(str[i])) vowelsCount++;
    //     // if(vowels.indexOf(str[i]) !== -1) vowelsCount++;
    // }
    // str.forEach(s => console.log(s)); // uncaught type error: str.forEach is not a function
    
    for(let s of str) {
        if(vowels.includes(s)) vowelsCount++;
    }
    console.log(vowelsCount);

    /**
     * CHALLEGNE (Immediately Invoked Function Expression)
     * complete IIFE that will expose following methods:
     * greet() - it will take one argument and return greeting string
     * changeGreeting() - it will change greeting string
     
     Initial greeting string "Hey, that's" must be defined inside IIFE"
     */

     "use strict";

     var greeting = (() => {
        var greetingString = "Hey, that's";
        function greet(name) {
            return `${greetingString} ${name}`
        }

        function changeGreeting(newGreeting) {
            greetingString = newGreeting;
        }

        return {
            greet: greet,
            changeGreeting: changeGreeting
        }
     })();
    

     console.log(greeting.greet("Bob"));
     // Hey, that's Bob

     console.log(
        greeting.changeGreeting("Good Morning from")
     );
    // undefined

    console.log(greeting.greet("Emily"));
    // Good Morning from Emily


