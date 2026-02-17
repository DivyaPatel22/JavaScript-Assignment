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