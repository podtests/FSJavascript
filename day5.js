/*
let age = -7;

if(age >0 && age <=18) {
    console.log("Teen")
} else if(age >18 && age <60) {
    console.log("Adult")
} else if(age <0 ){
    console.log("Invlaid input provided by User!")
}
else {
    console.log("Senior Citizen")
}
*/

/*
let day = "Z";

//print the fill day name based on the input received.
switch (day) {
    default: {
        console.log("Invalid input!");
        //break;
    }
    case "M": {
        console.log("Monday");
        //break;
    } 
    case "Tu": {
        console.log("Tuesday");
        //break;
    }
   
    case "W": {
        console.log("Wednesday");
        //break;
    }
    case "Th": {
        console.log("Thursday");
        //break;
    }
   
    
}

*/
/*
let age = 18;
let ageGroup;

//age<=18? console.log("teen"): console.log("adult");
ageGroup = age<=18? "teen": "adult";

console.log(ageGroup);
*/

/*
for(let i =0; i< 5; i++) {
    console.log("I will not repeat the mistake");
}
*/
/*
let j =0;
while(j <5) {
    console.log("I will not repeat the mistake");
    j++;
}

*/


let marks= [67, 78, 45, 52, 10];
         //  0   1  2   3   4
         //length = 5

//console.log(marks);
/*
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
*/
//classic for loop
/*
for(let i =0; i<marks.length; i++){
    console.log(marks[i]);
}
*/

// for of: works on the value directly, doesnot work on the index pos
for(const i of  [67, 78, 45, 52, 10] ) {
      
    console.log(i);
}



