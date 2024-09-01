// There are 4 ways of defining a class in JavaScript

// 1. Class keyword
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);        
    }
}
var person = new Person("John", 25);
person.greet();


// 2. Constructor function
function Person1(name,age){
    this.name = name;
    this.age = age;
    this.getDetails = ()=>{
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
var person1 = new Person1("Pranav",20)
console.log(person1.getDetails());


// 3. Object() constructor
var Person2 = new Object();
Person2.name = "Arnold";
Person2.age = 80;
Person2.getDetails = function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}
console.log(Person2.getDetails());

// 4. Object literals
var Person3={
    name:"Potter",
    age:25,
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
Person3.greet();