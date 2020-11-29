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
// create class dealership (concessionária)
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
//create class person
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
    Person.prototype.BuyCar = function (car) {
        this.Car = Car;
    };
    Person.prototype.SayCarHave = function () {
        return this.Car;
    };
    return Person;
}());
/* --- Create Cars ---*/
var car1 = new Car('Corsa', 4);
var car2 = new Car('Celta', 4);
var car3 = new Car('Uno', 2);
/* --- Create Car List From Dealership--- */
// poderia ser passado Array<Car> = [car1,car2,car3]
var CarList = [
    car1,
    car2,
    car3
];
// atribuir lista de carros a concessionária 
var dealership = new Dealership('Mussurunga 2', CarList);
/* -- show car list --*/
console.log(dealership.ShowCarList());
