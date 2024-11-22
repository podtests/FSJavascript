const nums = [1,2,3,4,5]
/*
const multiples = nums.forEach(
    (val)=> {
        let multiple = val*5;
         console.log(multiple);
         return multiple;
            }
)
console.log(multiples);
*/
/*
const multiples = nums.map(
    (val)=> {
        let multiple = val*5;
         console.log(multiple);
         return multiple;
            }
)
console.log(multiples);
*/

/*
const transaction = [-10, 90, 89, 67, -100];
const credits = transaction.filter(
    (val) => {
        if(val >0) {return true;}
        else return false;
    }
)

console.log(credits);
console.log(transaction);
*/

//reduce
//const transaction = [-10, 90, 89, 67, -100];
/*
const transaction = [1,2,3,4,5];

const balance = transaction.reduce(
    (pv, cv, index, arr)=> {
            console.log(`pv is ${pv} , cv is ${cv}, index is ${index} and arra is ${arr}`)
            const sum = pv+cv;
            return sum;
        }, 0
)
console.log(balance);
*/

/*
const customernames = ["Akhil kumar jain", "Velan Chaudhary", "Shailesh Kumar Singh", "Tina Munir", "Ashsih Lokhandwala", "Ajay kumar chaudhary"]

const f1 = customernames.map((val)=> {
    if (val.split(" ").length === 3){
        return val;
    }
}).filter((val)=> {
    if(val !== undefined) {
        return val;
    }
}).reduce(
    (pv, val)=> {
            return pv+1;
        }, 0 
)

console.log(f1);
*/

//Sorting
/*
const customernames = ["Velan Chaudhary", "Velan Chaudhary", "Shailesh Kumar Singh", "Tina Munir", "Ashsih Lokhandwala", "Ajay kumar chaudhary"]

//strings
//ascending order A-Z
//customernames.sort().reverse();


// b, a: input sequence  : "Akhil kumar jain", "Velan Chaudhary"
//  a = cv, b = pv


customernames.sort((a, b)=> {
    if(a >= b) {
        return 1;
    }else {
        return -1;
    }
});

//return +ve value :   maintain the order, b, a : "Akhil kumar jain", "Velan Chaudhary"
//return -ve value :  switch the values: a,b: "Velan Chaudhary", 

console.log(customernames);
*/
//numbers sorted


//numbers

const transactions = [5, 89, 45, -2 , 89, 23]

//ascending order
//- 45
//0 48
//transactions.sort(); //ascii values
/*
transactions.sort((a,b)=> {
    if(a >= b) {
        return -1;
    }else {
        return 1;
    }
});
*/


transactions.sort((a,b)=> b -a);


console.log(transactions);


/*
const customernames = ["Velan Chaudhary", "Velan Chaudhary", "Shailesh Kumar Singh", "Tina Munir", "Ashsih Lokhandwala", "Ajay kumar chaudhary"]

customernames.sort();
console.log(customernames);
*/