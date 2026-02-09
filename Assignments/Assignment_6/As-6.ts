// Create a variable prices as an array of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100


const num : number[] = [10,50,20]

// function calculate_total(num : number[]):number{
//     let sum : number = 0
//     for(let i = 0 ; i < num.length ; i++){
//           sum += num[i]
//     }
//     return sum
// }

function calculate_total(num : number[]) : number{
    let sum : number = num.reduce((acc,cur)=>{
        acc += cur
        return acc
    },0)
    return sum 
}

function concat(num1: number , num2 : number) : number | string{
        if(num1+num2 > 100){
            return "Sum is greter than 100"
        }
        return num1 + num2
}