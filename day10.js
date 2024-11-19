//return an function
/*
function f2() {    
    return function f3(a,b) {
        return a+b;
    } 
}

const l1 = function (a,b) {
    return a+b;
} 

const val = l1(2,3);



console.log(typeof val);
//console.log(l1(2,3));
*/

/*
const firstName = "Akhil Jain";
const extractedVal = firstName.slice(-3, 0);  // -3, -2 , -1?
console.log(extractedVal);
*/

/*
const sentence = "My name is Akhil Jain, I am a software engineer"
const output = sentence.split(",");
console.log(output);
*/

//Arrays
const arr = [0,1,2,3,4,15,6];
//console.log(arr.at(-2))

//const arr2 = arr.slice(4,6)  //create a new array with the defined values in the mentioned range: creating copy
//console.log(arr);
//console.log(arr2);
//it doesn't mutate the original array

//splice
/*
const arr3 = arr.splice(4)  //deleting the values from original array & maintain the value of deleted items 
console.log(arr);
console.log(arr3);

console.log(arr3.length);
*/

const arr2 = arr.reverse(); //mutates
console.log(arr2);
console.log(arr);


