"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // create constructor
    function Person(Name, FavoriteCar) {
        this.Name = Name;
        this.FavoriteCar = FavoriteCar;
    }
    // create methods
    Person.prototype.SayName = function () {
        return this.Name;
    };
    Person.prototype.SayFavoriteCar = function () {
        return this.FavoriteCar;
    };
    Person.prototype.BuyCar = function (Car) {
        this.Car = Car;
    };
    Person.prototype.SayCarHave = function () {
        return this.Car;
    };
    return Person;
}());
exports.Person = Person;
