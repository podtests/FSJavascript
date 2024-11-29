


function f1() {

    //a = 90;  //implicit global
    //global.a = 90; //explicit global
    //var a =90;  //function scoped
     //block

   

    console.log(`function scope: ${a}`);

    if("akhil"==="akhil"){
        const a = 90;
        console.log(`block scope: ${a}`);
    }

}

f1();

console.log(`global scope: ${a}`);
