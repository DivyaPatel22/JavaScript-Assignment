const input = [
  { id: 1, tag: "mam" },
  { id: 1, status: true },
  { id: 2, tag: "teacher" }
];

function mergeById(arr) {
    const result = arr.reduce((acc, obj) => {
        if (!acc[obj.id]) {
            acc[obj.id] = {};
        }

        acc[obj.id] = { ...acc[obj.id], ...obj };

        return acc;
    }, {});
    return Object.values(result);
}

const output = mergeById(input);
console.log(output);





// async function getUserPostTitles(userId) {
//     const userResponse = await fetch(`/users/${userId}`);
//     const user = await userResponse.json();

//     const postsResponse = await fetch(`/posts?userId=${user.id}`);
//     const posts = await postsResponse.json();

//     return posts.map(p => p.title);
// }




//Example : return where age > 18 and isactive = true only id and name with sort
const response ={
  status: 200,
  data: {
    users: [
      { id: 1, name: "Amit", age: 25, isActive: true, role: "admin" },
      { id: 2, name: "Neha", age: 17, isActive: false, role: "user" },
      { id: 3, name: "Raj", age: 30, isActive: true, role: "user" },
      { id: 4, name: "Simran", age: 22, isActive: true, role: "moderator" }
    ]
  }
};

for(let i of response.data.users){
      if(i.age>18 && i.isActive==true){
          console.log(i) 
      }
}

let result = response.data.users.filter(i=>i.age>18 && i.isActive==true)  //similarr to above code 
console.log(result)
let r = result.map(p=>{
    return {id : p.id , name : p.name}
})
console.log(r.sort((a, b) => {
    return b.name<(a.name);
}))



// create new object with tags with unique id 
const input1 = [
  { id: 3, tags: ["a", "b"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
  { id: 2, tags: ["d", "e"] }
];  

let result1 = input1.reduce((acc,cur)=>{
    cur.tags.forEach(v => {
        if(!acc[v]){
            acc[v] = [cur.id]
        }
        else{
            if(!acc[v].includes(cur.id)){
                acc[v].push(cur.id)
            }
        }
        acc[v].sort()
    })
    
    return acc
},{})
console.log(result1)

// { a: [ 2, 3 ], b: [ 1, 3 ], c: [ 1, 2 ], d: [ 2 ], e: [ 2 ] }



// Count occurrences
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result12 = arr.reduce((acc,cur)=>{
    if(!acc[cur]){
        acc[cur] = 0
    }
    acc[cur]+=1
    return acc
},{})
console.log(result)
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }


// Flatten one level array
const arr1 = [[1,2], [3,4], [5]];
const result11 = arr1.reduce((acc,cur)=>{
   acc.push(...cur) 
   return acc
},[])
console.log(result1)


// Group numbers by even / odd
const arr2 = [1,2,3,4,5,6];
const result2 = arr2.reduce((acc,cur)=>{
    if(cur % 2 == 0){
        acc.even.push(cur)
    }
    else{
        acc.odd.push(cur)
    }
    return acc
},{even : [] , odd : []})
console.log(result2)


//Remove Duplicates
const arr3 = [1,2,2,3,4,4,5];
const result3 = arr3.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc
},[])
console.log(result3)



// Transform array of objects
const users = [
  {id: 1, name: "A"},
  {id: 2, name: "B"},
  {id: 3, name: "C"}
];
// {
//   1: "A",
//   2: "B",
//   3: "C"
// }
let result4 = users.reduce((acc,cur)=>{
    acc[cur.id] = cur.name
    return acc
},{})
console.log(result4)



//Find second largest number
let second
let result5 = arr3.reduce((acc,cur)=>{
    if(acc<cur){
        second = acc
        acc = cur
    }
    return acc
},0)
console.log(result5)
console.log(second)



//Pipeline calculation Return:
// sum of even numbers
// multiplied by 2
// only if result > 50
// (All inside one reduce)
const arr4 = [10, 20, 30, 40];

const sum = arr4.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + cur;
  }
  return acc;
}, 0);

const r1 = sum * 2 > 50 ? sum * 2 : null;

console.log(r1);
