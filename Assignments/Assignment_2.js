// 1-problem

let str = "JavaScript For Beginners"

console.log(str.toLowerCase().split(" ").join("-"))


// 2 - problem 

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(list.slice(3,6));


// 3-problem 

let a = [10,20,30]

function add(a){
    return a.map((p)=>`$${p}`)
}

console.log(add(a));

// 4-problem 

let age = [25,-5,18,0,40]

function clean(age){
    return age.filter((p)=>p>0)
}

console.log(clean(age));

// 5-problem

let d = [-10,20,50,-5]

function cleanup(d){
    return d.filter((p)=> p>0).map((p)=>p*2)
}

console.log(cleanup(d))

//6-problem 

let di = [100,200,50]

function cart(di){
    return di.reduce((acc,val)=>{
        acc += val
        return acc;
    },0)
}

console.log(cart(di));


//8 - probelm 

const settings = {
    theme : "light",
    notifications : true
};

const newSettings = {...settings, theme : "dark"}

console.log(settings.theme);


// 9 - problem 

const inventory = [
    {name : "Laptop", price : 1000, stock : 5},
    {name : "Phone", price : 500, stock : 0},
    {name : "Mouse", price : 50, stock : 10},
]

function f(d){
    return d.filter((i)=>i['stock']>0).map((p)=>({...p,totalvalue : p['price']*p['stock']})).reduce((acc,val)=>{
        acc+=val['totalvalue']
        return acc;
    },0)
}

console.log(f(inventory));
