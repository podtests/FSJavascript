const transactions = [78, -90, 56, -5, 67, 100];

//no .of execution : 6
//ist iteration:     78 , 0 ,  [78, -90, 56, -5, 67, 100]
/*
transactions.forEach((val, index, arr)=> {

    if(val > 0){
        console.log(`Credit ${val} at index pos ${index} and array is ${arr}`);
    } else if(val < 0) {
        console.log(`Debit ${val} at index pos ${index} and array is ${arr}`);
    }

 })
 */
/*
const debit = [] ;
const credit = [] ;
 transactions.forEach((val, index)=> {
    if(val > 0){
        credit.push(val);
         console.log(`Credit ${val} at index pos ${index}`);
    } else if(val < 0) {
        debit.push(val);
         console.log(`Debit ${val} at index pos ${index} `);
    }
 })
 */

// console.log(debit);
// console.log(credit);

/*
 const output = transactions.forEach((val, index)=> {
    if(val > 0){       
         return `Credit ${val} at index pos ${index}`;
    } else if(val < 0) {
       
         return `Debit ${val} at index pos ${index} `;
    }
 })


 console.log(output);
 */
 //output


/*
function calcTransaction(){
   for(const val of transactions){
    if(val > 0 ){
        console.log(`Credit ${val}`);
    }else if(val < 0 ){
        console.log(`Debit ${val}`);
    } 
} 
}
calcTransaction();
*/



/*
//function defintion
function f1( a, f2  ){
    
    //calling f2 function
    f2(a);
    f2(a);
}


const function2 = function (a) {
    console.log(a+10);
}

f1(5, );
*/







//calling a function
//f1(5);

/*
transactions.forEach(function calcTransaction(){
    for(const val of transactions){
        if(val > 0 ){
            console.log(`Credit ${val}`);
        }else if(val < 0 ){
            console.log(`Debit ${val}`);
        } 
    }
})  {

}
*/

//transactions.forEach()

//----MAP-------------------
/*
const output = transactions.map((val, index)=> {
    if(val > 0){       
         return `Credit ${val} at index pos ${index}`;
    } else if(val < 0) {
       
         return `Debit ${val} at index pos ${index} `;
    }
 })

 console.log(output);
 */

 /*
const num = [1,2,3,4,5];

const multipleOf5 = num.map((val)=> val*5);
console.log(multipleOf5);

*/
/*
function extractfaces(face) {
    if (face === "😊"){
        return face;
        }
}


const faces = ["😒","😊","😒","😊" ]

const smilingfaces = faces.filter((val, index, arr)=> { 
    return extractfaces(val);
})
/*
const smilingfaces = faces.filter((val, index, arr)=> { 
    if (val === "😊"){
    return val;
    }
})

console.log(smilingfaces);
*/


//

//write me a program to print me a accumative sum
//output : as a single value, not a array

/*
let sum =1;
values.forEach((val)=> {
    sum = sum*val;
})

console.log(`total multiply is ${sum}`);
*/

//it runs len-1 times  : 6-1 : 5 times
const values = [4, -9, 5, 3, -25, 90];
//const inititalSum = 0;
/*
const output = values.reduce((pv, cv, ci, arr) => {
    console.log(`previous value is ${pv}, cv is ${cv}, ci is ${ci} & full array is: ${arr}`);
    return pv*=cv;
})
*/

/*
let sum =0;
const output = values.reduce((pv, cv, ci, arr),sum => {
   // console.log(`previous value is ${pv}, cv is ${cv}, ci is ${ci} & full array is: ${arr}`);
     pv+=cv;  //pv =-5
     return pv/arr.length;  //-5/6 =0
})


console.log(output)
*/



const fullName = "Akhil Kumar Jain"  // akj

/*
Akhil  akhil a
Kumar  kumar k
Jain   jain j

["a", "k", "j"]
*/

const output = fullName.split(" ").map((val)=> val.toLowerCase().at(0)).join("");
console.log(output);