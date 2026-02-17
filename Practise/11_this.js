// function greet() {
//   console.log(this); // global object or undefined
// }
// greet();


const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // Inherits `this` from enclosing scope
  },
};
obj.greet(); // undefined


//ES6 and this :

// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }

// const timer = new Timer();
