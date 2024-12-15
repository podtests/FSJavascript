
/*
//Anaonymous function
const Person = function(firstName) {

    
}

const p1 = Person("Akhil");  //variable: datatype of this variable depends on the returned value;
console.log(p1);
*/


//Constructor function
const Person = function(firstName) {
        this.firstName = firstName;                    
}


Person.prototype.calcAge = function(birthYear){
    return 2024 - birthYear;
}

Person.prototype.lastName = "Jain";


const p2 = new Person("Akhil");  //p2 automatically becomes an object

console.log(Person.prototype);

console.log(p2.__proto__);
console.log(p2.__proto__.__proto__);


//p2 : {firstname: "Akhil"}

//console.log(Person.prototype);
//console.log(p2.calcAge2(1990));



//console.log(p2);
/*
const p3 = new Person("Kiran"); 
console.log(p2);
console.log(p3);
*/
/*
const p4 = Person("Kiran", "patil");
console.log(global.firstName);
console.log(p4)
*/