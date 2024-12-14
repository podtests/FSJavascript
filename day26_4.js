/*
a = 9;
global.fetch("https://google.com").then((res)=> console.log(res));
console.log(global.a);
*/

//this keyword:

a =9;



//arrow functions: don't get their own this keyword,
//But if you still access, they will consume the this keyword from its lexical scope
const add =  ()=>  {
    console.log(this);

    //
}


const employee = {
    name: "Akhil jain",
    printName: function () {
        console.log(this);
    }
}

//employee.printName();


class Employee{
    firstName;
    age = 56;
    constructor(age) {
        this.age = age;
        console.log(this);
    }
}

const emp1 = new Employee(76);
const emp2 = new Employee(86);

//add();


