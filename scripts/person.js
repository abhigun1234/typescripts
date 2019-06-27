"use strict";
var Person = /** @class */ (function () {
    function Person(person_id, person_name) {
        this.p_id = person_id;
        this.p_name = person_name;
        alert(this.p_id);
        alert(this.p_name);
    }
    Person.prototype.getName = function () {
        return this.p_name;
    };
    Person.prototype.setName = function (name) {
        this.p_name = name;
    };
    Person.prototype.display = function () {
        console.log("hello person");
        alert('hello');
    };
    return Person;
}());
var p = new Person("123", "abhishek");
// p.display()
// p.setName("abhishek")
// var pname=p.getName()
// alert(pname)
//# sourceMappingURL=person.js.map