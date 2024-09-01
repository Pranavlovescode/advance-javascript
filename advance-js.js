
// Defination of the class without constructor
class Person{
    name = "John";
    age = 25;    
}

var person = new Person();
console.log(person.name); // John
console.log(person.age); // 25


// Defination of the class with constructor
class Person1{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

var person1 = new Person1("Pranav Titambe",20,"male");
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Gender: "+person1.gender);

// Defination of the class with constructor and method

class Person2{
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getDetails(){
        console.log("Printing the details using method");
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Gender: "+this.gender);        
    }
}

var person2 = new Person2("Arnold",20,"male")
person2.getDetails();


// Class and object using Object method
// Object literals
var Person5={
        name:"Arnold",
        age:50,
        weight:80,
        height:5.5,
    getDetails:function() {
        return "Name: "+this.name+" Age: "+this.age+" Weight: "+this.weight+" Height: "+this.height;
    }
}

console.log(Person5.name);


console.log(Person5.getDetails());

var {name,age,weight,height} = Person5;
console.log("Name: "+name+" Age: "+age+" Weight: "+weight+" Height: "+height);

// Cerating objects using Object constructor
var Person6 = new Object();
Person6.name="Arnold"
Person6.age=50;
Person6.weight=80;
Person6["height"]=6.3
Person6.getFunction = function(){
    return "Name: "+this.name+" Age: "+this.age+" Weight: "+this.weight+" Height: "+this.height;
}

console.log(Person6.getFunction());
console.log(Person6.height);



// var Message={
//     message:"Hello",
//     getMessage:function(){
//         alert(this.message);
//     }
// }
// Message.getMessage();


// // Callback functions using arrow function
// setInterval(()=>{
//     console.log("Hello Pranav");
// },2000)


// // Callback functions using function - function which is passed as an argument to another function is called as callback function.
// setInterval(function(){
//     console.log("Hello Pranav");
// },200)



// Promises in the JavaScript
var promise = new Promise((resolve, reject) => {
    var a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
}).then((message) => {
    console.log("This is in the then block - " + message);
}).catch((message) => {
    console.log("This is in the catch block - " + message);
})


// User Input 

// var input = prompt("Enter the number");
// console.log(input);


// Iterators in the JavaScript

var arr = [1,2,3,4,5,6,7,8,9,10];
function funcIterator(values){
    var index = 0;
    return{
        next:function () {
            if(index<values.length){
                return{
                    value:values[index++],
                    done:false 
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}

console.log('\nIterators in the JavaScript');
var iterator = funcIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Generators in the JavaScript

console.log('\nGenerators in the JavaScript');

function* genNumbers(){
    let i = 0;
    while(true){
        yield i++;
    }
}

var gen = genNumbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
