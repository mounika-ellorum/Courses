// /**
//  * SECTION 1
//  * Arithmetic operators
//  * 
//  */
// let a,b;
// a = 1;
// b = 2;

// // Math with numbers
// console.log(a + b); //3
// console.log(a * b); //2
// console.log(a / b); //0.5
// console.log(a - b); // -1

// a = "abc";
// b = 5;

// // Math with non numbers
// console.log(a + b); // abc5
// console.log(a * b); // Nan
// console.log(a / b); // NaN
// console.log(a - b); // NaN

// a = "hello";
// b = "mouniks";

// // Strings concatenation
// console.log(a + " " + b); 

// c = "1";
// // Unary plus
// console.log(+c); // 1 --> converts string to number
// console.log(Number(c)); // 1

// c = undefined;

// console.log(+c); //NaN; --> not possible to conv undefined to numbr

// let d = 5;
// ++d;
// console.log(d); // 6
// d++;
// console.log(d); //7

// console.log(++d); //8
// console.log(d++); //8

// /**
//  * SECTION 2
//  * 
//  * Comparison operators
//  */
// let a,b;
//  a = 5;
//  b = 7;
//  console.log(a < b); // true

//  let str1,str2;
//  str1 = "abc";
//  str2 = "bcd";

//  console.log(str1 > str2); // false acording to lexical order a -> 1, b->2 hence a lessthan b ===> "abc" < "bcd"

//  /**
//   * Equality operator
//   */

// //   == --> only value is compared
// //   === --> both type and value are compared

// /**
//  * Logical operators
//  */
// //  OR returns value of first truthy operand

// //  AND returns value of first falsy operand

// // if all  operands are true then value of last operand is result


// /**
//  * CHALLENGE 1
//  * compare 2 vars var1 and var2
//  * log to console "true" if "var1" <= "var2"
//  * convert both vars to nums before comparison.
//  */
// let var1 = 10;
// let var2 = "5";
// console.log(+var1 <= +var2); // false

// var1 = "20";
// var2 = 100;
// console.log(+var1 <= +var2); //true


// /**
//  * CHALLENGE 2
//  * 
//  * what is result
//  */
// console.log(3 || true && null || false); // 3
// // step1: true && null --> null
// // step2: 3 || null --> 3
// // result: 3
