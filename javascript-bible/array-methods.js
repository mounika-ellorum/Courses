/**
 * CHALLENGE
 * "for each" method
 */
const myCities = ['london', 'New York', 'singapore'];

const arrayInfo = (element, index) => element + "is located at index" + index + 'in array';

console.log(arrayInfo);

/**
 * "map" method
 */

 const postsJSON = [
     {'id': '1', 'qty': '5'},
     {'id': '2', 'qty': '5'},
     {'id': '3', 'qty': '5'},
 ];
 const posts = postsJSON.map(post => 
    (post));
    console.log(posts);


/**
 * filter method
 */

 const myArray = [10,50,19,5];
 const result = myArray.filter(elm => elm < 10);
 console.log(result);

/**
 * find method
 */
const myArray = [[],{},"abc", true];
const result = myArray.find(elm => typeof elm === 'boolean');
console.log(result);

/**
 * every and some methods
 */

 // example 1
 const myNums = [3,-5,1,10,-7];

 const isPositiveNum = element => typeof element === 'number' && element > 0;

 const positiveCheck = myNums.every(isPositiveNum);
 console.log(positiveCheck);

 const allPositiveCheck = myNums.some(isPositiveNum);
 console.log(allPositiveCheck);


/**
 * CHALLENGE
 * array sort
 */
const a = [5,"abc",10,1];
const b = [4,10,14,25,25,50];
const c = [150,132,80,40];
const d = [15,26,23,85];

const arrayCheck = inputArray => {
    if(inputArray.some(element => typeof element !== 'number')) {
        return 'some elmtns are not nums';
    }
    if(inputArray.every(
    (element,index,array) => 
    index > 0
    ? element >= array[index-1]
    : true)) {
        return 'some elmtns are not nums';
    }
};
console.log(arrayCheck(a));

// console.log(arrayCheck(b));
// console.log(arrayCheck(c));
// console.log(arrayCheck(d));\


/**
 * pusgIfUnique function
 */

 const myNums = [123, 50, 27];

 const pusgIfUnique = (inputArray, newElement) =>
 inputArray.includes(newElement) 
 ? console.log(newElement + 'is alreadt in array')
 : inputArray.push(newElement) 

/**
 * Reduce method
 */
const products = [
    {
        title: 'case',
        price: 23,
        quantity: 2,
        category: "accessories"
    },
    {
        title: 'phone',
        price: 159,
        quantity: 1,
        category: "phones"
    },
    {
        title: 'headphones',
        price: 78,
        quantity:1,
        category: "accessories"
    },
];

const quantityByCategories = products =>
products.reduce(
    (counts, product) => {
        counts[product.category] = 
       (counts[product.category] || 0) +
        product.quantity;
        return counts;
    }, {});
    console.log(quantityByCategories(products));


/**
 * Arraysorting
 */

 const myNums = [10, 5, 7, 12, 20];

 console.log(myNums.sort());
 console.log(myNums.sort((a,b) => a-b));

/**
 * Sort long array of objects
 */

 const persons = [
     {
         name: 'Mounika',
         friendQty: 10,
         index: 12
     },
     {
        name: 'Murali',
        friendQty: 5,
        index: 12
    },
    {
        name: 'geetsa',
        friendQty: 2,
        index: 12
    },
 ];
 const sortPersonByFriendsQty = persons => {
     let it = 0;
     persons.sort((a,b) => {
        //  console.log(a.name, b.name);
         it++;
         return a.friendQty - b.friendQty;
     });
     return persons;
     console.log('Qty of iterations is' + it);
 }
 console.log(sortPersonByFriendsQty(persons));
