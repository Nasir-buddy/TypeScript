// if we write exoprt before any function then we have to import in {} braces that show we have to import only that particular function 
// and functionality 
export function addpayment(val: number){
    console.log(val);
    
}

export function getDetails(){

}

export function getPaymentDetails(){

}


// default export 
// default exoprt mean it is exporting everything and full fledge function from the code 
// this is the main difference in both of them.
export default class payment{
    constructor(public name: string, public payment: number){

    }
}