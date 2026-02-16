// Check Even or Odd
// Write a function that checks whether a number is even or odd.

        check_num(15)  //odd
        console.log(check_num("20"))   //even
        // function check_num(num){
        //     if(num%2 == 0){
        //         console.log("even");
        //     }
        //     else{
        //         console.log("odd"); 
        //     }
        // }

        function check_num(num){
            return num%2 === 0 ? "even" : "odd" ;
        }

// Reverse a Number
// Input: 1234
// Output: 4321

        // let result = 0
        // console.log(rev(1234))

        // function rev(num){
        //     if(num%10 <= 0){
        //         return result
        //     }
        //     result += (num%10)*10
        //     rev(Math.floor(num/10))
        // }

// Sum of Digits
// Input: 1234
// Output: 10

function sum(num){
    return num.toString().split("").reduce((acc,cur)=>{
       return acc + parseInt(cur)//+cur
    },0);
}
console.log(sum(1234));


// Check Palindrome Number
// Input: 121 → true
// Input: 123 → false
 
console.log(chek_plain(123)) //false
console.log(chek_plain(121))  //true
function chek_plain(num){
    const n1 = num.toString()
    for(let i = 0 ; i < n1.length ; i++){
        if(n1[i] != n1[n1.length-1-i]){
            return false
        }
    }
    return true
}

// Find Largest of 3 Numbers
// Input: 10, 25, 7
// Output: 25

        function high(num){
            if(num.length == 0) return null ;

            let max = 0 ;
            num.forEach(element => {
                if(element > max){
                    max = element
                }
            });
            return max ;
        }
        console.log(high([10,23,56]))
        console.log(high([1000,230,560]))


// Factorial (Iterative + Recursive)
// Input: 5
// Output: 120


function fact(num){
    let result = 1; 
    if(num <= 1){
        return 1
    }
    return num * fact(num-1)
}
console.log(fact(4));
console.log(fact(6));
console.log(fact(3));






// console.log(typeof NaN);
// A) "NaN"
// B) "number"  -- 
// C) "undefined"
// D) "object"

// 2️⃣ What will this print?
// console.log(0.1 + 0.2 === 0.3);
// A) true
// B) false   -- 
// C) undefined
// D) Error

// 3️⃣ Which is NOT a primitive type in JavaScript?
// A) string
// B) number
// C) object   -- 
// D) boolean

// 4️⃣ What is the result?
// console.log("5" - 2);
// A) 3    --
// B) "3"
// C) NaN
// D) Error

// 5️⃣ What does === check?
// A) Only value
// B) Only type
// C) Value and type  --
// D) Reference

// 🟡 Intermediate Level (Scope + Hoisting + Functions)
// 6️⃣ What is the output?
// console.log(a);
// var a = 10;        -- undefined
// A) 10
// B) undefined
// C) Error
// D) null

// 7️⃣ What happens here?
// let a = 5;
// let a = 10;

// A) 5
// B) 10
// C) undefined
// D) Syntax Error   ---

// 8️⃣ What is the output?
// function test() {
//   console.log(x);
//   var x = 20;
// }
// test();
// A) 20
// B) undefined   ---
// C) Error
// D) null

// 9️⃣ What is the output?
// console.log(this);
// In browser global scope:
// A) window object --
// B) undefined
// C) null
// D) global

// 🔟 What is closure?
// A) Function inside function
// B) Function remembering outer scope variables --
// C) Block scope
// D) Callback

// 🔵 Advanced Level (Async + Promises + Event Loop)
// 1️⃣1️⃣ What is the output?
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");
// A) A B C D
// B) A D B C
// C) A D C B  --
// D) A C D B

// 1️⃣2️⃣ What does Promise.all do?
// A) Runs promises one by one
// B) Resolves when all promises resolve  ---
// C) Resolves when first resolves
// D) Ignores rejected promises

// 1️⃣3️⃣ What is the output?
// console.log([] + []);
// A) []
// B) ""   ---
// C) 0
// D) undefined

// 1️⃣4️⃣ What will this return?
// Boolean("false")
// A) false     
// B) true   --
// C) Error
// D) undefined

// 1️⃣5️⃣ Which is true about arrow functions?
// A) They have their own this
// B) They don't have their own this
// C) They can be used as constructors
// D) They have arguments object

// 🔴 Very Advanced / Tricky
// 1️⃣6️⃣ What is output?
// console.log(1 < 2 < 3);
// A) true  ---
// B) false
// C) Error
// D) undefined

// 1️⃣7️⃣ What is output?
// console.log(3 > 2 > 1);
// A) true
// B) false ---
// C) Error
// D) undefined

// 1️⃣8️⃣ What is the result?
// typeof null
// A) "null"
// B) "object" --
// C) "undefined"
// D) Error

// 1️⃣9️⃣ What will happen?
// const obj = { a: 1 };
// obj.a = 5;
// console.log(obj.a);
// A) 1
// B) 5  ---
// C) Error 
// D) undefined

// 2️⃣0️⃣ What is the output?
// console.log(typeof typeof 1);
// A) number
// B) string --
// C) undefined
// D) object  

