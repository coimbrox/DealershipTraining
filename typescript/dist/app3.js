"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Class/Car"));
var Bike_1 = __importDefault(require("./Class/Bike"));
var car = new Car_1.default('Celta', 4);
var bike = new Bike_1.default();
console.log(bike);
console.log(car);
