// different ways to create objects :


//1. Using Object Literals : using {} bracates with key-value pair
const person = {
    firstname : 'Chhota',
    lastname : 'Bheem',
    age : 5
}

//2. Using Object Constructor : built in object constructor
const p2 = new Object();
p2.firstname = 'chhota'
p2.lastname = 'Bheem'
p2.age = 5

//3. Object.create() method : with specific prototype
const p_proto = {
    greet(){
        console.log(`Helllo ${this.firstname}`);
    }
}
const p3 = Object.create(p_proto)
p3.firstname = 'Chhota Bheem'
p3.greet()

//4. ES2015 classes: using the class syntax for a blueprint-like structure. 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.greet(); // Hi, I'm John and I'm 30 years old.

//5. Constructor function : use function as a template for creating multiple objects.
function Person1(name,age){
    this.name = name;
    this.age = age 
}
const p4 = new Person1('bheem',5)
console.log(p4.name);
