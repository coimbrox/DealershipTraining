"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealership = void 0;
var Dealership = /** @class */ (function () {
    // constructor para instanciar objeto 
    function Dealership(Address, carList) {
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
exports.Dealership = Dealership;
