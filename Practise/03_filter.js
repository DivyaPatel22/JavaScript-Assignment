// Given an array of numbers, return only the numbers greater than 10.
const nums = [5, 12, 8, 130,15, 44];
const r0 = nums.filter(p=> p>10)
console.log(r0);


// From an array of numbers, return only even numbers.
const r1 = nums.filter(p=>p%2==0)
console.log(r1);


// Return words whose length is greater than 4.
const words = ["apple", "bat", "banana", "cat", "grape"];
const r2 = words.filter(p=>p.length>4)
console.log(r2);


// Remove all falsy values from this array:
const arr = [0, "hello", false, 42, "", null, "world"];
const r3 = arr.filter(p=>Boolean(p))
console.log(r3);


//Return users who are 18 or older.
const users = [
  { name: "Amit", age: 22 },
  { name: "Riya", age: 17 },
  { name: "Sam", age: 25 },
  { name: "Sam", age: 15 },
];
const r4 = users.filter(p=>p["age"]>=18)
console.log(r4);


// From an array of numbers, return numbers divisible by both 2 and 3.
const arr1 = [1,2,3,4,5,6,7,8,9,10,12]
const r5 = arr1.filter(p=>{
    return p%2==0 && p%3==0
})
console.log(r5);


// Given an array of strings, return only those that start with the letter "a".
const word = ["apple", "bat", "banana","akro", "cat", "grape","app"];
const r6 = word.filter(p=>{
    return p.startsWith("a")
})
console.log(r6);

//Filter duplicate values from an array (without using Set).
const a = [1, 2, 2, 3, 4, 4, 5];
const r7 = a.filter((value, index, self) => {
    return self.indexOf(value) === index
})
console.log(r7);


// Return products that are in stock AND cost less than 800.
const products = [
  { name: "Laptop", price: 900, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];
const r8 = products.filter(p=>{
    if(p["inStock"]==true && p["price"]>=800){
        return p
    }
})
console.log(r8);


// Return only delivered orders.
const orders = [
  { id: 1, items: 3, status: "delivered" },
  { id: 2, items: 1, status: "pending" },
  { id: 3, items: 5, status: "delivered" }
];
const r9 = orders.filter(p=>{
    if(p["status"]=="delivered"){
        return p
    }
})
console.log(r9);


// Filter users whose name includes the letter "a" (case insensitive).
const name = ["kjdfhv","lefkuhwaq","kajhdf","wksge"]
const r10 = name.filter(p=>{
    if(p.includes("a")){
        return p
    }
})
console.log(r10);


// Return students who have at least one score greater than 75.
const data = [
  { name: "A", scores: [80, 90] },
  { name: "B", scores: [40, 50] }
];
const r11 = data.filter(p=>{
    return p.scores.some(v => v>75)
})
// What some() returns ---
// If one element matches → true
// If none match → false
console.log(r11);


// From an array of numbers, remove prime numbers.
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const r15 = arr11.filter(p => {
    if(p<=1)return true
    for(let i = 2 ; i<= Math.sqrt(p);i++){
        if(p % i == 0){
            return true
        } 
    }
    return false
})
console.log(r15);

