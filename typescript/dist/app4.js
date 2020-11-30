"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
// import { DaoDealership } from './DaoDealership'
var Dealership_1 = __importDefault(require("./Class/Dealership"));
// import { DaoPerson } from './DaoPerson'
var Person_1 = __importDefault(require("./Class/Person"));
// import { DaoCar } from './DaoCar'
var Car_1 = __importDefault(require("./Class/Car"));
// import { DaoBike } from './DaoBike'
var Bike_1 = __importDefault(require("./Class/Bike"));
//Dealership
// let dao: DaoDealership = new DaoDealership()
var dealership = new Dealership_1.default('', []);
// Person
// let dao2: DaoPerson = new DaoPerson()
var person = new Person_1.default('', '');
// Car
// let dao3: DaoCar = new DaoCar()
var car = new Car_1.default('', 4);
// Bike
// let dao4: DaoBike = new DaoBike()
var bike = new Bike_1.default();
var dao5 = new Dao_1.Dao();
var dao6 = new Dao_1.Dao();
dao5.insert(Dealership_1.default);
dao6.remove(5);
