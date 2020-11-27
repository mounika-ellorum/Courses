/**
 * Modify parameters section in the "processQuantities" function to match consol
 * .log outputs
 */

 const processQuantities = ([
     minQty,
     maxQty,
     defaultQty = 0
 ]) => {
     console.log(minQty); //7
     console.log(maxQty);//28
     console.log(defaultQty); //0
     return maxQty - minQty; // returns 21
 };

 const qtyRange = [7,28];
 processQuantities(qtyRange);

 /**
  * Create a function 'minMax' that will accept any quantity of argmnts
  * 
  * this fun should return array of two elements:
  * 1st elmnt in array is minimal value among all argmnts
  * 2nd elmnt in array is maximal value among all argmnts
  * 
  * Use destructuring to parse results of the function calls.
  */

  const minMax = (...nums) => 
//   {
//     return 
    [
    nums.reduce((min,num) => num < min ? num:
    min),
    nums.reduce((max,num) => num > max ? num:
    max)
    ];
//   };

  let min,max;
  /** 24,5,34,10 */
  [min,max] = minMax(24,5,34,10);
  console.log(min,max);

  /**
   * object destructuring
   */
  /**
   * modify "personInfo" function to match 
   * console.log output at the end of the challenge.
   * 
   * Object that is returned by "personInfo" function must contain 
   * only shorthand property names.
   */

   const personInfo = ({name: name, age: personAge, 
    location: {country: origin, city: homeCity}, friendQty = 0,
    recordCreatedAt = new Date().getFullYear() }) => {
       /**return ... */
       return {
           name,
           personAge,
           origin,
           homeCity,
           friendQty,
           recordCreatedAt
       }
   };

   const person = {
       name:"Alice",
       age: 19,
       location: {
           country: "England",
           city: "London"
       }
   };
   console.log(personInfo(person));
   
   /**
    * create function "processPosts" function that will return new
    * array of posts.
    * Notice that some property names in each post are modified 
    * and each postId is incremented by 1000.
    * original array of posts should not be muted.
    */
   const posts = [
       {
           postId: 234,
           author: "robd",
            commentsQty: 5
       },
       {
        postId: 823,
        author: "sady",
        },
        {
            postId: 161,
            author: "merryl",
            commentsQty: 8
        },
   ];
   const processPosts = posts =>{
       return posts.map(({postId,author: postAuthor,
        commentsQty: postCommentsQty = 0}) => ({
        postAuthor,
        postCommentsQty,
        postId: postId + 1000
    }));
   }
   console.log(processPosts(posts));