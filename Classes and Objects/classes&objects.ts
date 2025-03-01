class Device{
    name = "Redmi";
    price = 20000;
    category = "Mobile";
}

let device = new Device();;
let device1 = new Device();
console.log(device.name);

// constructer is that thing that will give the structure of the real data but not the data itself
// like a machine making biscuits, the machine is the constructer and the biscuits are the objects
// the machine will make biscuits but it will not be the biscuit itself
// the machine will have the structure of the biscuit but not the biscuit itself


class HumanMaker{
    age = 0;
    // take those values that are required to make a human not that we know about the human like age is always start from 0 
    constructor(public name: string, public height: number,public weight: number,public isHandsome: boolean){

    }
}
let h1 = new HumanMaker("Nasir", 5.6, 60, true);