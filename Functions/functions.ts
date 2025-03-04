// Functions
// function types
// optional and default function parameter
// rest parameter
// overloads

function login(name: string, cb: (value: string) => void){
    // your code here for login
    cb("Nasir")
}

login("harsh", (value: string) => {
    console.log(value);  
});

const register = (name: string, age: number, callback: (value: string) => void):void => {
    callback("Hello my name is Nasir Ali");
}

register("Nasir Ali", 24, (argument: string) => {
    console.log(argument);
})