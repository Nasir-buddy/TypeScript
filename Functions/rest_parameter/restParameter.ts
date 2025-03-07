// Rest Parameter
// ... rest/spread

// function ke param me ... lagaya to ap wha pr saare diye gaye arg ko ek hi var me as an array rakh rakhe ho 

function dfdfd(...arr: number[]){
    console.log(arr);
}

dfdfd(1,2,3,4,5,6,7,8)

const friends = (...frnds: string[]) : void => {
    console.log(frnds);
}
friends("Nasir", "Archil", "Adarsh")

// spread operator

var array = [1,2,3];
var arr2 = [...array]
