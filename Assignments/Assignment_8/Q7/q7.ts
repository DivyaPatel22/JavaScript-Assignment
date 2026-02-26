// Assignment 7: Enums

// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum payment_status {
    initiater = "INITIATED",
    success = "SUCCESS",
    failed = "FAILED"
}

// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
function print_status(status : payment_status){
    console.log("Status of payment : ",status);
}
print_status(payment_status.initiater)
print_status(payment_status.success)
print_status(payment_status.failed)
//Output :
// [LOG]: "Status of payment : ",  "INITIATED" 
// [LOG]: "Status of payment : ",  "SUCCESS" 
// [LOG]: "Status of payment : ",  "FAILED" 


// print_status(payment_status.notfound) : this will give an error that Property 'notfound' does not exist on type 'typeof payment_status'.


// Why enums are better than magic strings?-- 

// becuase
// ---- enums provide better type saftey than magic string that if here we hae payment_status. initializer = "INITIA" we can't do that in enums becuase it only readonly property
//  but in magic string we can do this measn reassign like failes = "sucess" 

//enums generate a object in the compiled JavaScript file that exists at runtime, whereas magic strings are just plain string literals with no definition in file. 