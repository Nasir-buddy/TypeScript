// Generic Interface
// image of object is called interface
interface newInterface<G>{
    name: string;
    age: number;
    key: G
}

function intrfce(obj: newInterface<string>){
    console.log(obj);
}

intrfce({ name: "Nasir Ali", age: 23, key: "alsdjf"})