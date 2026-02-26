// Assignment 5: Type Aliases

// Create reusable aliases for union and intersection types
// Refactor earlier assignments to use these aliases

type car ={
    brand_name : string,
    engine : string,
    is_sutiable_for_long_route : boolean,
    is_expensive : boolean
}

type bike ={
    brand_name : string,
    engine : string,
    person_capacity : number
    is_expensive : boolean,
}

type vehicle1 = car | bike   // union
type vehicle2 = car & bike   // intersaction

// Observe how readability improves
// Create a type alias for string | number

type anything = string | number

// Use it in two variables
const num : anything = 15
const str : anything = "Hello"

// How does this improve readability?
// ---> this allow us to accomodate two different types in one so we can use according to our need
