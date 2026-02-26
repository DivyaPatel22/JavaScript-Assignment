// Assignment 4: Intersection Types


// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler 

// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Decide which approach feels clearer and why


type OrderBase = {
    orderId: number;
    amount: number;
};
type Auditable = {
    createdAt: Date;
    createdBy: string;
};
type Order = OrderBase & Auditable;

const o : Order = {
    orderId : 1562,
    amount : 14000,
    createdAt : new Date(),
    createdBy : "xyz"
}
console.log(o);

interface BaseOrder {
orderId: number;
amount: number;
}
interface AuditedOrder extends BaseOrder {
createdAt: Date;
createdBy: string;
}

const o1 : Order = {
    orderId : 2000,
    amount : 1000,
    createdAt : new Date(),
    createdBy : "abc"
}
console.log(o1);

//OUTPUT : 
// [LOG]: {
//   "orderId": 1562,
//   "amount": 14000,
//   "createdAt": "2026-02-12T05:36:08.346Z",
//   "createdBy": "xyz"
// } 
// [LOG]: {
//   "orderId": 2000,
//   "amount": 1000,
//   "createdAt": "2026-02-12T05:36:08.349Z",
//   "createdBy": "abc"
// } 



// Identify when intersection is better than union :
// beacuse in union we does not have requirement to include both types in ouur new type but in interaction we have to include all propeprty of both types in out new type otherwise it give us an error  
