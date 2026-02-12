// Assignment 6: Interfaces

// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
interface user{
    name : string,
    id : number,
    has_access : boolean,
    info : string
}
interface Admin extends user{
    role : 'ADMIN',
    permision : string[],
}
interface Customer extends user{
     role : 'CUSTOMER',
     purchaseHistory : number[],
     preferences : string[]
}

// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
function printuser(baseuser : user) : void{
         console.log(`name : ${baseuser.name}`);
         console.log(`id : ${baseuser.id}`);
         console.log(`info : ${baseuser.info}`);
}

const admin : Admin = {
    id : 15,
    name : "xyz",
    has_access : true,
    role : 'ADMIN',
    info : "xyz@mail.com",
    permision : ["edit" , "accept_request"]
}
const customer : Customer = {
    id : 5,
    name : "abc",
    has_access : true,
    role : 'CUSTOMER',
    info : "abc@mail.com",
    purchaseHistory : [15000,6000,200],
    preferences : ["skinCare","clothes","shoes"]
}
printuser(admin);
printuser(customer);
//OUTPUT : 
// "name : xyz" 
// [LOG]: "id : 15" 
// [LOG]: "info : xyz@mail.com" 
// [LOG]: "name : abc" 
// [LOG]: "id : 5" 
// [LOG]: "info : abc@mail.com"




// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
interface API_response{
    response_type : string,
    msg : string,
    data : string[]
}
 
const req1 : API_response = {
    response_type : "success",
    msg : "Done",
    data : ["xyz","professor"]
}
function reponse(rep : API_response){
    console.log(`Response is : ${rep.response_type}`);
    console.log(`Response_message is : ${rep.msg}`);
    console.log(`Data of user is : ${rep.data}`);
}
reponse(req1)
//OUTPUT :
// [LOG]: "Response is : success" 
// [LOG]: "Response_message is : Done" 
// [LOG]: "Data of user is : xyz,professor" 





// Create an interface for a Product
// Create a variable that follows this interface

interface product {
    name : string,
    product_id : number,
    product_category : string,
    price : number,
    stock_quantity : number
}
const p : product = {
    name : "hair_dryer",
    product_id : 1562,
    product_category : "hair products",
    price : 1600,
    stock_quantity : 100
}
console.log(p)
//Output : {
//   "name": "hair_dryer",
//   "product_id": 1562,
//   "product_category": "hair products",
//   "price": 1600,
//   "stock_quantity": 100
// } 