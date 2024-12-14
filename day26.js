class Employee {
    #firstName;  //private variable
    lastName;

    static companyName;

    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.lastName = lastName;
    }

    #getFirstName(){ //private
        return this.#firstName;
    }

    getLastName() {  //public
        return this.lastName;
    }


    //within static methods, you can only access static variables
    //cannot access non static variables or methods inside static method.
    static getEmployeeInfo() {
        console.log(Employee.companyName);  //static variable    
        console.log("Hello World!");
    }

}

const emp1 = new Employee("Shailesh", "kumar");
const emp2 = new Employee("Fijula", "surname");


Employee.companyName = "S&P";

emp1.getEmployeeInfo();

//accessing static variables using objects (instance)
//emp1.companyName = "S&P";  //Java : allowed, JS: not allowed
//console.log(emp1);
//console.log(emp2);



/*
emp1.firstName = "Akhil";
console.log(emp1.firstName);
console.log("Hello World!");
*/