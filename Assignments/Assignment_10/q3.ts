// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format(id : number) : string;
function format(id : Date) : string;

function format(id : number | Date) : string{
    if(typeof id === "number"){
        return id.toFixed(2)
    }
    else if(id instanceof Date){
        return id.toISOString()
    }

    throw new Error("invalid")
}

console.log(format(5))