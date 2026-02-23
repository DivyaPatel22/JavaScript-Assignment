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

//Find the minimum number in an array.
const r7 = a3.reduce((acc,cur)=> acc<cur?acc:cur)
console.log(r7)



// Count Total Characters
// Find total number of characters in ["hi", "hello", "js"].
const a4 =["hi", "hello", "js"]
const r4 = a4.reduce((acc,curr)=>{
    return acc += curr.length
},0)
console.log(r4);


//Count total number of elements (without using .length).
const r8 = a3.reduce((acc,cur)=>{
    return acc+=1
},0)
console.log(r8)



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

// Convert array of numbers into an object
// Example: [1,2,3] → {1:true, 2:true, 3:true}

const arrr = [1,2,3]
const r9 = arrr.reduce((acc,cur)=>{
    acc[cur] = true
    return acc
},{})
console.log(r9)


// Count frequency of elements
const arr1 = ["a","b","a","c","b","a"]
const r10 = arr1.reduce((acc,cur)=>{
    if(!acc[cur]){
        acc[cur] = 1
    }
    else{
       acc[cur] += 1 
    }
    return acc
},{})
console.log(r10)


// Group numbers into even and odd
// Output: { even: [], odd: [] }

const r11 = a3.reduce((acc,cur)=>{
    if(cur % 2 == 0){
        acc["even"].push(cur)
    }
    else{
        acc["odd"].push(cur)
    }
    return acc
},{even : [] , odd : [] })
console.log(r11)
