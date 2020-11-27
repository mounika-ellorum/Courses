/**
 * create fn 'templateLiteral' with one param "num"
 * 
 * Function is expected to return template literal.
 * Sample function calls are below.
 */


 const templateLiteral = num => `Number is ${num}
 This Nubmer is ${num >= 10 ? "greater" : "less"} than 10.
 square root of number is ${Math.sqrt(num)}`;
 // TEST 1
 const myNum = 9;
 console.log(templateLiteral(myNum));
 /*
 Number is 9
 lessa than 10
 square root is 3
 */

 // TEST 2
 const myAnotherNum = 25;
 console.log(templateLiteral(myAnotherNum));
 /**
  * Nummber is 25
  * number greaterthan 10
  * square root is 5
  */
