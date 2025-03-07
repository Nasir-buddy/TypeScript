"use strict";
//Generics
// Generics Function
// Generics Interfaces
// Generics classes
// hame ek function banana hai jo ki accecpt krega koi bhi value and usse print krega 
// hm ek function ko use krte wakth bata sakte hain ki fn argument ko kis type se treat kre
// normal function 
function logger(arg) {
    console.log(arg);
}
logger("Nasir Ali");
// we are assigning the a variable to the type T, we can pass any type in the function param and the function accecpt that 
// type of value in T or any variable that you write
function logger2(a) {
    console.log(a);
}
logger2("Nasir Ali");
logger2(23);
logger2(false);
// third function 
const checkFn = (name, b, c) => {
    console.log(name, b, c);
};
checkFn("Nasir", "Ali", 17);
// now some ts advantage
const autoChecker = (name) => {
    console.log(name);
};
autoChecker(12);
autoChecker("Nasir Ali Haider");
