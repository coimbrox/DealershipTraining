"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoBike = void 0;
var Bike_1 = __importDefault(require("./Class/Bike"));
var DaoBike = /** @class */ (function () {
    function DaoBike() {
        this.tableName = 'tb_bike';
    }
    DaoBike.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DaoBike.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    DaoBike.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return new Bike_1.default();
    };
    DaoBike.prototype.select = function (id) {
        console.log('lógica de select');
        return new Bike_1.default();
    };
    DaoBike.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [new Bike_1.default()];
    };
    return DaoBike;
}());
exports.DaoBike = DaoBike;
