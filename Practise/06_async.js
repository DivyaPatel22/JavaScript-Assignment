// Write an async function that:

// Fetches user and posts from two separate APIs.
// Runs the fetches in parallel.
// Returns an object like: { user: ..., posts: ... }.

async function fetch_data(){

    const [user,post] = await Promise.all([fetch("www.xyz.com"),fetch("www.data.com")])

    const [u,p] = await Promise.all([user.json(),post.json()])
    return {u,p};
}

fetch_data().then((data)=>{
    console.log(`user : ${data.u}, post : ${data.p}`)
})


// Basic async function
// Write an async function that returns "Hello World" after 2 seconds. Call it and log the result.

async function print(){
    const result = await new Promise(resolve =>{
        setTimeout(()=>resolve("Hello World"),2000)
    });
    return result
}

print().then(console.log);   //Hello World


// Awaiting a Promise
// Create a function fetchData() that returns a Promise resolving "Data received" after 1 second. Use await to get the result.

async function fetchData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Data received")
        }, 1000)
    })
}

fetchData().then(console.log)

// Error handling
// Modify the above fetchData() function to sometimes reject with "Failed". Use try/catch in an async function to handle the error.

async function fetchData1() {

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) { 
                resolve("Data received");
            } else {
                reject("Failed");
            }
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData1();
        console.log(data);  // logs "Data received"
    } catch (err) {
        console.log(err);   // logs "Failed" if rejected
    }
}
getData();


// Sequential execution
// Write two functions task1() and task2() that each resolve after 1 second. Use async/await to run them sequentially and log their results in order.

async function task1() {
    return new Promise(resolve=>{
        setTimeout(()=>resolve("first"),1000)
    })
}
async function task2() {
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Second"),1000)
    })
}

async function res(){
    const r1 = await task1()
    const r2 = await task2()
    return {r1 ,r2}
}

res().then(console.log)


// Return value from async
// Write an async function calculate() that returns the sum of 2 + 3. Use await when calling it and log the result.

async function sum(a,b) {
    const result = await new Promise(resolve=>{
    resolve(a+b)
    })
    return result
}
sum(4,6).then(console.log)  //10


// Intermediate Level (6–12)
// These focus on multiple async calls, loops, error handling, and combining Promise.all with async/await.

// Parallel execution
// Write three functions a(), b(), c(), each resolving after 1, 2, 3 seconds respectively. Use Promise.all with await to run them in parallel and log results.

function a(){
    return new Promise(resolve=>
        setTimeout(()=>{resolve(1)},1000)
    );
}
function b(){
    return new Promise(resolve=>{
        setTimeout(()=>{resolve(2)},2000)
    });
}
function c(){
    return new Promise(resolve=>{
        setTimeout(()=>{resolve(3)},3000)
    });
}

async function log() {
    let result = await Promise.all([a(),b(),c()])   
    return result
}
log().then(console.log)


// Async in loop
// Given an array [1, 2, 3], write an async function that doubles each number with a 1-second delay and logs each doubled value sequentially.

async function double(arr) {
    let result = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(arr.map(x => x*2))
            },1000)
    })

    return result
}
double([10,20,30]).then(console.log)


// Chaining async calls
// Write three async functions:
// getUser() → returns a user object {id: 1}
// getPosts(userId) → returns array of posts [{id: 1, title: 'post1'}]
// getComments(postId) → returns comments array [{}]
// Use await to fetch posts for a user and comments for each post.

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1 });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 101, title: "Post 1" },
                { id: 102, title: "Post 2" }
            ]);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { comment: "Nice post!" },
                { comment: "Great content!" }
            ]);
        }, 1000);
    });
}

async function main() {
    const user = await getUser();
    console.log("User:", user);

    const posts = await getPosts(user.id);
    console.log("Posts:", posts);

    // Parallel fetching of comments
    const comments = await Promise.all(
        posts.map(post => getComments(post.id))
    );
    console.log("Comments:", comments);
}

main();


// Retry failed Promise
// Write an async function that calls a Promise which randomly fails. Retry up to 3 times before throwing an error.

async function unstablePromise(){
    return new Promise((resolve,reject)=>{
        if(Math.random() > 0.5){
            resolve("passed")
        }
        else{
            reject("failed")
        }
    })
}
async function retryFunction() {
    for (let i = 1; i <= 3; i++) {
        try {
            const result = await unstablePromise();
            return result;
        }catch (error) {
            console.log(`Attempt ${i} failed`);
            if (i === 3) {
                throw new Error("Failed after 3 attempts");
            }
        }
    }
}
retryFunction().then(console.log)



// Timeout wrapper
// Write a function timeout(ms, promise) that rejects the promise if it does not resolve within ms milliseconds. Test with an async function that resolves after 2 seconds with a 1-second timeout.


// Fetch simulation
// Simulate fetching user data from an API using async/await. Use setTimeout to delay the response and return a user object.

// Async with map
// Given [1,2,3,4], use map to double each value asynchronously (1-second delay each). Make sure the final result is [2,4,6,8] using Promise.all.