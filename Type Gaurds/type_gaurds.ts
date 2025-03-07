// Type gaurd and type script utility types
// using typeof and instanceof
// partial, required, readonly

// type gaurd is also like type narrowing
function something(arg: string | number | any){
    if(typeof arg == "number"){
        // all auto functon for number
        // arg.(<all functoins>) 
        return "number"
    } else if(typeof arg == "string"){
        // all auto function for string
        // arg.(<all functoins>)
        return "string"
    } else {
        throw new Error("nothing matched...")
    }
}

// type gaurd means type narrowing 
// type gaurd -> type narrowring 
// if there are mixture of types then we can use if else and use of typeof operator we can check teh value 
// we can use 2 types by type gaurd and instanceof
console.log(something(17));
console.log(something("Nasir Ali"));

something(true);


// second type of type gaurd by using instanceof
class remoteTV{
    switchoffTV(){
        console.log("switching off tv");
    }
}
class carRemote{
    switchoffCar(){
        console.log("switching off the car");
    }
}

const tv = new remoteTV()
const carremote = new carRemote();

// we can pass instance of calss in function 
function switchoffkaro(device: remoteTV | carRemote){
    // if the function arg receiving the tv remote then it will run the switch off tv 
    if(device instanceof remoteTV){
        device.switchoffTV();
    } else if (device instanceof carRemote){
        // if the function arg receiving the car remote then it will run the switch off car
        device.switchoffCar();
    }
}

switchoffkaro(tv);
switchoffkaro(carremote);