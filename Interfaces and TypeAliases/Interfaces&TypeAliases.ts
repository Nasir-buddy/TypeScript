// Interfaces and Type Aliases
// Defining the interface
// Using interface to define object shapes
// extending interface
// type aliases
// Intersection types

// interface ka kam hai object ka shape btana , aur types ka kaam hai apne khud ke user define type bnana
interface User {
    name: string;
    age: number;
    email: string;
    phone: number;
}

function getUserData(objt: User){
    objt.age;
    objt.email;
    objt.name;
    objt.phone;
}

getUserData({name: "Nasir", age: 25, email: 'nasir@gmail.com', phone: 345345523});