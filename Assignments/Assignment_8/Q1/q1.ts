// Assignment 1: Type Inference

// Declare variables using let and const with initial values and observe inferred types

const num11 = 15  //number
const str1 = "bheem" //string

const num1 = 62 
console.log(typeof num1);  //NUMBER

const num2 = "chutaki"
console.log(typeof num2); //STRING

// Try reassigning incompatible values and note the compiler errors

// const  is_on : boolean = 123  number not assigned to boolean type 
let a : number = 156
// a = "isuhdcf" type string not assigned to number
let si: string = "hek"
// si = 156 not assigned beacuse type string you are assigneing number


// Write a function without a return type and inspect what TypeScript infers

function xyz(){
    console.log("I'm function");
}    
xyz();  //return type  is void 

function abc(){
    return 123
}
abc()  //return type is number 

function a1(){
    return "hello"
}
a1() // return type is string

function a11(){
    return "hello"+123
} // string is return type

function a12(){
    return 123+"egltk"
}  // same as above string

function c(){
    return 123+456
}  // number

function vo(){
  return 
}  // void 

function isgood(){
    return true 
}   //boolean

