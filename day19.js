//common JS Module:

/*
console.log("I am in module 1");

exports.fisrtName = "Akhil Jain";
exports.login = function () {
    console.log("Login to the application!");
}

marks = [34, 78, 98];

exports.age = 80;

exports.addMarks = function(subjectMark) {
    marks.push(subjectMark);
}

const printMarks = function() {
    console.log(marks);
}
printMarks();
*/


// export 1 or multiple items
//module.exports = {login, }
//module.exports = {fisrtName}


//ESModules:
function login() {
    console.log("Login to the application!");
}

const marks = [34, 78, 98];

module.exports = {login , marks}