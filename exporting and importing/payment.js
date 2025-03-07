"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addpayment = addpayment;
exports.getDetails = getDetails;
exports.getPaymentDetails = getPaymentDetails;
// if we write exoprt before any function then we have to import in {} braces that show we have to import only that particular function 
// and functionality 
function addpayment(val) {
    console.log(val);
}
function getDetails() {
}
function getPaymentDetails() {
}
// default export 
// default exoprt mean it is exporting everything and full fledge function from the code 
// this is the main difference in both of them.
class payment {
    constructor(name, payment) {
        this.name = name;
        this.payment = payment;
    }
}
exports.default = payment;
