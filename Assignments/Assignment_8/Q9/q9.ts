// Assignment 9: Access Modifiers

// Create a service class exposing only required public methods
// Keep internal data private
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?
class service{
    private service_copamny : string = "xyz"   // only inside or accessible by class
    private ser_type : string = "classic"
    public name : string = "abc"

    private service_company(){   // only by class
        return this.service_copamny
    }

    protected get_name(name : string){    // accesses by  class and subclass 
        console.log("name : ",name);   
    }

    public service_type() : string{   // accessible evrywhere
        return this.ser_type
    }
}


// Explain which members should be accessible and why

const s = new service();
console.log(s.service_type());
console.log(s.name);
//output :[LOG]: "classic" 
// [LOG]: "abc" 

// console.log(s.get_name);   this give error does not accessible by object of clas becuase protected only by class & subclass
// console.log(s.service_company());   bause this is private we cannot access it obly class can access it

