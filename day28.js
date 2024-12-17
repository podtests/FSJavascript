
//constructor 

const Person = function(firstName) {
    this.firstName = firstName;                      
}

Person.prototype.calcAge = function(birthYear){
    return 2024 - birthYear;
}

Person.gender = 'M';

const p1 = new Person("Akhil");


//console.log(p1.calcAge(1990));

console.log(Person);