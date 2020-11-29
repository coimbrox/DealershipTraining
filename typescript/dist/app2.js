"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./Class/Person"));
var Car_1 = __importDefault(require("./Class/Car"));
var Dealership_1 = __importDefault(require("./Class/Dealership"));
/* --- Create Cars ---*/
var car1 = new Car_1.default('Corsa', 4);
var car2 = new Car_1.default('Celta', 4);
var car3 = new Car_1.default('Uno', 2);
/* --- Create Car List From Dealership--- */
// poderia ser passado Array<Car> = [car1,car2,car3]
var CarList = [
    car1,
    car2,
    car3
];
// atribuir lista de carros a concessionária 
var dealership = new Dealership_1.default('Mussurunga 2', CarList);
/* -- show car list --*/
// console.log(dealership.ShowCarList())
/** buy a car */
var client = new Person_1.default('Volca', 'Corsa');
dealership.ShowCarList().map(function (car) {
    if (car['model'] == client.SayFavoriteCar()) {
        // if true - buy car
        client.BuyCar(car);
    }
});
console.log(client.SayCarHave());
