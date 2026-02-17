//Spread Operator : allows an iterable, such as an array or string to be expanded in places where zero or more arguments or elements are expected

let num = [9,8,7,5,6]
// let max = Math.max(num);   output : NaN
let max = Math.max(...num);  //allow to itrate araay& string

console.log(max);


let name = `Chhota Bheem`
console.log([...name].join("-"))

