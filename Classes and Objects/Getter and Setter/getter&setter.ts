class gettersetter{
    constructor(public _name: string, public _age: number){}

    // getName(){
    //     return this.name;
    // }

    // setName(value: string){ 
    //     this.name = value;
    // }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }

    set age(value: number){
        this._age = value;
    }
    set name(value: string){
        this._name = value;
    }
}

let gs = new gettersetter('Nasir', 23);

// calling value
gs.name
gs.age