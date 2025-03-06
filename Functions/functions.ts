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

const register = (name: string, age: number,  callback: (value: string) => void):void => {
    callback("Hello my name is Nasir Ali");
}

register("Nasir Ali", 24, (argument: string) => {
    console.log(argument);
})

// show details conditional param
const userDetails = (name: string, gender?: string): void => {

}
userDetails("nasir", "male");
userDetails("someone");

// default param
const userAge = (name: string, gender: string = "not to disclosed"): void => {
    console.log(name, gender);
}

userAge("nasir ali", "male");
userAge("someone")


// new function