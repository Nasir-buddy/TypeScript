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
let arr = ["Nasir", 1];
let arr1 = [17, "Ali"];
// Enumerations
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
let a;
