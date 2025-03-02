class BottleMaker1{
    // public means we change change it from any where like class methods or outside the class.
    // private means we cannot change it from outside the class
    // protected means we can change it from the class and its child class but not from outside the class
    // readonly means we can only read it but cannot change it
    // static means we can call it without making an object of the class

    constructor(public name: string){

    }
}
let bt1 = new BottleMaker1("Milton");
bt1.name = "CocaCola";