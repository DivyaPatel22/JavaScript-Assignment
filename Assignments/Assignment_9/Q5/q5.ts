// Create a type ReadOnlyUser where all properties are readonly.

type user = {
    id : number,
    name : string,
    age : number
}

type ReadOnlyUser = Readonly<user>

const u1 : ReadOnlyUser = {
    id : 1,
    name : "d",
    age : 15
}
// u1.id = 2 // Gives error becuase it only readonly property




// Create a type StringifiedUser where all properties become string.
type StringifiedUser = {
    [K in keyof user] : string
}
// Result
// type user = {
    //     id : string,
    //     name : string,
    //     age : string
    // }
    
const u2 : StringifiedUser = {
        id : "12",
        name : "d",
        age : "15"
}



// Create a type OptionalAndNullableUser where all properties are optional and nullable
type OptionalAndNullableUser = {
    [K in keyof user] ?: user[K] | null
}

const u3 : OptionalAndNullableUser = {
        name : "d",
        age : null
}
