"use strict";
// first of all type casting and type assertion is most likely same thing
// type assertion ka matlab btana ts ko ki particular cheej ka type kya hai , 
// ye ap tab krte ho jb aap ts se jyada us value aur variable ke bare me jante ho.
// ex
// type assertion
let d = 12;
d.includes("2");
// type assertion
let e = "nasir";
d.indexOf("a");
// type conversion / casting
let f = Number("12");
// casting to different data type in number
console.log(typeof f);
// Non-null assertion operator
let g;
g = "nasir";
// by adding ! we are sure that the value of g is not null neither undefined.
g.charAt(2);
