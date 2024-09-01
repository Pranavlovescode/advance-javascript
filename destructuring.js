// Program to demonstrate destructuring in JavaScript

// destructuring in arrays
var arr = [11,12,13,14,15,16]
var [a,b,c] = arr;
console.log(a,b,c);


// destructuring in objects

var obj ={
    name:"John",
    age:25,
    city:"New York",
    weight:90,
    height:6.1,
    status:"single"
}
var {name:n,age,city,weight:w} = obj;
console.log(n,age,city,w);