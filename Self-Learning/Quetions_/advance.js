// Problem 2: User Activity & Action Aggregation
// Objective
// Process user activity logs and user action records to generate a summarized report per user, aggregating time spent and counting repeated activity/action types.
// Input
// You are given an array of user activity logs. Each log contains:
// userId
// type (activity/action type)
// duration (in minutes – optional for some actions)


const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 }
];

const activityProcessor = { aggregate(data) {
    return data.reduce((acc, { userId, type, duration = 0 }) => {

      if (!acc[userId]) {
        acc[userId] = {
          totalTime: 0
        };
      }

      acc[userId].totalTime += duration;
      acc[userId][type] = (acc[userId][type] || 0) + 1;

      return acc;

    }, {});
  }
};

const result = activityProcessor.aggregate(activities);

console.log(result);

// {
//   '1': { totalTime: 25, login: 2, browse: 1, logout: 1 },
//   '2': { totalTime: 22, browse: 1, logout: 1 },
//   '3': { totalTime: 3, login: 1 }
// }



// Problem 3: Dynamic Product List with Filter and Sort
// Objective
// Create a dynamic product list UI with filtering and sorting capabilities.
// Requirements
// Render products from a JavaScript array
// Implement:
// Filter by price
// Sort by product name
// Update DOM dynamically on button click
// Render HTML using template literals
// Attach event listeners properly
// Constraints
// No page reloads
// Use only map, filter, and sort for data manipulation

const arr = [{ id :1, name: "Laptop", price: 900 }, 
  {id : 2, name: "Phone", price: 400 },
  {id : 3,  name: "Tablet", price: 300 },
  {id : 4 , name: "Monitor", price: 700 },
  { id :5 , name: "Keyboard", price: 100 }]

// const f = document.getElementById("filter")
// const s = document.getElementById("sort")
// const div = document.getElementById("products")

// f.addEventListener('click',filter_products(arr))
// s.addEventListener('click',sort_products())

function filter_products(arr){
   return arr.filter(p=>{
      if(p.price>500){
        return div.innerHTML = p.map(p => `
                          <div class="product">
                            <h3>${p.name}</h3>
                            <p>Price: $${p.price}</p>
                          </div>
                        `).join("")
      }
   })
}

function sort_products(arr){
   return arr.sort()
}




// Problem 4: Persistent Notes Application
// Objective
// Build a notes application where data persists after refresh.
// Requirements
// Add, edit, and delete notes
// Save notes to localStorage
// Load notes on page load
// Serialize and deserialize data using JSON.stringify / JSON.parse
// Handle edge cases:
// Empty storage
// Corrupt or invalid stored data
// Expected Outcome
// Notes persist across refreshes
// App does not crash with invalid storage data
// Smooth user experience







// Problem 5: Normalize Inconsistent API Responses
// Objective
// Convert inconsistent API data into a normalized structure.

const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];
const q = {}
const r = apiResponse.map(({ id, name, tags }) => ({
    id,
    name,
    tags: Array.isArray(tags) ? tags
        : typeof tags === "string"
            ? tags.split(",")
            : []
}));
console.log(r);

r[2].tags.push("hiii")
console.log(apiResponse);
console.log(r);



// Problem 6: Inventory Management System
// Objective
// Create an inventory system for managing products.
// Product Structure
// { id, name, price, quantity }
// Requirements
// Functions to:
// Add a product
// Update quantity by product ID
// Remove out-of-stock products
// Calculate total inventory value
// Avoid unnecessary object mutation
// Expected Outcome
// Inventory updates correctly
// Accurate total value calculation
// Clean, immutable updates

// let inventory = [
//   { id: 1, name: "Laptop", price: 1000, quantity: 5 },
//   { id: 2, name: "Phone", price: 500, quantity: 10 },
//   { id: 3, name: "Tablet", price: 300, quantity: 0 }
// ];

// const add1 = document.getElementById("add")
// const add = document.getElementById("add-product")

// add1.addEventListener('click',()=>{
//   add_product()
//   return add.innerHTML = `Product Added Successfull`
// })

// const update1 = document.getElementById("update")
// const update = document.getElementById("update-Quantity")

// const remove1 = document.getElementById("remove")
// const remove = document.getElementById("remove-product")

// const total1 = document.getElementById("calculate")
// const total = document.getElementById("calculate-value")




// function add_product(){
    
// } 

// function update_product(){

// }



// Problem 7: Role-Based Permission Checker
// Objective
// Implement a generic role-based access control utility.
// Input
const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

function canAccess(role, permission){
    if(role == "admin" && permission == "READ" || role == "admin" && permission == "WRITE" || role == "admin" && permission == "DELETE"){
        return true
    }
    else if (role == "editor" && permission == "READ" || role == "editor" && permission == "WRITE"){
        return true
    }
    else if(role == "viewer" && permission == "READ" ){
        return true
    }
    else{
        return false
    }
}

console.log(canAccess("admin", "DELETE")); // true
console.log(canAccess("viewer", "WRITE")) // false
console.log(canAccess("unknown", "READ")); // false




// Problem 8: Convert Object Keys to Uppercase
// Objective
// Transform object keys without mutating the original object.
// Function
// convertKeysToUpperCase(obj)
// Requirements
// Convert only top-level keys

// Preserve values
// Return a new object
// Do not mutate original object
// Expected Outcome
// { name: "A", age: 30 } → { NAME: "A", AGE: 30 }

function convertKeysToUpperCase(obj){
    const result = {}
    for (const k in obj) {
        result[k.toUpperCase()]=obj[k]
    }
    return result;
}

const o = {name : "A" , age:30}
console.log(convertKeysToUpperCase(o))   //{ NAME: 'A', AGE: 30 }
