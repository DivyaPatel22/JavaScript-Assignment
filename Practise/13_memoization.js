// Memoization is a concept in js which is useful for optimizing the performance of functions in js where  we stored repeadtly same arguments of function so we no need to call the function wvery timw we just return result direclty by cashe


function memoization(fun){
    let cashe = {};

    return function(x,y){
        const key = `${x},${y}`

        if(cashe[key]){
            console.log("Result from Cashe");
            return cashe[key]
        }
        const result = fun(x,y)
        cashe[key] = result
        return result
    }
}

const add = memoization((x,y)=>{
    return x+y
})

console.log(add(2,3)); //5
console.log(add(2,3)); //Result from cashe 5
