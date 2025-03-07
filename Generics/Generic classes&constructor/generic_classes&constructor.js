"use strict";
// generic classes and constructor
class genericMaker {
    constructor(key) {
        this.key = key;
    }
}
let g1 = new genericMaker("nasir ali");
let g2 = new genericMaker(23);
console.log(g1, g2);
// some intresting thing
function lablablab(a, b) {
    // if we not write as G then ts will think we are returning the string litrell from return 
    // because ts not works that we think, ts is accecpting to return the generic type from the function 
    // that's why we have to return the as G so it will trease as G means string  
    // litrell means litreally "" this is litreally a string
    return "nasir";
}
lablablab("nasir", "ali");
// another methods
function lablab2(a) {
    // the second way to return the string litrells as like generis is like this
    return "Nasir";
}
