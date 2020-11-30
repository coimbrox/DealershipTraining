"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DaoDealership_1 = require("./DaoDealership");
var Dealership_1 = __importDefault(require("./Class/Dealership"));
var DaoPerson_1 = require("./DaoPerson");
var Person_1 = __importDefault(require("./Class/Person"));
var DaoCar_1 = require("./DaoCar");
var Car_1 = __importDefault(require("./Class/Car"));
var DaoBike_1 = require("./DaoBike");
var Bike_1 = __importDefault(require("./Class/Bike"));
//Dealership
var dao = new DaoDealership_1.DaoDealership();
var dealership = new Dealership_1.default('', []);
dao.insert(dealership);
// Person
var dao2 = new DaoPerson_1.DaoPerson();
var person = new Person_1.default('', '');
dao2.update(person);
// Car
var dao3 = new DaoCar_1.DaoCar();
var car = new Car_1.default('', 4);
dao2.remove(car);
// Bike
var dao4 = new DaoBike_1.DaoBike();
var bike = new Bike_1.default();
dao2.select(bike);
