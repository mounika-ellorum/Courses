/**
 * TASK 1
 * LOOP through obj and if prop name is either "key1" or "key3" consoe
 */
const myObj = {
    key1: true,
    key5: 10,
    key3: "abc",
    key4: null,
    key10: NaN
}
//Answer

for(let key in myObj){
    if(key === key1 || keey === key3){
        console.log(myObj[key]);
    }
}

/**
 * TASK 2
 * generate randomnum should not match othernums
 */
const myNums = [
    2355,
    1234,
    5764,
    7689
];
let newRandomNum;

/**
 * TASK 3
 * for in loop
 */
const myObj = {
    name: "mke",
    age: 30,
    city: "london"
};
Object.prototype.country = "england";
for(let key in myObj) {
    console.log(myObj[key]);
}