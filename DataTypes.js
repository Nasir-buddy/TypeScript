"use strict";
// Basic Types
// Premitive Types - number, string, boolean
// Array 
// Tuples
// Enum
// Any, Void, Null, Undefined, Never, Unknown
// Premitive and Reference Types
// Premitive Types
// Tuples
// Tuples are used to store multiple values in a single variable
let arr = ["Nasir", 1];
let arr1 = [17, "Ali"];
// Enumerations
// Enums allow us to define a set of named constants
// Either numeric or string values
// Enums values are case-sensitive
// Enums may have initializers
// Enums are used to define a set of named constants
// Enums are defined using the enum keyword
// Enums are strongly typed and are not the same as objects
// Enums values are accessed using the dot notation
// Enums can be looped over
// Enums can be merged
var UserRoles;
(function (UserRoles) {
    // In Enumeratoin we can use create properties with values 
    UserRoles["ADMIN"] = "nasir";
    UserRoles["USER"] = "ali";
    UserRoles["SUPER_USER"] = "super";
})(UserRoles || (UserRoles = {}));
var Statuscode;
(function (Statuscode) {
    Statuscode[Statuscode["OK"] = 200] = "OK";
    Statuscode[Statuscode["NOT_FOUND"] = 404] = "NOT_FOUND";
    Statuscode[Statuscode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(Statuscode || (Statuscode = {}));
// Any, Unknown, Void, Null, Undefined, Never
// Any
// Any is a data type that we can use when we are not sure about the type of the value
// Any is a dynamic type   
// Any type can store any type of value 
// Any cant check any thing for the variable 
let a; // By default it is any type
// that variable can be assigned any type of value
a = 10;
a = "Nasir";
a.substring(1, 2);
// Unknown
// Unknown is a data type that we can use when we can define the type of the value later
// Unknown is a static type
// Unknown type can store any type of value
// we cant do operation on unknown without checking the type of the value
let b;
b = 10;
b = "Ali";
// b.substring(1, 2); // Error
if (b instanceof String) {
    b.substring(1, 2);
}
