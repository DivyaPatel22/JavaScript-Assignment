// Assignment1 : Number Check
// Write a program to check whether a number is:
// Positive
// Negative
// Zero
const num=15;
if(num>0){
    console.log("Positive Number");
}
else if(num<0){
 console.log("Negative Number");
}
else{
    console.log("Zero");
}
// const CheckNumber= (num) =>{
//         const ans = (num>0)? 'positive': (num<0)?'negative':'zero';
//         return ans;      
// //         return num!=0 ? num>0 ? 'positive':'negative':'zero';
// }
// console.log(CheckNumber(num));


// Assignment 2: Even/Odd in Range
// Print numbers from 1 to 20 and show whether each is Even or Odd.
for(let i=1 ; i<=20;i++){
    if(i%2==0){
       console.log(i,": Even");
    }else{
        console.log(i,": ODD");
    }
}


// Assignment 3: Role Access using switch-case
// Create a variable role with values like:
// "ADMIN"
// "USER"
// "MANAGER"

const role='ADMIN';
switch(role){
    case 'ADMIN' : console.log("ADMIN → Full access");
                 break;
    
    case 'USER' : console.log("USER → Limited access");
                 break;

    case 'MANAGER' : console.log("MANAGER → Moderate access");
                 break;
     
    default : console.log("default → Invalid role");
}


// Assignment 4: Total Price Function
 // Create a function:
// calculateTotalPrice(price, quantity)
// Return total.
const calculateTotalPrice = (price, quantity)=>{
     return price*quantity;
}
console.log(calculateTotalPrice(150, 4));



// Assignment 5: Coupon Discount Function
// Create a function:
// applyCoupon(amount, couponCode)
const applyCoupon=(amount, couponCode) =>{
     switch(couponCode){
        case 'SAVE10': return amount*10/100;
                        break;
        case 'SAVE20' : return amount*20/100;
                       break;
         default: return amount;
     }
}
console.log(applyCoupon(1000,'SAVE10'));
