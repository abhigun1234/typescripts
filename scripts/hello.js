"use strict";
console.log("hello");
var Constants;
(function (Constants) {
    Constants[Constants["one"] = 0] = "one";
    Constants[Constants["two"] = 1] = "two";
    Constants[Constants["three"] = 2] = "three";
    Constants[Constants["four"] = 3] = "four";
})(Constants || (Constants = {}));
console.log(Constants.two);
var sum = function (x, y) { return x + y; };
var result = sum(3, 4); //returns 30
alert(result);
function add(x, y) {
    return x + y;
}
add(2, 3);
//# sourceMappingURL=hello.js.map