// Functions
// function types
// optional and default function parameter
// rest parameter
// overloads
function login(name, cb) {
    // your code here for login
    cb("Nasir");
}
login("harsh", function (value) {
    console.log(value);
});
var register = function (name, age, callback) {
    callback("Hello my name is Nasir Ali");
};
register("Nasir Ali", 24, function (argument) {
    console.log(argument);
});
