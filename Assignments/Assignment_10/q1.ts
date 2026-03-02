// Create a type IsNumber<T> .
type IsNumber<T> = T extends number ? true : false

type A = IsNumber<number> //true
type B = IsNumber<string> //false
type c = IsNumber<BigInt> //false


// Create a type ExtractEmail<T> that extracts email type if present.

type ExtractEmail<T> = T extends { email: infer U } ? U : never

type human = {
    id : number,
    name : string,
    email : string
}
type animal = {
    id : number,
    name : string
}

type people = ExtractEmail<human>  // string
type people_1 = ExtractEmail<animal>  //never
