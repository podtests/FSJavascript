/*
var b = 28;
function f1() {
    var a = 20;

    function f2() {
        console.log(a);
        console.log(b);
    }

    f2();
}

f1();
*/



var b = 28;
function f1() {
    var a = 20;
    function f2() {
        console.log(a);
        console.log(b);
    }
    return f2;
}
var c = f1();
//var c = function {
      /*  console.log(a); //undefined, not defined
        console.log(b);
    }
    */

c();