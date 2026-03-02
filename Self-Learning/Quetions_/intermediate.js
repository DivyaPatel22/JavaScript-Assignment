// Problem 1: Variable Scope & Hoisting (var, let, const)
// Question
// Predict the output of the following code and explain why it behaves that way.

console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

//OUTPUT : undefined  20  10



// Problem 2: Event Loop, Microtasks & Macrotasks
// Objective
// Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.
// Question
// Predict the execution order of the following code and explain why.
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

//OUTPUT : start end promise1 promsie2 timeout


// Problem 3: API Data Formatter (Fetch + Array Methods)
// Objective
// Fetch data from an API and transform it using modern JavaScript array methods.
// Input
// Assume the API returns the following data:
    const arr = [
    { id: 1, name: "Amit", active: true },
    { id: 2, name: "Neha", active: false }
    ]

    async function fetch_Data(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error("API failed");
        }

        const data = await response.json();

        return data
        .filter(user => user.active)
        .map(user => ({
            user_Id: user.id,
            user_Name: user.name
        }));

    }catch (error) {
        console.error("Error:", error.message);
        return [];
    }
    }
    console.log(fetch_Data(arr))








