// Deep equality  : --  involves comparing two objects or arrays to determine if they are structurally identical. 
// Unlike shallow equality, which only checks if object references are the same, deep equality examines whether all nested values are equal.

function deep_Equal(obj1,obj2){
    if(obj1===obj2)return true

    if(obj1 == null || obj2 == null || typeof obj1 !== "object" || typeof obj2 !== "object"){
        return false
    }

    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    if(key1.length !== key2.length) return false;

    for(let key of key1){
        if(!key2.includes(key) || !deep_Equal(obj1[key1],obj2[key2])){
            return false
        }
        return true
    }
}

const object1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
}
const object2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
}
console.log(deep_Equal(object1,object2));   //true
