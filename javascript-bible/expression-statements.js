//function call is an expression

// 'if' is a statement not an expression
//'return' is a statement not an expression hence they cant be passed as args inside function.

/**
 * Challenges
 * 
 */

 /**
  * TASK 1
  * is exp or stmnt?
  */

  const myObj = {
      x: 10,
      y: true
  };
//   console.log(delete myObj.x);
// "delete" operator is used in expressions
  
//   delete myObj.x; // Expression stmnt

/**
 * TASK 2
 */
function fn() {
    console.log("hello frm 'fn' function");

    return function(a) {
        console.log(a);
    };
}

// fn()
// (true) ---> fn()(true)  // result -->
//  hello frm fn ...
//  true

// fn();
// (true) --> result
// hello from fn...
