// generic classes and constructor
class genericMaker<G>{
    constructor(public key: G){}
}

let g1 = new genericMaker<string>("nasir ali");
let g2 = new genericMaker<number>(23);

console.log(g1, g2);

// some intresting thing
function lablablab<G>(a: G, b: G): G{
    // if we not write as G then ts will think we are returning the string litrell from return 
    // because ts not works that we think, ts is accecpting to return the generic type from the function 
    // that's why we have to return the as G so it will trease as G means string  
    // litrell means litreally "" this is litreally a string
    return "nasir" as G;
}

lablablab("nasir", "ali")

// another methods

function lablab2<G>(a: G): G{
    // the second way to return the string litrells as like generis is like this
    return <G> "Nasir";
}