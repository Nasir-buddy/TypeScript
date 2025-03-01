"use strict";
class Device {
    constructor() {
        this.name = "Redmi";
        this.price = 20000;
        this.category = "Mobile";
    }
}
let device = new Device();
;
let device1 = new Device();
console.log(device.name);
// constructer is that thing that will give the structure of the real data but not the data itself
// like a machine making biscuits, the machine is the constructer and the biscuits are the objects
// the machine will make biscuits but it will not be the biscuit itself
// the machine will have the structure of the biscuit but not the biscuit itself
// ts gives you the ability to make a constructer in a class directly in a constructor
class HumanMaker {
    // take those values that are required to make a human not that we know about the human like age is always start from 0 
    constructor(name, height, weight, isHandsome) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
}
let h1 = new HumanMaker("Nasir", 5.6, 60, true);
// traditional way of making a class and constructor but more complex
class BottleMaker {
    constructor(brand, price, category) {
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
}
let bt = new BottleMaker("CocaCola", 20, "SoftDrink");
// This keyword
// this keyword is used to refer to the current object of the class
class anything {
    constructor() {
        this.name = "Nasir";
    }
    // this ka matlab hai class ke andar kisi chij ko call krna hai to use this ke sth referance dena prega
    // we cannot make new variable in methods we can take it from outside of the methods with this keyword
    changeName() {
        this.name = "Ali";
        this.changemorestuff();
    }
    changemorestuff() {
    }
}
class maker {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
let m = new maker("Hellow Maker");
