"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DaoDealership_1 = require("./DaoDealership");
var Dealership_1 = __importDefault(require("./Class/Dealership"));
var DaoPerson_1 = require("./DaoPerson");
var Person_1 = __importDefault(require("./Class/Person"));
var dao = new DaoDealership_1.DaoDealership();
var dealership = new Dealership_1.default('', []);
dao.insert(dealership);
var dao2 = new DaoPerson_1.DaoPerson();
var person = new Person_1.default('', '');
dao2.update(person);
