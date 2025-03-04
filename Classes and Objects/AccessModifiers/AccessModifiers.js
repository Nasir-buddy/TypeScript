"use strict";
class BottleMaker1 {
    constructor(name) {
        this.name = name;
        // public means we change change it from any where like class methods or outside the class.
        // private means we cannot change it from outside the class
        // protected means we can change it from the class and its child class but not from outside the class
        // readonly means we can only read it but cannot change it
        // static means we can call it without making an object of the class
        this.halwa = "haluwa";
    }
}
class MetalBottleMaker extends BottleMaker1 {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.halwa);
    }
}
let bt1 = new MetalBottleMaker("Milton");
bt1.getValue();
// protected means we can change it from the class and extended class can also change it value in that class too
class carMaker {
    constructor() {
        this.name = "Toyota";
    }
}
class superCarMaker extends carMaker {
    constructor() {
        super(...arguments);
        this.name = "Ferrari";
    }
    changename() {
        this.name = "Lamborghini";
    }
}
let car = new superCarMaker();
car.changename();
class keyboardMaker {
    constructor() {
        // we can set it to private too
        this.brandName = "CosmicByte";
    }
}
class keyboard extends keyboardMaker {
    constructor() {
        super(...arguments);
        this.brandName = "HP";
    }
    changeKeyboardName() {
        this.brandName = "Nothing";
    }
}
let keybrd = new keyboardMaker();
// readonly property 
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "Nasir Ali";
    }
}
let n1 = new User("Ali Nasir");
class newUser {
    // these are parameter properties that are initialize in parameter properties.
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
