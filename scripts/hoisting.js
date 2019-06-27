"use strict";
//hoisting
function greetPerson(name) {
    if (name == 'abhishek') {
        greet = "hello Abhishek";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
    var greet;
}
greetPerson("ravi");
//# sourceMappingURL=hoisting.js.map