//This function will accept 2 numbers & it will perform calculation
/*
- sum
- minus
- divide
- multiply

*/

//Higher order function
//a) assign a function to a variable 
/*
const result = function calculate(a, b) {

    //

}
    */


//b) you can pass one function as argument into another function
/*
function calculate(a, b, fn) {

     let res = fn(a,b);         
    console.log(`output is: ${res}`);
}

const sum  = (a,b) => {
    return a+b;
}

//console.log(`Calculated value is ${result}`);


function minus(a,b){
    return a-b;
}

function divide(a,b) {
    return a/b;
}

function multiply(a,b){
    return a*b;
}

calculate(2,3, multiply);
*/

//c) return a function from a function:
/*
function sum(){

}

console.log(sum);
*/

function outputNames() {

    return  (a,b) => {
        let c = a+b;      
        return c;  
    } 
}

const result = outputNames();

console.log(`result is ${result(2,3)}`);




// result = 


//console.log(result);   // [Function: sum] 
//console.log(`output is: ${result}`);  
/*
output is: function sum(a,b){
        let c = a+b;
        console.log(`sum result is: ${c}`);
    }
*/



//undefined
//output is: sum result is: undefined
//[function: sum]
