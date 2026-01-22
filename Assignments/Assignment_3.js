// 1. Predict the output and explain the memory state.

    // const registry = {
    //   active: [{ id: 1, name: "Alpha" }],
    //   archived: []
    // };

    // function cloneAndModify(data) {
    //   // Goal: Create a copy so the original registry isn't changed
    //   const copy = { ...data };
    
    //   copy.active.push({ id: 2, name: "Beta" });
    //   copy.active[0].name = "Gamma";
    //   copy.version = 2.0;
    
    //   return copy;
    // }

    // const newRegistry = cloneAndModify(registry);

    // console.log(registry.active.length); // ?
    // console.log(registry.active[0].name); // ?
    // console.log(registry.version);       // ?

// Output : 

    //   console.log(registry.active.length); // ? ------- active was shared by shallow copy to copy so it reference is same as original registry so length is 2 
    // console.log(registry.active[0].name); // ? --- similarly for name  Ans is  : Gamma
     // console.log(registry.version);       // ? --- version variable is not present in registry so it gives output undefined






//2. Identify why the following code throws an error and fix it without using the class keyword.

        // function Animal(name) {
        //   this.name = name;
        // }

        // Animal.prototype.eat = function() {
        //   console.log(`${this.name} is eating.`);
        // };

        // function Dog(name, breed) {
        //   Animal.call(this, name);
        //   this.breed = breed;
        // }

        // // Intent: Dog should inherit from Animal
        // Dog.prototype = Animal.prototype; 

        // Dog.prototype.bark = function() {
        //   console.log("Woof!");
        // };

        // const myDog = new Dog("Buddy", "Golden");
        // const genericAnimal = new Animal("Generic");

        // genericAnimal.bark(); // Why does this happen?  ---- because we do Dog.prototype = Animal.prototype;  this due to this both dog and animal share the SAME prototype object
        // so due to this
        //  Dog.prototype,Animal.prototype refer to the same object so all methods or functionality of dog is also added to animal
        
        
        // console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?       --- due to Dog.prototype = Animal.prototype only becasue due to this is lost the reference to the original constructor
        //  to make it dog we have to write Dog.prototype = object.prototype(Animal.prototype); 
        // and Dog.prototype.constructor = Dog 



// 3. Predict the result of the following execution.
        // function SmartPhone(brand) {
        //     this.brand = brand;
        //     return {
        //         brand: "Generic",
        //         os: "Android"
        //     };
        // }

        // SmartPhone.prototype.getBrand = function() {
        // return this.brand;
        // };

        // const myPhone = new SmartPhone("Apple");

        // console.log(myPhone.brand);    // - here 
        // // it returns the Generic becuase when we get myphone.brand  it calles smartphone calls and it return value is already defined brand : "generic" this.brand = Apple does not affect the 
        // console.log(myPhone.getBrand); // -- undefined  beacause reference of myphone.


// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).

        function masterClone(o) {

            if (o === null || typeof o !== "object") {   // if object is null and is not equal to object return the value
                return o;
            }

            if (typeof o === "function") {   // if type of object is funciton them return 
                return o;
            }

            if (Array.isArray(o)) {    // for each value of array itreate through the whole array and return the value if it is not object ,if object then it will return the deeep copy of object 
                let arrCopy = [];
                for (let i = 0; i < o.length; i++) {
                arrCopy[i] = masterClone(o[i]);
                }
                return arrCopy;
            }

            let oCopy = {};
            for (const key in o) {        // it wll iterate through each key-value pair of object
                if (o.hasOwnProperty(key)) {
                oCopy[key] = masterClone(o[key]);
                }
            }

        return oCopy;
        }

        let data = {name : "Chhota_Bheem", val : { Gender : "Male", age : 5},Hobbies : ["Fighting","Eating_Laddu"]}  

        let same = masterClone(data)

        same.val.Gender = "Female"

        console.log(data)   // same as original 
        console.log(same)   // it will change the gender to female

   
    
// 5. Trace the execution of this class logic.

        class Counter{
        static count = 0;   //----- Satic methods or variables which are static only belong to class where it is defined - it is not accessed by object only by the class  
        count = 10;         // ---- this is not static so we can access it object created by this class also 

            constructor(){
                Counter.count++;
            }
            getCount(){
                return this.count;
            }
            static getStaticCount(){
                return this.count;
            }
        }

        const c1 = new Counter();      // -- it can create c1 object of class so it assign c1.count = 10 but its also calles constructor so Counter.count++ = 0 to 1 
        const c2 = new Counter();     // -- it can create c2 object of class so it assign c2.count = 10 but its also calles constructor so Counter.count++ = 1 to 2 

        //here constructor calls two time when class object is created

        console.log(c1.getCount());        // ?  --- so this output is 10
        console.log(Counter.getStaticCount()); // ?  --- its output is  2
        // console.log(c1.getStaticCount());  // ?   ---   this gives a error because static methods/functions can not access by the ibject of class so it gives error like not defined or not a function 

