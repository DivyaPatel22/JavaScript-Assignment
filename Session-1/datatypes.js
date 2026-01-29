// String : text of characters
  let greet = "Hello JavaScript"
  let meet = 'no'
  let abc = "'xyz'"
  console.log(greet)
  console.log(meet)
  console.log(abc)

// Numbers : number in  mthematical value
  let num = 123.25   //----float-decimal number 
  let count = 10
  let z = 12e6          //12000000     //----Exponential Notation --Extra large or extra small numbers can be written with scientific (exponential) notation
  console.log(z)
  let exp = 103e-5   // .00103
  console.log(exp);
  

// BigInt : number representing a large integer
   let x = 1354687987974564531n  //represnt n is big number 

// Boolean : represnet True(1) or False(0)
   let is_light_on = true 

// Null : primitive value representing object absence
   let a = null

// undefined : primitive variable with no assigned value 
   let b = undefined  //-----vairbale without value is also undefined value and datatype is also undefined 

// Object : collection of key-value pairs of data
  let arr = [1,2,3,4,5]
  let date = new Date("2026-01-20")
  let o = {name : "chhota_Bheem" , age : 5 }

  // Symbol : unique and primitive identifier
  let v = Symbol()
  console.log(v)



//   typeof Operator --  to find the type of a JavaScript variable.

console.log(typeof arr)  // -- object
console.log(typeof greet)  // -- string
console.log(typeof is_light_on)  // -- boolean
console.log(typeof b)        // -- undefined
console.log(typeof x)       // -- bigint
console.log(typeof date)    // -- object
console.log(typeof v)        // -- symbol


// Empty vlaues :  nothing to do with undefined
let pot = ""   // string 
console.log(pot)





// All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.