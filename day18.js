
/*const d = [10, 20, 30];
let b = 28;
function f1() {
    var a = 20;

    function f2() {
        b = 10;
        d.push(40);
        console.log(a);
        console.log(b);
        console.log(d);
    }

    f2();
}

f1();
console.log(b);
console.log(d);
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
c();

var d = f2();
