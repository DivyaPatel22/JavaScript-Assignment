
// Q1. Simple Object Context

    const laptop = {
        brand: "Dell",
        getBrand: function() {
            return this.brand;
        }
    };
    const myBrand = laptop.getBrand();
    console.log(myBrand);   // --- Dell : why becuase when we call laptop.getBrand() -- function is called it return this.brand here this referes to laptop object so is refere to brand variable of laptop so it return Dell



// Q2. Basic Promise Flow

    console.log(1);                     // This line runs and print 1 and then goes to nextline
    Promise.resolve().then(() => {     //   here resolved promise created immedieatly after that .then calls and added to microtask queue  so it waits until call stack completer its exectution 
        // console.log(2);
    });
    console.log(3);                 //it runs after that promise in microtask queue started executing in call stack where () => {console.log(2)} is waiting for execution  

    //Output : 1 3 2  


// Q3. The Broken Chain

    Promise.reject("Error Occurred")     // it  will create rejected promie
        .then(() => console.log("Success"))            // promise is rjected so it will not run it will only run if it satisfy the promise
        .catch((err) => console.log(err));    // promise is rejected hence catch will run adn it print err message == "Error Occured"

    //Output :  Error Occurred


    
// Q4. Global vs. Local Scope

    var status = "Offline";

    const server = {
        status: "Online",
        getStatus: function() {
            return this.status;
        }
    };
    console.log(server.getStatus());       

    //Output : Online  becuase here when getStatus() function is called it return this.status here this this refere to the server object and the staus of server is online hence it will print online insted of global status offline



// Q5. Math in Promises

    Promise.resolve(10)
        .then((num) => num * 2)
        .then((result) => console.log(result));

    //Output :  20  ---- when resolve promise created with the value 10 after that .then is called and it will perform num*2 on 10 which makes 10 to 20 after that another then is called which print the result = 20 



// Q6. The "Lost" Context

    const user = {
        name: "Alex",
        printName() {
            console.log(this.name);
        }
    };

    const print = user.printName;
    print();

    //Output : Undefined becuase here when it called printname function it will print this.name but in console this it will refere to printname() function so it will find name in printname() function hence it is not avialable it will print undefined



// Q7. Event Loop Basic Race

    console.log("Start");

    setTimeout(() => console.log("Timeout"), 0);

    Promise.resolve().then(() => console.log("Promise"));

    console.log("End");

    //Output : Start End Promise Timeout ---- here first start will print then settimeout will goes t



// Q8. Arrow Function Pitfall

    const group = {
        title: "Developers",
        getTitle: () => {
            console.log(this.title);
        }
    };

    group.getTitle();

    //Output : Undefined -----Here getTitle is an arrowfunction() so in this.title it will check it's parent function scope to find title variable but here there is no parent function for getTitle so it will fallback to windows object and find there there is also not title variable hence it's undefined



// Q9. Chaining Returns

    Promise.resolve(5)
        .then((val) => {
            console.log(val);
            return val + 5;
        })
        .then((val) => console.log(val));
    
    //Output : 5 10 ------ here Resolve promise created with value 5 after that it will call then and it print 5 and then return 10 this 10 will be passes to another then and it will print it 



// Q10. Catch and Continue

    Promise.reject("Fail")
        .catch((err) => {
            console.log(err);
            return "Recovered";
        })
        .then((res) => console.log(res));
    
    //Output : Fail Recovered  --- Here rejected promise created hence it wil goes to catch dairectly then it will print err which is fail and then it return recovered message to next then (if you write catch and if there is more then or code there and if error occured so it will catch error after that after of catch code is also excectued ) it will take recovered as value and print it 



// Q11. The Nested Timeout

    console.log('A');

    setTimeout(() => {
        console.log('B');
    }, 0);

    Promise.resolve().then(() => {
        console.log('C');
        Promise.resolve().then(() => console.log('D'));
    });

    console.log('E');

    // Output : A E C D B -- here 



// Q12. Explicit Binding (Call/Apply)

    const agent = {
        id: 101
    };

    function showId() {
        console.log(this.id);
    }

    showId.call(agent);
    showId.apply(null);
    // showId.apply(agent);

    //Output :  101  undefined ---- showID.call(agent) will sets this as a first argument where this refer to agent Hence it will print 100 and showId.apply(null) means it also invoke function and this is also first argument for this so this is null hence it will print undefined



// // Q13. Promise.all Failure

    Promise.all([
        Promise.resolve("Success 1"),
        Promise.reject("Error 1"),
        Promise.resolve("Success 2")
    ])
    .then(res => console.log("Result:", res))
    .catch(err => console.log("Caught:", err));
    //Output : Caught: Error 1 ---- here promise.all is fulffiled when all the promise inside will become true if one of them will failed all the the other also failed hence here first promise is resolved and created then promise.reject seen by promise.all and immediately reject all the promises and goes to catch becuse then is not ececuted becuase promise is failed and catch will print this



// Q14. The "Callback" Context Trap

    const player = {
        score: 50,
        updateScore() {
            setTimeout(function() {
                console.log(this.score);
            }, 100);
        }
    };
    player.updateScore();

    //Output : undefined ---- here when it call updatescore() function and then sees settimeout() hence it call web api and put this into macrotask(call back) Queue after execution of call stack and after 100 ms eventloop will put this into call stack but only executable code is only push hence only console.log is pushed hence it don't have any score variable in that scope hence it will print undefined



// Q15. Throwing Inside a Chain

    Promise.resolve(1)
        .then(x => {
            throw new Error("Invalid");
        })
        .catch(err => {
            console.log("Caught Error");
            return 10;
        })
        .then(x => console.log(x)); 

        //Output : Caught Error 10 --- here when resolve promise created with value 1 and then in then it throw error so it goes to catch it will print caught error then return 10 means it will passed to then and it will print 10(return value of catch will be passed through next then)



// Q16. Async Function Order

    async function foo() {
        console.log("A");
        await Promise.resolve();
        console.log("B");
    }

    console.log("C");
    foo();
    console.log("D");

    //Output : C A D B ---- here c is prints then goes to foo function it will print A then after that staement code is suspended and goes to web api and wait until promise resolved at that time D is printed after promise resolved all code pushed to microtask Queue and adter all execution event loop push into call stack and it will be printed



// Q17. The "Finally" Gotcha

    Promise.resolve("Done")
        .finally(() => {
            console.log("Cleanup");
            return "Modified?";
        })
        .then(res => console.log(res));

    //Output : Cleanup Done ---- Beacuse it has Done parameter at starting finnaly bolck is executed it will print cleanup and it return modefied? but here .then take parameter of resolve promise not finally hence it will take done and print it



// Q18. Variable Hoisting & Promises

    console.log(a);
    var a = 5;

    Promise.resolve().then(() => {
        console.log(a);
    });

    a = 10;

    //Output : undefined 10 ---- here at starting of the code accordingto hoisting all var is hosited means it will store as a undeifned so it it access a it will undeifned after that a become 5 and then promise goes and a become 10 when promise comes and print a which is 10 



// Q19. Microtask vs Macrotask Interleaving

    setTimeout(() => console.log("T1"), 0);

    Promise.resolve().then(() => {
        console.log("P1");
        setTimeout(() => console.log("T2"), 0);
    });

    Promise.resolve().then(() => console.log("P2"));

    console.log("End");

    //Output : End p1 p2 T1 T2  ---- Here at first so it all goes to browser and end is printed here promise is high priority task means it will store in micro and settime out goes to macro task so t1 first goes to macro then p1 inside settimeout t2 goes to macro then p2 goes to micro so when execution of call stack compeleted event loop will start execution microtask queue first after finished it all blank it will goes to macrotask queue and compeleting it hence  



// Q20. Object Method Assigned to Class

    class Manager {
        constructor(name) {
            this.name = name;
        }

        print = () => {
            console.log(this.name);
        }
    }

    const m = new Manager("Sarah");
    const p = m.print;
    p();

    //Output : Sarah -------  here m is object of MAnager class where it assign name = sarah and m.prnit will call print method of manager class and print where m object has name darah so it will print Sarah

