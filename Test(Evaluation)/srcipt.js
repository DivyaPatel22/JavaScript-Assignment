// console.log("a");
//    await sum(3,2)

// console.log("c");
   
// function sum(a,b){
//     console.log(a+b);
    
//     Promise.resolve(6).then((data)=>{
//         console.log(data);
//     })

//     setTimeout(()=>{
//         console.log("b"); 
//     },0)
// }

// console.log("hello ! i'm done");

// const itemList = document.getElementById('item-list');

// itemList.addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     console.log(`Clicked on ${event.target.textContent}`);
//   }
// });



// Set a cookie with an expiry date
document.cookie = 'userId=12345; expires=Fri, 20 Feb 2026 23:59:59 GMT; path=/';

// Read all cookies
console.log(document.cookie);

// Delete a cookie
document.cookie = 'userId=; expires=Thu,  Jan 1970 00:00:00 GMT; path=/';
