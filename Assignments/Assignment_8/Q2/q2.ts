// Assignment 2: any vs unknown

// Create a function that accepts any and performs operations without checks
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

const is_light : any = true
const is_light_ : unknown = true

function add(a : any){
    return a + 10 
}
console.log(add(7))
console.log(add("abc"))
console.log(add(is_light_))
console.log(add(is_light))

//Output :
// [LOG]: 17 
// [LOG]: "abc10" 
// [LOG]: 11 
// [LOG]: 11 

// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
function add1(a : unknown){
    if(typeof a === "number" ){
       return a + 10 ;
    }else {
        return "no need"
    }
}
console.log(add1(7))
console.log(add1("abc"))
console.log(add1(is_light_))
console.log(add1(is_light))
// [LOG]: 17 
// [LOG]: "no need" 
// [LOG]: "no need" 
// [LOG]: "no need" 


//unknown makes us write safer code than any

