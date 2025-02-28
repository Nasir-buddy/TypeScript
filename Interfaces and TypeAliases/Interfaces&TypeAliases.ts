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
    gender?: string; // optional property
}

function getUserData(objt: User) {
    objt.age;
    objt.email;
    objt.name;
    objt.phone;
    objt.gender;
}

getUserData({ name: "Nasir", age: 25, email: 'nasir@gmail.com', phone: 345345523 });


// Extending Interface
// we extending the properties of the interface from another interface and also we can add some more properties
interface Employee extends User {
    salary: number;
    position: string;
}

function getEmployeeData(obj: Employee){
    obj.position;
    obj.salary;
}