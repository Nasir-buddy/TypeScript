// Type gaurd and type script utility types
// using typeof and instanceof
// partial, required, readonly

// type gaurd is also like type narrowing
function something(arg: string | number | any){
    if(typeof arg == "number"){
        // all auto functon for number
        // arg.(<all functoins>) 
        return "number"
    } else if(typeof arg == "string"){
        // all auto function for string
        // arg.(<all functoins>)
        return "string"
    } else {
        throw new Error("nothing matched...")
    }
}
console.log(something(17));
console.log(something("Nasir Ali"));

something(true);

