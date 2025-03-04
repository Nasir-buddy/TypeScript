"use strict";
// Abstract Classes
// abstract classes is will only make the base classes the it will use to create new full fledge another classes
class Payment {
    constructor(payment, money) {
        this.payment = payment;
        this.money = money;
    }
    isValidPayment(amount) {
        return this.payment > 0;
    }
}
// by extending the payment class we can make the payment 
class payTm extends Payment {
}
