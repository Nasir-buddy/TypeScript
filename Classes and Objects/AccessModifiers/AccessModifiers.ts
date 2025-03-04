class BottleMaker1{
    // public means we change change it from any where like class methods or outside the class.
    // private means we cannot change it from outside the class
    // protected means we can change it from the class and its child class but not from outside the class
    // readonly means we can only read it but cannot change it
    // static means we can call it without making an object of the class

    private halwa: string = "haluwa";

    constructor(public name: string){

    }
}
class MetalBottleMaker extends BottleMaker1{
    constructor(name: string){
        super(name);
    }
    getValue(){
        console.log(this.name, this.halwa);
    }   
}
let bt1 = new MetalBottleMaker("Milton");
bt1.getValue();


// protected means we can change it from the class and extended class can also change it value in that class too
 
class carMaker{
    protected name = "Toyota";
}

class superCarMaker extends carMaker{
    public name = "Ferrari";
    changename(){
        this.name = "Lamborghini";
    }
}

let car = new superCarMaker();
car.changename();

class keyboardMaker{
    // we can set it to private too
    public brandName = "CosmicByte";
}

class keyboard extends keyboardMaker{
    public brandName = "HP";
    changeKeyboardName(){
        this.brandName = "Nothing"
    }
}

let keybrd = new keyboardMaker();

// readonly property 

class User{
    constructor(public readonly name: string){}
    changeName(){
        this.name = "Nasir Ali"
    }
}

let n1 = new User("Ali Nasir")