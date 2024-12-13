//this keyword


//how to create classes.
//how to crate instance of the class : object of the class
//craeting instance variables
//creating methods
//creating local variables
//Creating contructor
//Constructor overloading not allowed
//there is no protected thing in javascript
//to make private variables & methods: put # before them & access those variabels using #
//[private variable are like illusions]?  
//static variables
//in static methods, can we acces non static variables?


class Employee {
    //instance variable
    firstName;  //these are now private
    lastName;    

    static middlename; 
    //class variables : static variables

    //Constructor:  //you can set values to your instance variables
    constructor(firstName, lastName) {    
        this.firstName = firstName;     
        this.lastName = lastName;         
    }


    /*in a static method:
        -> access & set the static variables


    */
    static printSalary() {
        Employee.middlename = "kumar"
        console.log(Employee.middlename);
        this.firstName = "Akhil";
        console.log(this.firstName);  //non static
        console.log(this.generateFullName());  //non static
        Employee.printGarbage();
    }


    static printGarbage(){
        console.log("Print Javascript Garbage!");
    }

    //methods
    #setFirstName(firstName) {        
     this.firstName = firstName;

    }
    getFirstName(){
        return this.firstName;
    }

    generateFullName() {
        //local variable
        fullName = `${this.firstName} surname`
        return fullName;
    }
}


Employee.printSalary();


/*
const emp1 = new Employee("Akhil", "jain");

//using emp1: not settng value for middlename

Employee.middlename = "kumar";
//emp1.middlename = "kumar";

console.log(emp1.middlename);


const emp2 = new Employee();
console.log(emp2.middlename);

//console.log(emp1);
//console.log(emp2);
*/


/*
const Chethan = new Employee("Chethan");
const anant = new Employee("Anant");
console.log(Chethan.getFirstName());


Chethan.firstName = "Akhil";
console.log(Chethan.firstName);
console.log(Chethan.getFirstName());


//console.log(anant.middleName);

console.log(anant);
*/
/*
tejashwaree.setFirstName("tejashwaree");
console.log(tejashwaree.getFirstName());

const shailesh = new Employee();
console.log(shailesh.firstName);
*/
