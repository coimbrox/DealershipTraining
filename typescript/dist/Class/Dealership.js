"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership = /** @class */ (function () {
    // constructor para instanciar objeto 
    function Dealership(Address, CarList) {
        this.Address = Address;
        this.CarList = CarList;
    }
    Dealership.prototype.ProvideAddress = function () {
        return this.Address;
    };
    Dealership.prototype.ShowCarList = function () {
        return this.CarList;
    };
    return Dealership;
}());
exports.default = Dealership;
