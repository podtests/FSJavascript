
//
const name = "Akhil";
//convert  this into an array

//[A, k, h, i , l]
const arr = name.split("");
//console.log(arr);


//  
//WebElement we = wd.findElemnt(By.xpath(""));
//[we, we2, we3, we4]
//javascriptExecutor(arguments[0].click(), we, we2, we3, we4)
//Array.arguments[0].

//Array  --> prototype --> at, concat, split, splice, slice
const arr2 = Array.from(name);
//console.log(arr2);

//Normal Object values into an array:
const obj1 = {
    name: "Akhil",
    age: 56
}

const arr3 = Array.from(Object.values(obj1));
//console.log(arr3);




// ["akhil", "anant", 67, 89, true]
//   0,         1,    2    3   4

const obj2 = {
    0: "Akhil",
    1: "anant",
    2: 67,
    3: 89,
    4: true
}

const arr4 = Array.from(Object.keys(obj2));
//console.log(arr4);

//Array- like structure
const obj4 = {   // 0 , 1
    length: 5,         
}

//[ 0, 1, undefined, undefined, undefined ]
//  0              1        2           3       4

//const arr5 = Array.from(obj4);
//const arr5 = Array.from(obj4, (v, k)=> k);
const arr5 = Array.from(obj4, (v, k)=> "Akhil");

const arr56 = Array.from(obj4, (v, k)=> "Akhil");

const arr6 = Array.from(obj4, ()=>  []);
console.log(arr6);





const f3 = ()=> {return "Akhil"};

function f4() {
    return "Akhil";
}

//console.log(f3());