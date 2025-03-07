"use strict";
// function over loading
function ovrlding(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("Hey first fn");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else {
        throw new Error("something went wrong");
    }
}
ovrlding("nasir");
ovrlding("Ali", 17);
