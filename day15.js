/*

const guestList = ["AJ", "MK", "TJ"];

console.log(`pre: ${guestList} `);  //"AJ", "MK", "TJ"

guestList.pop();
guestList.pop();
//guestList.pop();


console.log(`post: ${guestList}`);  //"AJ", "MK", "TJ", "IK"

let marks = 97; 
marks++;


let name = "Akhil";

//guestList = ["Akhil"];



//stack memory                                                      //Heaop Memory
//address  ||  variable name  || value                              // Address || Value
// 0001    || guestList      || H0001                               // H0001   ||  ["AJ", "MK", "TJ", "IK"]
//                                                                  // H0002   ||  ["Akhil"]


console.log(`time1 is: ${new Date().getMinutes()} and mins is: ${new Date().getSeconds()}`);
setTimeout(
    ()=> {console.log(`time3 getting loaded is: ${new Date().getMinutes()} and mins is: ${new Date().getSeconds()}`);}
, 5000);
console.log(`time2 is: ${new Date().getMinutes()} and mins is: ${new Date().getSeconds()}`);
*/


/*
time1 is: 8 and mins is: 54
time3 getting loaded is: 8 and mins is: 59
time2 is: 8 and mins is: 54
*/

const fN = "Akhil";  //PDT
const firstName = new String("Akhil");  //Object

const marks = true;


//JS --> AutoBoxing
//convert PDT to Object
//PDT String --> Obecct String;


console.log(firstName);