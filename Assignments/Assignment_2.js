// Exercise 1: The URL Slug Builder
// Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
// Input: "JavaScript For Beginners"
// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).
// Expected Output: "javascript-for-beginners"
const str = "JavaScript For Beginners"
console.log(str.toLowerCase().split(" ").join("-"))


// Exercise 2: Pagination Logic
// Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Task: Use .slice() to extract the items at indices 3, 4, and 5.
// Expected Output: [4, 5, 6]
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(list.slice(3,6));


// Exercise 3: The Price Formatter
// Scenario: You have a list of raw number prices. You need to format them for the UI.
// Input: [10, 20, 30]
// Task: Use .map() to add a "$" sign to the front of every number.
// Expected Output: ["$10", "$20", "$30"]
const a = [10,20,30]
function add(a){
    return a.map((p)=>`$${p}`)
}
console.log(add(a));

// Exercise 4: The Clean-Up Crew
// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
// Input: [25, -5, 18, 0, 40]
// Task: Use .filter() to keep only valid ages (positive numbers > 0).
// Expected Output: [25, 18, 40]
const age = [25,-5,18,0,40]
function clean(age){
    return age.filter((p)=>p>0)
}
console.log(clean(age));

// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.
// Input: [-10, 20, 50, -5]
// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).
// Expected Output: [40, 100]
const d = [-10,20,50,-5]
function cleanup(d){
    return d.filter((p)=> p>0).map((p)=>p*2)
}
console.log(cleanup(d))

// Exercise 6: The Shopping Cart
// Scenario: Calculate the total cost of the items in a cart.
// Input: [100, 200, 50]
// Task: Use .reduce() to sum the values starting from 0.
// Expected Output: 350
const di = [100,200,50]
function cart(di){
    return di.reduce((acc,val)=>{
        acc += val
        return acc;
    },0)
}
console.log(cart(di));

// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// Fix it so it logs "Hello, Alex".
// JavaScript
const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};
user.greet();
//Beacuse here arrow function does not have own this keyword hence if we use this keyword inside arrow function if refer to global


// Exercise 8: The Safe Update
// Scenario: You need to update a user's theme setting without mutating the original object.
// Input:
// JavaScript
// const settings = { theme: "light", notifications: true };
// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new object.
// Verify settings.theme is still "light" (Immutable Check).
const settings = {
    theme : "light",
    notifications : true
};
const newSettings = {...settings, theme : "dark"}
console.log(settings.theme);


// Exercise 9
// Combine everything you learned into one function.
// Scenario: You have an inventory list.
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.
// Data:
// JavaScript
// const inventory = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Phone", price: 500, stock: 0 },
//     { name: "Mouse", price: 50, stock: 10 }
// ];
// Expected Output: 5500
const inventory = [
    {name : "Laptop", price : 1000, stock : 5},
    {name : "Phone", price : 500, stock : 0},
    {name : "Mouse", price : 50, stock : 10},
]
function f(d){
    return d.filter((i)=>i['stock']>0).map((p)=>({...p,totalvalue : p['price']*p['stock']})).reduce((acc,val)=>{
        acc+=val['totalvalue']
        return acc;
    },0)
}
console.log(f(inventory));
