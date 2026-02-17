// 2️⃣ Create a Promise
// Write a function checkEven(num) that:
// resolves with "Even" if number is even
// rejects with "Odd" if number is odd

function checkEven(num){
    let a = new Promise((resolve,reject)=>{
        if(num%2==0){
            resolve("Even")
        }
        else{
            reject("odd")
        }
    })
}

checkEven(5)
checkEven(8)



// Write Your Own Delay Function
// Create a function:
// delay(ms)
// That resolves after ms milliseconds.

function delay(ms){
    return new Promise((resolve,reject)=>
    {  setTimeout(()=>{
         resolve("done")
    },ms)
    })
}

delay(5000)

// Convert Callback to Promise
// Convert this into Promise-based function:
// function getData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 1000);
// }

function gatData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("data recevied"),1000);
    })
}
getData()


// onclick button promise is resolved ! 

const d = document.querySelector("#click")

const p = new Promise((resolve,reject)=>{
    d.addEventListener("click",()=>{       //onclick it will resolve the promise 
        resolve("promise resolved");
    })
})


//after resolving promise then method is called and print on console done :

p.then(()=>{         // it will return promise 
    console.log("Done");
})


// let's crete two button for resolving promise & rejecting promise

const f = document.querySelector("#reject")

const p1 = new Promise((resolve,reject)=>{
    f.addEventListener("click",()=>{       //onclick it will reject the promise 
        reject("promise rejected");
    })
})



// // let's combine both of them :

const pp = new Promise((resolve,reject)=>{
    d.addEventListener("click",()=>{       //onclick it will resolve the promise 
        resolve("promise resolved");
    })

    f.addEventListener("click",()=>{       //onclick it will reject the promise 
        reject("promise rejected");
    })
})

pp.then(()=>{
    console.log("Done");
})
.catch(()=>{                                 // if rejected execute this
    console.log("error");
}) 
.finally(()=>{                                // always executed if promise reject or resolved 
    console.log("always executed");
})


//Example :

let a = new Promise((resolve,reject)=>{
    return resolve(15)
})

console.log(a);

a.then((value)=>{
    console.log(value);
    return value *2
})
.then((value)=>{
    console.log(value);
})









