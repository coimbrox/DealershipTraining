"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    // create methods whit functions
    Vehicle.prototype.accelerate = function () {
        this.speed = this.speed + 10;
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    Vehicle.prototype.currentSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
exports.default = Vehicle;
