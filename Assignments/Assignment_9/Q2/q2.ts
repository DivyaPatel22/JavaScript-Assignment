// Create a function activateUser that accepts only objects having isActive: boolean .
function activateUser<T extends {isActive: boolean}> (obj : T){
    return obj
}




// Create another function that requires both id and email .
function user11<T extends {id : number, email : string}>(obj : T){
    return obj
}

const user1 = {
    id : 1,
    name : "D",
    email : "kdufhv@email.com",
}
const user2 = {
    id : 2,
    name : "D",
    isActive : true
}





// Try passing invalid objects and observe TypeScript errors.

// activateUser(user1)  //isACtive is missing
activateUser(user2)  //No Error

user11(user1) //No Error
// user11(user2) //Error : email is missing 

