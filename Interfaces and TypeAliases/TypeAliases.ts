// Type Aliases
// typs is used to create a new name for a type

type sankhya = number;
let t: sankhya;

// real life ex
type value = string | number | null
let t1: value;

// assigning value to of value we can assign string, number or null in the function 
function ex(obj: value){
    
}


type users = {
    name: string,
    age: number
}

type user2 = users & {
    getNmae(user: string): void
}

function getName(a: user2){
    a.getNmae('sankhya');
    a.age;
    a.name;
}