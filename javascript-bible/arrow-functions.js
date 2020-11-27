/**
 * CHALLENGE
 * 
 */

 const createButton = () => {
     let clickQty = 0;
     const btn = document.createElement('button');
    //  btn.innerHTML = "Click me";
    //  btn.onclick = function() {
    //      btn.innerHTML = "Button was clicked N times";
    //  }

    // // regular fn expression
    // btn.addEventListener('click', () => {
    //     console.log('button clocked');
    //     btn.innerHTML = 'button clicked " + ++clickQty' + " times";
    // });

    // Arrow function expression
    btn.addEventListener('click', () => {
        console.log('btn was clicked');
        btn.innerHTML = "button clicked " + ++clickQty + " times";
    }) 
     document.body.appendChild(btn);
 };

 createButton();


