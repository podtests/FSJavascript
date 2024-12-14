const employee = {

    name: "Akhil Jain",
    calcage: function(birthYear) {
            return 2024 - birthYear;
    }

}

const age = employee.calcage(1990);

employee.gender = 'M'


console.log(age);
console.log(employee);
