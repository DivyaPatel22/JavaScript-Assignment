// Merging data is crucial when handling complex structures. JavaScript provides efficient ways to combine objects or arrays.


// Merging objects


// 1.Using Spread Operator :
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merge = { ...obj1, ...obj2 };
console.log(merge);  //{ a: 1, b: 3, c: 4 }

//2. using Object.assign()
const merged2 = Object.assign({},obj1,obj2)
console.log(merged2);  //{ a: 1, b: 3, c: 4 }



//Merging Arrays :

// 1.using speread Operator similar to object [...arr1,..arr2]

// 2. using arrat.concat()
const arr1 = [1,2,3]
const arr2 = [1,2,3]
const merarr = arr1.concat(arr2)
console.log(merarr); //[ 1, 2, 3, 1, 2, 3 ]




//For deep Merging we use libraries like lodash 
const _ = require('lodash');

const o1 = { a: 1, b: { x: 10, y: 20 } };
const o2 = { b: { y: 30, z: 40 }, c: 3 };

const mergedObj = _.merge({}, o1, o2);

console.log(mergedObj); // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
