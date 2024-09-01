class Animal {
    constructor(breed,color){
        this.breed = breed;
        this.color = color;
    }
    getDetails(){
        return `Breed: ${this.breed} Color: ${this.color}`;
    }
}

class Dog extends Animal{
    constructor(breed,color,name,age){
        super(breed,color);
        this.name = name;
        this.age = age;
    }
    getDogDetails(){
        console.log("Name: "+this.name,"Age: "+this.age,"Breed: "+this.breed,"Color: "+this.color);
    }
}

var dog = new Dog("Bulldog","Brown","Tommy",5);
dog.getDogDetails();