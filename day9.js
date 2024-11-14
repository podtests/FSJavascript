const myName = `Akhil Jain`;
/*
windows + .

const myName1 = 'Akhil Jain';
const myName2 = "Akhil Jain";
const myName3 = new String("Akhil Jain");
*/

//console.log(myName.length);
/*
console.log(`output of at is: ${myName.at(-11)}`);
console.log(`output of charAt is: ${myName.charAt(-1)}`);
*/
//at: ES2022 [newer]
//charAt: ES1 [older]


//
//console.log(`output is: ${myName.charCodeAt(0)}`);  //UTF-8 :  0 - 65000
//console.log(`output2 is: ${myName.codePointAt(0)}`);  //UTF-16: 0 - 1.14lakh


//concatenation : str1 + str2
/*
let FN = 'Akhil';
let LN = 'Jain';

let names = ["Gunjesh", "Anant", "Harika"];

let FullName = FN + LN;
FN = FN.concat(names);
//console.log(FN.concat(LN));  //Akhil Jain
console.log(FN);  //Akhil
*/

//searching operation:  includes , startsWith, endsWith
/*
let statement = "My name is Akhil Jain, I teach at PodTest";
let isExist = statement.includes("");
let isExist2 = statement.startsWith("My name is");
let isExist3 = statement.endsWith("PodTest");
console.log(`value exist in string: ${isExist}`);
console.log(`value exist in string: ${isExist2}`);
console.log(`value exist in string: ${isExist3}`);
*/

//getting index position based on a substring
/*
let statement = "My name is Akhil Jain, I Akhil teach at Akhil";
console.log(`output is:  ${statement.indexOf("Javascript",12)}`); //search starts from 12 index

//L ---->   R

console.log(`output is:  ${statement.lastIndexOf("Javascript")}`); //starts from end to serach
*/
// L  <-----------  R

  // a,b,c
  // a,b,c,d
/*
  let statement = "My name is Akhil Jain, I Akhil teach at Akhil";

  let fisrtName = "    Akhil      "
  let lastName = "jain"

  let punishStatement = "I will complete my homework from tomorrow!"

  //common operation

  //
  //console.log(statement.toLowerCase());
  //console.log(statement.toUpperCase());
  //console.log(`${fisrtName.trim()} ${lastName}`);

  console.log(punishStatement.repeat(100));
*/

//update operatyions
  
/*let statement = "My name is Akhil Jain, I  teach at Akhil Jain";

  console.log(statement.replaceAll("Akhil Jain", "Gunjesh"));
  console.log(statement);
*/

//
let statement = "My name is Akhil Jain, I  teach at PodTest";

let indexpos = statement.indexOf("Akhil Jain"); //11
//console.log(statement.length)
//console.log(statement.at(-42));
//console.log(statement.at(0));

//console.log(indexpos);
console.log(statement.substring(indexpos,-10));   ///o-based [included],  [excluded]


//split 
//slice





