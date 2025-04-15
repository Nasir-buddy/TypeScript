// function over loading

// ts function signature
// in function overloading the two function will work same with different arguments.
function ovrlding(a: string): void;
function ovrlding(a: string, b: number): number;

function ovrlding(a: any, b?: any){
    if(typeof a === "string" && b === undefined){
        console.log("Hey first fn");
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else {
        throw new Error("something went wrong");
    }
}

ovrlding("nasir");
ovrlding("Ali", 17)
