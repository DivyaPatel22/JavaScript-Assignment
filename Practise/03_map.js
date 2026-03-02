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




// map → “Change it”
// [1,2,3].map(x => x*2)
// [2,4,6]

// flat → “Flatten it”
// [[2],[4],[6]].flat()
// [2,4,6]

// flatMap → “Change it and flatten it in one go”
// [1,2,3].flatMap(x => [x, x*10])
// [1,10,2,20,3,30]




