// Assignment 8: Typed Functions


// Write a function with required and optional parameters
// Define return types explicitly

function print(message: string, note?: string):string{
        console.log(message, note);
        return "Done !"
}

console.log(print("Hello"));
console.log(print("Hello","Mam !"));

// [LOG]: "Hello",  undefined 
// [LOG]: "Done !" 
// [LOG]: "Hello",  "Mam !" 
// [LOG]: "Done !" 


// Create a small utility function that would exist in a real project
type Product = {
    id: number,
  name: string;
  price: number;
}
function print_Product(product: Product): void {
  console.log(`product_id : ${product.id}`);  
  console.log(`Product: ${product.name}`);
  console.log(`Price: ${product.price}`);
}
const item: Product = {
    id : 156,
  name: "Keyboard",
  price: 49.99
};
print_Product(item);


// Write a function with one required and one optional parameter
// Call it with and without the optional argument
function print_info(message: string, note?: string){
        console.log(message, note);
        return "Done !"
}
print_info("Hello");
print_info("Hello","Mam !");

// How does TypeScript enforce correctness here?
// ----here not has two data type one is string and another is undefined so if you provide value string is considered and if you dont provide it will take as undefined 