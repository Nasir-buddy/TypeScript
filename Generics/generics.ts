//Generics
// Generics Function
// Generics Interfaces
// Generics classes

// hame ek function banana hai jo ki accecpt krega koi bhi value and usse print krega 
// hm ek function ko use krte wakth bata sakte hain ki fn argument ko kis type se treat kre
// normal function 
function logger(arg: any){
    console.log(arg);
    
}
logger("Nasir Ali");

// we are assigning the a variable to the type T, we can pass any type in the function param and the function accecpt that 
// type of value in T or any variable that you write
function logger2<T>(a: T){
    console.log(a);   
}

logger2<string>("Nasir Ali");
logger2<number>(23);
logger2<boolean>(false);

// third function 
const checkFn = <G>(name: G, b: string, c: number){
    console.log(name, b, c);
}

checkFn<string>("Nasir", "Ali", 17)