"use strict";
//object and class
var person = /** @class */ (function () {
    function person() {
        //alert('constructor called')
        this.name = 'abhishek';
        this.address = 'pune';
    }
    //getName
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (_name) {
        this.name = _name;
    };
    return person;
}());
var p1 = new person();
p1.setName('raj');
var mname = p1.getName();
console.log(mname);
var p2 = new person();
p2.setName('ram');
var myname = p2.getName();
console.log(myname);
//# sourceMappingURL=myclass.js.map