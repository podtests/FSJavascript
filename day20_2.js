const employerDetails = {
    employerName: "PodTest",
    empCount: 1
}

const emp = {
                age: 56,
                name: "Akhil Jain",
                login: function() {
                    console.log("I want to login");
                },
                marks: [34, 67, 78],
                category: undefined,
                employer: employerDetails
            }
//convert js object into JSON output
const empJSON = JSON.stringify(emp)
            
const convertJSONToObject = JSON.parse(`{"age":56,"name":"Akhil Jain","marks":[34,67,78],"employer":{"employerName":"PodTest","empCount":1}}`) ;


//syntax
//objName["keyname"]
//objName.keyname


//console.log(emp["name"]);
/*
console.log(emp.marks);
emp.marks.push(94);
console.log(emp.marks);
emp.login();
*/

//adding a new key to the existing object:
emp.address = "Delhi";
emp.logout = () => {
    console.log("I am loggin out!");
}

//emp.category = "Male";

//console.log(emp);  //JS object
//console.log(empJSON); //JSOn
console.log(convertJSONToObject);