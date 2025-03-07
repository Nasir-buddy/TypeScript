// modules and importing modules
// default exports


// basic import export
import { addpayment, getDetails, getPaymentDetails } from "./payment";

addpayment(12)


// default import export 
import payment from "./payment";

let ans = new payment("Nasir", 234)
console.log(ans);
