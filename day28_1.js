class Person {    
    constructor(firstName){
        this.firstName = firstName;                        
    }

    //prototype
    calcAge(birthYear) {
        return 2024 - birthYear;
    }

    static gender = 'M';
}

const p1 = new Person("Akhil");  // {firstname: "Akhil"}
//console.log(p1.calcAge(1990));

console.log(Person);



