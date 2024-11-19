/*
const arr1 = [1, 89, 65, 45];
const arr2 = [90, 34, 23];
const arr3 = [2, 8, 68];

const arr4 = arr1.concat(arr2, arr3).slice(1,3);

const str = "Akhil Jain";


str.split(" ").at(0)

console.log(str.split(" ").at(0));
*/

/*
console.log(arr4);
console.log(arr1);
console.log(arr2);
*/


//const guestList = ["akhil", "anant", "chethan" ,"shailesh"];
//const nums = [9,8, 5, 0];
//console.log(guestList.includes("akhil", 1));
//console.log(guestList.indexOf("akhil"));
//console.log(guestList.lastIndexOf("akhil",1));

/*
const removedItem = guestList.pop();
console.log(removedItem);
console.log(guestList);
*/

/*
const len = guestList.push("harika");
console.log(len);
console.log(guestList);
*/

/*
const guestList = ["akhil", "anant", "chethan" ,"shailesh"];

/*
const removedItem = guestList.shift();  //remove itemfrom beg
console.log(removedItem);
console.log(guestList);

const newlen = guestList.unshift("velan");  //add item at beg
console.log(guestList);
console.log(newlen);
*/

////////////
const transactions = [56, 78, -89, 90, -32];  //+ added, -ve removed the amount

//
/*
function calc(amt){
    if(amt > 0){
        console.log(`Amount Credited of value ${amt}`);
    }else if(amt <0) {
        console.log(`Amount Debited of value ${amt}`);
    }  
}
transactions.forEach((a)=> calc(a));
*/

/*
transactions.forEach(function calc(amt){
    if(amt > 0){
        console.log(`Amount Credited of value ${amt}`);
    }else if(amt <0) {
        console.log(`Amount Debited of value ${amt}`);
    }  
});
*/

/*
transactions.forEach(function (amt){
    if(amt > 0){
        console.log(`Amount Credited of value ${amt}`);
    }else if(amt <0) {
        console.log(`Amount Debited of value ${amt}`);
    }  
});
*/

//const transactions = [56, 78, -89, 90, -32]; 

//a = value = 56,
//b = indexpos = 0
//c = entire array = [56, 78, -89, 90, -32]
/*
transactions.forEach((a,b,c)=> {
    if(a > 0){
        console.log(`Amount Credited of value ${a} , index pos is : ${b}, original array is ${c}`);
    }else if(a <0) {
        console.log(`Amount Debited of value ${a}  , index pos is : ${b}, original array is ${c}`);
    }  
});
*/

transactions.forEach((a, b)=> {
    if(a > 0){
        console.log(`Amount Credited of value ${a}, index pos is : ${b} `);
        
    }else if(a <0) {
        console.log(`Amount Debited of value ${a}, index pos is : ${b}  `);
    }  
});





for(const amt of transactions){
    if(amt > 0){
        console.log(`Amount Credited of value ${amt}`);
        break;
    }else if(amt <0) {
        console.log(`Amount Debited of value ${amt}`);
    } 
}











