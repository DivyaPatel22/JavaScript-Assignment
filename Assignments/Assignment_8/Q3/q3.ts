// Assignment 3: Union Types


// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access

type admin = {
    role: 'admin',
    permissions: string[]
};
type customer = {
    role: 'customer',
    purchaseHistory: number[]
};

type User = admin | customer;

function print_User(user: User) {
        console.log(user.role);
}

const p1 : admin = {
    role: 'admin',
    permissions: ["edit","grant_permission"]
}
const p2 : customer = {
    role: 'customer',
    purchaseHistory: [10000,5000,60000]
}

print_User(p1)
print_User(p2)
//OUTPUT :
// [LOG]: "admin" 
// [LOG]: "customer" 

const p3 : string = "suycdcfe"
// print_User(p3)   this gives us and error not valid type 

// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

interface IAdmin {
  role: "admin";
  permissions: string[];
}

interface ICustomer {
  role: "customer";
  purchase_history : number[];
}

type IUser = IAdmin | ICustomer;

const P1 : IAdmin = {
    role: 'admin',
    permissions: ["edit","grant_permission"]
}
const P2 : ICustomer= {
    role: 'customer',
    purchase_history : [10000,5000,60000]
}

function print(user: IUser) {
        if(user.role == "admin"){
            console.log(user.permissions);
        }
        else{
            console.log(user.purchase_history);
        }
}

print(P1)
print(P2)

//OUTPUT : 
// [LOG]: ["edit", "grant_permission"] 
// [LOG]: [10000, 5000, 60000] 


