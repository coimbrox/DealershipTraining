"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoCar = void 0;
var Car_1 = __importDefault(require("./Class/Car"));
var DaoCar = /** @class */ (function () {
    function DaoCar() {
        this.tableName = 'tb_car';
    }
    DaoCar.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DaoCar.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    DaoCar.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return new Car_1.default('', 4);
    };
    DaoCar.prototype.select = function (id) {
        console.log('lógica de select');
        return new Car_1.default('', 4);
    };
    DaoCar.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [new Car_1.default('', 4)];
    };
    return DaoCar;
}());
exports.DaoCar = DaoCar;
