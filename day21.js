//synchronnous operation:


//t1
let a = 5;

console.log(`value of a is: ${a}`);
let b = 10;

const f1 =  () => {console.log("Executed the code after the timeout only")};


function login(a){

    setTimeout(a, 2000);
    
} 

login(f1); //f1: sync callback function

setTimeout(f1,1);  //f1 : async callback function

//async operation
//function category, 
//cb: async callback function
//problem when dealing with these callback function
//promises: to handle async operations.






const res = fetch("https://reqres.in/api/users?page=2");
console.log(res);

//firing a api call
//it will take 30 mins to get the response.

console.log(`value of b is: ${b}`);
let c = a+b;

console.log(`value of c is: ${c}`);





//single threaded language
//synchronous way

