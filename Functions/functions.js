"use strict";
// Functions
// function types
// optional and default function parameter
// rest parameter
// overloads
function login(name, cb) {
    // your code here for login
    cb("Nasir");
}
login("harsh", (value) => {
    console.log(value);
});
const register = (name, age, callback) => {
    callback("Hello my name is Nasir Ali");
};
register("Nasir Ali", 24, (argument) => {
    console.log(argument);
});
// show details conditional param
const userDetails = (name, gender) => {
};
userDetails("nasir", "male");
userDetails("someone");
// default param
const userAge = (name, gender = "not to disclosed") => {
    console.log(name, gender);
};
userAge("nasir ali", "male");
userAge("someone");
// new function
const machine = (machineName, machinePower, machineCode = 555) => {
    console.log(machineName, machinePower, machineCode);
};
machine("Engine", 150);
