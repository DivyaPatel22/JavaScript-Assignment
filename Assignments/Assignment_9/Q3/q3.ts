// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.


function updateField<T, K extends keyof T>(obj: T,key: K,value: T[K]): T {
  obj[key] = value;
  return obj;
}

type UserDetails = {
    id : number,
  name: string;
  age: number;
  isAdmin: boolean;
};

const user_: UserDetails = {
    id : 1,
  name: "Alice",
  age: 25,
  isAdmin: false,
};

updateField(user_, "name", "Bob");     // OK
updateField(user_, "age", 30);         // OK

// updateField(u,"name",123) //number is not assignable to type string