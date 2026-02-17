// Sum of Numbers
// Given [1, 2, 3, 4, 5], use reduce() to calculate the total sum.
const a1 = [1, 2, 3, 4, 5]
const r1 = a1.reduce((acc,cur)=>{
    return acc += cur
},0)
console.log(r1);


// Multiply All Numbers
// Multiply all numbers in [2, 3, 4] using reduce().
const a2 =  [2, 3, 4] 
const r2 = a2.reduce((acc,cur)=>{
    return acc = acc*cur
},1)
console.log(r2);


// Find Maximum Number
// Find the largest number in [10, 45, 2, 99, 23].
const a3 = [10, 45, 2, 99, 23]
const r3 = a3.reduce((acc,curr)=>{
    // if(acc<curr){
    //     acc = curr
    // }
    // return acc
    return acc> curr ? acc : curr
})
console.log(r3);


// Count Total Characters
// Find total number of characters in ["hi", "hello", "js"].
const a4 =["hi", "hello", "js"]
const r4 = a4.reduce((acc,curr)=>{
    return acc += curr.length
},0)
console.log(r4);


// Flatten One-Level Array
// Convert [[1,2], [3,4], [5]] into [1,2,3,4,5].
const a5 = [[1,2], [3,4], [5]]
const r5 = a5.reduce((acc,cur)=>{
    //  return acc.concat(cur)
    acc.push(...cur)
    return acc
},[])
console.log(r5);


// Count Occurrences
// Count how many times each element appears in:
const a6 = ["apple", "banana", "apple", "orange", "banana", "apple"]
let result = {}
const r6 = a6.reduce((acc,cur)=>{
    if(acc[cur]){
      acc[cur]+=1
    }
    else{
       acc[cur] = 1
    }
    return acc
},{})
console.log(r6);

