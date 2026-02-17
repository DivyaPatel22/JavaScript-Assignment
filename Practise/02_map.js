// Double the Numbers
const arr = [1, 2, 3, 4, 5];
const r1 = arr.map(x => x*2)
console.log(r1);


// Convert to Uppercase
const words = ["apple", "banana", "mango"];
const r2 = words.map(x => x.toUpperCase())
console.log(r2);


// Extract Property
// Return an array of only names.
const users = [
  { id: 1, name: "Divya" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Ankit" }
];
const r3 = users.map(p => p.name)
console.log(r3);


// Add 10 to Each Number
const nums = [5, 10, 15];
const r4 = nums.map(p => p+10)
console.log(r4);


// Convert Numbers to Strings
// Convert each number to string.
const nums1 = [1, 2, 3, 4];
const r5 = nums1.map(p => p.toString())
console.log(r5);


// Square Only Even Numbers
// Return a new array where:
// Even numbers → squared
// Odd numbers → unchanged
const num2 = [1, 2, 3, 4, 5, 6];
const r6 = num2.map(p=> p%2==0 ? p*p : p)
console.log(r6);


// Add Full Name
// Return new array with a fullName property added.
const user = [
  { first: "Divya", last: "Sharma" },
  { first: "Ravi", last: "Kumar" }
];
const r7 = user.map(p=>{
    p.fullname = p.first+" "+p.last
    return {first : p.first ,last : p.last,fullname : p.fullname}
})
console.log(r7);


// Convert Prices with Tax
// Add 18% GST to each price.
const prices = [100, 200, 300];
const r8 = prices.map(p=>p*100/18)
console.log(r8);


// Extract Initials
const names = ["Divya Sharma", "Ravi Kumar", "Ankit Singh"];
const r9 = names.map(p=>{
    const arr = p.split(" ")
    let a = []
    const r = arr.forEach(i=>{
        a.push(i.charAt(0))
    })
    return a.join("")
})
console.log(r9);


// Flatten One Level
const arr1 = [[1,2], [3,4], [5,6]];
const r = arr1.flatMap(p=>p)
console.log(r);


// Nested Mapping
const u = [
  { name: "Divya", scores: [80, 90, 70] },
  { name: "Ravi", scores: [60, 75, 85] }
];
const r0 = u.map(p=>{
  let sum = 0
  p.scores.map(p=>{
    sum += p ;
  })
  p.average = sum/3
  return {name : p.name , average : p.average}
})
console.log(r0)
//[
//   { name: "Divya", average: 80 },
//   { name: "Ravi", average: 73.33 }
// ]


// chain map + filter
const nums0 = [5, 10, 15, 20, 25];
const r11 = nums0.map(p=>p*2)
const r12 = r11.filter(p => {if(p>30){ return p}})
  console.log(r12);
  



