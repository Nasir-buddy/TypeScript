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
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bottle = new BottleMaker("Milton", 1200); // this is the object of the class BottleMaker
