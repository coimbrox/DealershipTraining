"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    //construtor
    function Car(model, numberOfDoors) {
        this.speed = 0;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    // create methods whit functions
    Car.prototype.accelerate = function () {
        this.speed = this.speed + 10;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
    };
    Car.prototype.currentSpeed = function () {
        return this.speed;
    };
    return Car;
}());
exports.Car = Car;
