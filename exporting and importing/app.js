"use strict";
// modules and importing modules
// default exports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// basic import export
const payment_1 = require("./payment");
(0, payment_1.addpayment)(12);
// default import export 
const payment_2 = __importDefault(require("./payment"));
let ans = new payment_2.default("Nasir", 234);
console.log(ans);
