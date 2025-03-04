"use strict";
class gettersetter {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    // getName(){
    //     return this.name;
    // }
    // setName(value: string){ 
    //     this.name = value;
    // }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    set name(value) {
        this._name = value;
    }
}
let gs = new gettersetter('Nasir', 23);
// calling value
gs.name;
gs.age;
