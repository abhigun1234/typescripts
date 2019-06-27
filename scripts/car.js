"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car() {
        alert('car constructor');
    }
    car.prototype.run = function () {
        alert('car running');
    };
    return car;
}());
var audi = /** @class */ (function (_super) {
    __extends(audi, _super);
    function audi() {
        return _super.call(this) || this;
    }
    return audi;
}(car));
var au = new audi();
au.run();
//# sourceMappingURL=car.js.map