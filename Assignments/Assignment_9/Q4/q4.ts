// Create a constant adminUser .
const adminUser = {
    id : 1,
    name : "Admin",
    email : "admin@gmail.com",
    role : "Admin",
    isActive : false,
    // Permissions : ["read","write"] //after adding permissions to admin user admin also has permisssion with : string[]
}

// Create a type from it using typeof.
// Add a new property and observe how the type changes automatically
type Admin = typeof adminUser


// type Admin = {
//         id : number,
//         name : string,
//         email : string,
//         role : string,
//         isActive : boolean
//     }
    



