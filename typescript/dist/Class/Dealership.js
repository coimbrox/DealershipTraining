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
    Dealership.prototype.openingHours = function () {
        return 'Segunda a Sexta das 08:00 as 18:00 e aos Sábados das 08:00 as 12:00';
    };
    return Dealership;
}());
exports.default = Dealership;
