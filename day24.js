//const url = "http://127.0.0.1:8081"

/*
fetch(url)  //Promise:   Pending --> settled[Fulfilled, rejected]
.then()   //resolved
.catch()   //rejected
*/
/*
const url = "https://reqres.in/api/users/2"
const res2 = fetch(url);  //promise: pending  //then cluse , async -await
console.log(res2);
*/
/*
fetch(url)
.then((res)=>{console.log(res)})
.catch((res)=>{console.log(res);})
.finally(() =>{console.log("operation completed")})
*/


//convert a normal function into a async function
/*
function getId() {
    return { cartId: 'c_c100' }
}
/*
//craete a promise
const getCartId = function (){
   return new Promise((resolved, rejected)=>{

                        if(Math.random() > 0.5){
                            setTimeout(
                                ()=>{resolved({ cartId: 'c_c100' })}, 
                                    1000)
                        }else {
                            setTimeout(
                                ()=>{rejected("error occured")}, 
                                1000)
                        }                    
                    }
                )
}  


getCartId()
.then((res)=>{console.log(`promise got resolved: ${res.cartId}`)})
.catch((res)=> {console.log(`promise got rejected: ${res}`)})
.finally(()=>{console.log("Finally executed")})
*/

/*
const getCartId =  function (){
    return new Promise((resolved, rejected)=>{
 
                         if(Math.random() > 0.5){
                             setTimeout(
                                 ()=>{resolved({ cartId: 'c_c100' })}, 
                                     1000)
                         }else {
                             setTimeout(
                                 ()=>{rejected("error occured")}, 
                                 1000)
                         }                    
                     }
                 )
 } 

async function getOutput() {
    try {
        const res = await getCartId();
        console.log(`response is: ${res.cartId}`);
    }
    catch(err){
        console.log(`error is: ${err}`);
    }
   
}

getOutput();
*/



//Javascript: Destructuring  & spread operator  : Arrays & Objects

const names = ["Akhil", "Anant", "Harsh", "Hasan"];

/*
const a = names[0]
const b = names[1]
const c = names[2]
const d = names[3]
*/

const [a, b, c, d, e] = ["Akhil", "Anant", "Harsh", "Hasan"]
//console.log(e);


const employee = {
            name: "Anant",
            age: 90,
            city: "Ahmedabad",
            gender: "M"
        }

//const {city, name} = employee;
//console.log(city);

function f1({name1, age1}) {
    console.log(name1);
    console.log(age1);
}

//f1(employee);

function f2([a,b]) {
    console.log(a);
    console.log(b);

}

//f2([3,4,5,6]);

//spread operator   ...  //it disintegrates
const num1 = [1,2,3,4];

const num2 = [5,6,7,8];  
/*

5
6
7
8

*/

const num3 = [...num1, ...num2];

// [1,2,3,4,5,6,7,8 ]

//console.log(num3);


const employee1 = {
    name: "Anant",
    age: 90,
    city: "Ahmedabad",
    gender: "M"
}

const man = {
    bankname: "PNB",
    comapanyName: "xyz",
    ...employee1
}

console.log(man);