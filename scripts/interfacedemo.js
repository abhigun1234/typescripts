"use strict";
var Icici = /** @class */ (function () {
    function Icici() {
    }
    Icici.prototype.payment = function () {
        alert('Icici master card');
        return "Icici master card";
    };
    return Icici;
}());
// class Hdfc implements Card
// {
//     payment()
//     {
//         alert("hdfc master card")
//     }
// }
var I1 = new Icici();
I1.payment();
//# sourceMappingURL=interfacedemo.js.map