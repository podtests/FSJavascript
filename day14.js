/*
const customernames = [ "Velan Chaudhary", "Shailesh Kumar Singh", "Tina Munir", "Ashsih Lokhandwala", "Akhil Jain", "Tina kumar chaudhary"]
//Search the array & find the first matching element where firstname is Tina?

const output = customernames.find((val, index, arr)=> {
                 if(val.split(" ")[0] === "Tina") {                    
                    return true;
                 } 
    }
)

//customernames.splice(outputIndex, 1);
    
console.log(output);
*/


//const dummyName = "Shailesh Kumar Singh";
//[Shailesh,  Kumar,  Singh]  //3, 
//console.log(dummyName.split(" ")[]);




function calculate(a, b, f1) {
    console.log("fitrst line of calculate")
    console.log("I am inside calculate function");
    let sum1 =0;
    return f1(a,b);
} 

function sum(a,b) {
    console.log("I am inside sum function");
    console.log("last line of sum")
    return a+b;
}

function minus(a,b) {
    console.log("I am inside minus function");
    return a-b;
}

const output = calculate(2,3, sum);

minus(3,4);

console.log(output);