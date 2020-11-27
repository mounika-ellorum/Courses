/**
 * CHALLENGE 1
 * Add elements at beginning of array
 * 1st elmnt add stng 'hello'
 * 2nd elmnt add num 100
 */
const myArr = [true, null];
myArr.unshift('hello',100);
console.log(myArr);

/**
 * CHALLENGE 2
 * Addelmnt at specific index
 * elmnt"abc" eith index 10
 * log console
 * what is length of array
 */
const myArr = [1,2];

// solution

myArr[10] ="abc";
console.log(myArr); //[1, 2, empty × 8, "abc"] length is 11

/**
 * CHALLENGE 3
 * Array of objects
 * 
 * Create Array with 3 objects.
 * Each object will have two properties carBrand and price
 * Add one more obj to the arr
 */
const arrayCars = [
    {
        carBrand: 'Swift',
        price: 300000
    },
    {
        carBrand: 'BMW',
        price: 1000000
    },
    {
        carBrand: 'Toyota',
        price: 500000
    }
]
console.log(arrayCars);

const newCar = {
    carBrand: "Honda",
    price: 15000
};
arrayCars.push(newCar);
console.log(arrayCars);

