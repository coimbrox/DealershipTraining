"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoDealership = void 0;
var Dealership_1 = __importDefault(require("./Class/Dealership"));
var DaoDealership = /** @class */ (function () {
    function DaoDealership() {
        this.tableName = 'tb_dealership';
    }
    DaoDealership.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DaoDealership.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    DaoDealership.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return new Dealership_1.default('', []);
    };
    DaoDealership.prototype.select = function (id) {
        console.log('lógica de select');
        return new Dealership_1.default('', []);
    };
    DaoDealership.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [new Dealership_1.default('', [])];
    };
    return DaoDealership;
}());
exports.DaoDealership = DaoDealership;
