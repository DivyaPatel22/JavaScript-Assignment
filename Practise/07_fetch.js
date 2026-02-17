// Fetch and Log :
// Fetch data from:
// https://jsonplaceholder.typicode.com/users
// Print the entire JSON response to the console.

fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
})

// Extract Specific Field
// From the same API, print only:
// user names
// user emails

fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
    return res.json()
}).then(data=>{
    data.forEach(element => {
        console.log(`Name: ${element.name} | Email: ${element.email}`)
    });
})

// Fetch Single User

// Fetch:
// https://jsonplaceholder.typicode.com/users/3
// Print:
// name
// company name

fetch("https://jsonplaceholder.typicode.com/users/3").then(response=>response.json()).then(data=>console.log(`Name : ${data.name} & Company is ${data.company.name}`))

// Handle Errors
// Fetch:
// https://jsonplaceholder.typicode.com/invalidurl
// Handle the error properly using .catch().

fetch("https://jsonplaceholder.typicode.com/invalidurl")
  .then(response => {
      if (!response.ok) {
          throw new Error("Something went wrong");
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log("Error occurred:", err.message);
  });
