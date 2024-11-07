/*
//comparison operations
let num1 = 5;
let num2 = 5;

let isGreater = num1 >= num2 ; //5<=5
console.log(isGreater);
console.log(typeof isGreater);
*/
//logical operations


//
/*
let gender = 'F';
let age = 19;

if(   !((gender == 'M') || (age == 18)) ){  //   !((false)  || (false))   => !(false)  => true
    console.log("Boy Teenager");
} else {
    console.log("Don't know!");
}
*/

/*
let isValid = 5<7;
console.log(!isValid);  //true

*/

//equality operations
//=  //assignment
//==  //loose
//=== //strict
/*
firstName = "Akhil"; //assignment operation , we assign value to a variable

//==  //equality  compare two things, boolean output: true/false
let num1 = 78  //number
let num2 = "78" //string

let num3 = Number(num2);  //"78" --> 78

//loose comparison //JS will convert datatypes if possible
if(num1 == num2){  //(78 == "78"), (78 == 78), (78 == NaN)  //true //not checking the type, //loosly types  
    console.log("Equal");
}else {
    console.log("Not Equal");
}  //Equal


//strict comparison
if(num1 === num3){
    console.log("Equal");
}else {
    console.log("Not Equal");
}
//Not Equal
*/

/*
//Strings:  "" , ''
let firstName = "Akhil";
//console.log(firstName);

let lastName = 'Jain';

let age = 40;

let city = "Noida";

let profession = "I work in a company in 9 to 6  \n\
and then i teach 7 - 9PM,  \n\
and then spend time with family \n\
"

//console.log("My Name is "+ firstName +" "+ lastName+ ", I live in : " + city+ ", My age is: "+age + "My profession is: "+ profession);

//Template String  `` back tick
let newProfession = `I work in a company in 9 to 6  
and then i teach 7 - 9PM,  
and then spend time with family
`

let mybusiness = `My name is: ${firstName} ${lastName}, I live in: ${city}, my age is : ${age} +  My profession is: ${newProfession}`
console.log(mybusiness);
*/

//Arrays:
//it can store different types of values:  same Data Type[in Java], container
//arrays & list are same?

let subjects = [];

let names = ["Akhil", 78, true, undefined, null, subjects,     , "jain"       ];// index pos: 0 -> 5 , total values = 6
                //0   1     2      3        4      5       6              7      
names[7]= "Jain";

console.log(subjects[0]);













