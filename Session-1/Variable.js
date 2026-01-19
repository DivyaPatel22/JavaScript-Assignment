/*      variable      */

// A container used to store data values in memory so they can be reused and changed.
//example : name, age, score......

/* JS provides 3 keyword to declare variable */
//  Var -- Let -- Const

/*   1> Var     */ 
// early introduced ,can be re-declared , can be updated, Hoisted with undefined

var a = 10

/*   2> Let     */  
//  in ES6 , Block scoped , can be updated, can not re-declared , hoisted but in temporal dead zone
// Used when: Value needs to change - Loop counters - Conditions
 
let a = 10 

/*    3> Const   */
//  in ES6 , Block scoped, Cannot be re-declared & updated, must be initialized at declaration, fixes value, hoisted but in temporal dead zone
// Used when: Value should never change - Constants, configs, fixed data
//🚨🚨const objects & arrays can be modified - But cannot be reassigned






// 📍   var → avoid
// 📍   let → change allowed
// 📍   const → constant
