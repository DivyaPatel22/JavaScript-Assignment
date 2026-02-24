// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
function wrapInArray<T>(name : T):T[]{
  const result = [name]
  return result
} 
console.log(wrapInArray("Hello"))
console.log(wrapInArray(100))


// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number
interface PaginatedResponse<T> {
    items : T[]
    total : number
}

const res: PaginatedResponse<string> = {
  items: ["a", "b", "c"],
  total: 3,
};