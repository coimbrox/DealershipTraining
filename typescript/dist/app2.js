"use strict";
// create class Car
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
// instanciar obj
// let car1 = new Car('Veloster', 3)
// console.log(car1)
// //execute method
// car1.accelerate()
// console.log(car1)
// create class dealership (concessionária)
var Dealership = /** @class */ (function () {
    // constructor para instanciar objeto 
    function Dealership(Address) {
        this.Address = Address;
    }
    Dealership.prototype.ProvideAddress = function () {
        return this.Address;
    };
    Dealership.prototype.ShowCarList = function () {
        return this.CarList;
    };
    return Dealership;
}());
var dealership = new Dealership("Rua Desembargador Wilde de Lima");
console.log(dealership);
