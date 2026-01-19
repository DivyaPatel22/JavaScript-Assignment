// Strings is sequence of characters - represents textual data

//declaration or creation of Strings : 

let a = "ABCD"  //String primitive 
let b = 'ABCD'
let c = `ABCD`  //modern way to create string and useful for string interpolation(let you embedd vairbale etc in string literals)

const d = new String("Hey I'm String Object !")  //stirng created using string() constructor

//string primitve is immutable Has not methods and properties where 
//        object is mutable and Has methods and properties

console.log(typeof(a),typeof(b),typeof(c),typeof(d));

let s1=""           //empty string
console.log(s1);

let s2=`I'm         
    multi-line
    String `        //multi-line string
console.log(s2);

let s3 = "I'm string under'decoration'!"
console.log(s3);

//example of string interpolation
var name = "Chhota-Bheem"
var Full_Name = `Heyy ! I'm ${name}`
console.log(Full_Name);



//Strings are immutable → original string does NOT change

//Strings methods :

console.log(Full_Name.length); //to find length of string 
console.log(name.toUpperCase());  //Converts all letters to UPPERCASE
console.log(name.toLowerCase()); //Converts all letters to lowercase
console.log(Full_Name.includes("I"));  //Checks if a string contains something  - Returns true / false - Case-sensitive
console.log(Full_Name.indexOf('m'));  //Gives the position(index) of a character or word
console.log(Full_Name.charAt(9));  // returns the character at given index 

let exm = "Modern"
console.log(exm.slice(2,5));    //slice(start, end)
console.log(exm.slice(-2));   //negative indexing

console.log(exm.replace("Mo","Co"));  //Replaces first occurrence only
//replaceAll() replaces all occurrences


//splitting Strings : 






