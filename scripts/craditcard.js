"use strict";
var Hdfc = /** @class */ (function () {
    function Hdfc() {
    }
    Hdfc.prototype.mastercard = function () {
        alert('hdfc master card');
        console.log('master card of hdfc');
        return '';
    };
    return Hdfc;
}());
var IciciBank = /** @class */ (function () {
    function IciciBank() {
    }
    IciciBank.prototype.mastercard = function () {
        alert('Icici master card');
        return '';
    };
    return IciciBank;
}());
var h1 = new Hdfc();
h1.mastercard();
var i1 = new IciciBank();
i1.mastercard();
//# sourceMappingURL=craditcard.js.map