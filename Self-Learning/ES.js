// How do ES2015 classes differ from ES5 constructor functions? :

// ES5 constructor functions use function constructors and prototypes for object creation and inheritance.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const john = new Person('John', 30);
john.greet(); // Hi, I'm John and I'm 30 years old.


// ES2015 Classes use the class keyword for cleaner and more intuitive syntax.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const john1 = new Person('John', 30);
john1.greet(); // Hi, I'm John and I'm 30 years old.



// Key differences:
// Syntax: ES2015 classes are more readable and concise.
// Static methods: Easier to define using static in ES2015.
// Inheritance: Simpler with the extends and super keywords in ES2015.