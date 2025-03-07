// first of all type casting and type assertion is most likely same thing
// type assertion ka matlab btana ts ko ki particular cheej ka type kya hai , 
// ye ap tab krte ho jb aap ts se jyada us value aur variable ke bare me jante ho.

// ex
// type assertion
let d: any = 12;
(d as string).includes("2")

// type assertion
let e: any = "nasir";
(<string> d).indexOf("a");

// type conversion
let f = Number("12");
// casting to different data type in number
console.log(typeof f);
