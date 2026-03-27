// Task 1: Predict Output of Async Code


// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.

// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop

// ### Code Block 1: Basic Async
// ```javascript
//         console.log("1");

//         setTimeout(function() {
//         console.log("2");
//         }, 0);

//         Promise.resolve().then(function() {
//         console.log("3");
//         });
        
//         console.log("4");       
// // ```

// **Your Prediction (order): ---------------- 1 4 3 2
// ```
// // Write the order you expect: 1, ?, ?, ?
// ```

// **Actual Output:**
//    1 4 3 2

// **Explanation:**
// Here first 1 line is eecuted print 1 then settimeout() function is shared to the web api and then pormise is also similar  and then at end 4 is printed after completing the whole code event loop check the icrotask queue where promise is stored (Here promise is high priority task so it stored in micro task and set time out low priority so it will stored in macrotask queue) so it will start executing and pushed executed code to call stack which will print 3 and then microtask queue is empty so it goed to macrotask queue where settimeout it wil execute it and print 2 




// Explain the execution order ::::--------

// ### Code Block 2: Nested Async

// ```javascript
        // console.log("Start");

        // setTimeout(function() {
        //     console.log("Timeout 1");
        //     Promise.resolve().then(function() {
        //         console.log("Promise 1");
        // });
        // }, 0);

        // Promise.resolve().then(function() {
        //     console.log("Promise 2");
        //     setTimeout(function() {
        //         console.log("Timeout 2");
        // }, 0);
        // });

        // console.log("End");
// ```

// **Your Prediction (order):**
// Start End promise 2 Timeout 1 promise 1 Timeout 2

// **Actual Output:**
// Start End promise 2 Timeout 1 promise 1 Timeout 2

// **Explanation:**
// here start printed and then settimeout api called and it will goes to browser and wait until 0 seond and pushed all code to macrotask Queue and then promise is also goes and all code pushed to microtask queue and after that End is printed after then event loop execute microtask queue and all executable code pushed to call stack where it print promise 2 and then settime out is goes again to macrotask and after this microtask have nothing so it will execute macrotask queue so settimeout pushed to call stack it will print timeout 1 and then agaimn promise goes to microtask quqe so here we have both microtask and macrotask queue but eventloop execute microtask quque first hence promise 1 is printed and after that settimeout is callled so it will print timeout 2 





// ### Code Block 3: Multiple Microtasks


// ```javascript
        // console.log("A");


        // Promise.resolve().then(function() {
        // console.log("B");
        // Promise.resolve().then(function() {
        // console.log("C");
        // });
        // console.log("D");
        // });


        // Promise.resolve().then(function() {
        // console.log("E");
        // });


        // setTimeout(function() {
        // console.log("F");
        // }, 0);


        // console.log("G");

// **Your Prediction (order):**
//  A G B D E C F

// **Actual Output:**
//  A G B D E C F


// *Explanation:**
// HERE FIRST A is printed then promise resolve whole function goes to web api and pushed to microtask queue then another promise is also pushed to microtask task queue then settiemout is also goed but pushed inside macrotask queue and then G is printed here whole code is executed so hence event loop now check microtask queue here first promise's executable code means code inside promise pushed to call stack  it will print B then it sees another promise it will push it io microtask queue and print remaing code D then Evnet loop check again checkmicrotask queue it has second promise as first which we will pushed at first so it's executable code goes to call stack and it will print E and then event loop check microtask if has one promsise left so it pushed to call stack which print C and then now microtask queue is blank and it will check Macrotask queue it has settime out it will print F and now nothing left evrything washed out







// ### Code Block 4: Complex Async Chain
// ```javascript
        // console.log("1");

        // setTimeout(function() {
        //     console.log("2");
        // }, 0);

        // queueMicrotask(function() {
        //      console.log("3");
        // });

        // Promise.resolve().then(function() {
        //   console.log("4");
        //   queueMicrotask(function() {
        //      console.log("5");
        // });
        // });

        // setTimeout(function() {
        //     console.log("6");
        // }, 0);

        // console.log("7");

// **Your Prediction (order):**
// 1 7 3 4 5 2 6

// **Actual Output:**
//1 7 3 4 5 2 6

// **Explanation:**
// 1 is printed then settimeout is goes to macortask then queueMicrotask() will push code inside microtask queue so function is pushed to microtask queue  then resolved promise is also goes to microtask queue -> settimeout goes tom acrotask queue  --> then 7 is printed ---> Event loop Execute microtask queue so function is pushed to call stack print 3 -- > now pormise goes to call stack --> print 4 then queueMicrotask() pushed to microtask queue -->comes back to eventloop it check microtask so it has function it will pirnt  5 --->nothing left in microtask queue --> goes to macrotask where settimeout code is pushed to call stack and print 2 and another left -- > settimeout goes to call stack print 6





// ### Code Block 5: Async/Await


// ```javascript
        // console.log("Start");

        // async function asyncFunction() {
        //     console.log("Async 1");
        //     await Promise.resolve();
        //     console.log("Async 2");
        // }

        // asyncFunction();

        // Promise.resolve().then(function() {
        // console.log("Promise 1");
        // });

        // setTimeout(function() {
        // console.log("Timeout");
        // }, 0);

        // console.log("End");

//**Your Prediction (order):**
// Start Async 1  End Async 2 Promise1 Timeout 

// **Actual Output:**
//Start Async 1  End Async 2 Promise1 Timeout 

// **Explanation:**
// First --- > print start 
//asyncFunction called --> print Async 1
//now it will not wait until promise reoslve so all remaining code pushed to microtask queue
//prmoise is also pushed to microtask
//settiemout pushed to macrotask queue
//print --> End
//------->Event loop perform task of microtask where firstly asyncFunction promise is stored so it ececuted first --> print Async 2
// ---->promise will print --promise 1
//Now microtask is finished macrotask queue callback is called where settimeout is performed -->print Timeout 







// ## Task 2: setTimeout Examples

// ### Objective
// Complete and understand various setTimeout scenarios.

// ### Exercise 1: Basic setTimeout

// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.
// ```javascript
// TODO: Implement countWithDelay function
        
        function countWithDelay() {
                for(let i = 1 ; i<= 5 ; i++){
                     setTimeout(()=>{console.log(`${i} -- after ${i} second`)},i*1000)
                }
        }

        countWithDelay(); 


// **Expected Output:**
// 1 -- after 1 second
// 2 -- after 2 second
// 3 -- after 3 second
// 4 -- after 4 second
// 5 -- after 5 second





// ### Exercise 2: setTimeout in Loop (Fix the Bug)

// **Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.
// ```javascript
// BUGGY CODE - Fix this
        // for (var i = 0; i < 3; i++) {
        //   setTimeout(function() {
        //        console.log(i); // Currently logs: 3, 3, 3
        // }, 1000);
        // }

        for (let i = 0; i < 3; i++) {
          setTimeout(function() {
               console.log(i); // Now : 0 1 2
        }, 1000);
        }






// ### Exercise 3: setTimeout with Clear

// **Task:** Create a countdown timer that counts from 10 to 0, then stops.
// ```javascript
// // TODO: Implement countdown function
//         function countdown(start) {
//             let i = start
//             while(i >=0 ){
//                 let num = 10
//                     setTimeout(()=>{
//                         if(start - i== 0){
//                             console.log(`${i} (immediately)`)
//                         }
//                         else{
//                             console.log(`${i} (after ${start-i} second)`);
//                         }
//                     }, (start-i)*1000)
                
//                 i--
//             }
//         }
//         countdown(10);

     function countdown(start){
        for(let i = start ; i>=0 ; i--){
            setTimeout(()=>{
                if(start-i == 0){
                    console.log(`${i} : immediately`)
                }
                else{
                    console.log(`${i} : after ${start-i} seconds`)
                }
            },(start-i)*1000)
        }
     }

     countdown(10)

        

// Expected output:
        // 10 (immediately)
        // 9  (after 1 second)
        // 8  (after 2 seconds)
        // ...
        // 0  (after 10 seconds)

