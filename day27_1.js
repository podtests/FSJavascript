class Person {

    
    constructor(firstName){
        this.firstName = firstName;                        
    }

    calcAge(birthYear) {
        return 2024 - birthYear;
    }


}

const p1 = new Person("Akhil");  // {firstname: "Akhil"}
console.log(p1.calcAge(1990));



