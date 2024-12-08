
/*
const marks = [10,20,30];


marks.forEach(()=> {
    console.log("I am forEach");
})



 const   salaryTestData = [
    {role: "test", 
        seniorty: "manager",
        name: "sen",
        country: "IND",
        currency: "INR"
        },

    {role: "test1", 
        seniorty: "manager",
        name: "sen",
        country: "IND",
        currency: "INR"}, 

    {role: "test2", 
        seniorty: "manager",
        name: "sen",
        country: "IND",
        currency: "INR"}       
]


salaryTestData.forEach((val, index, arr) => {
    console.log(`index ${index} : val is: ${val.seniorty} and entire array is ${arr[index].name}`)});

    */


//Async operations:

/*
console.log("begin");

setTimeout(() => {console.log("SetTimeOut5sec Completed!")}, 5000);

setTimeout(() => {console.log("SetTimeOut1sec Completed!")}, 1000);

console.log("end");
*/


//const res = fetch("https://reqres.in/api/users?page=2");


//can we craete our own promises?

console.log("Begin")
/*
function addsyncbehaviour() {
    return "PodTest";
}
*/
function addAsyncbehaviour() {
    return new Promise((resolve, reject)=> {    
       setTimeout(()=> {resolve("PodTest")}, 5000)                        
    }) 
}
const res = addAsyncbehaviour();
console.log(res);
console.log("End")


res.then((r1)=> {console.log(r1)})
