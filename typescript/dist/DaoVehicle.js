"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoVehicle = void 0;
var DaoVehicle = /** @class */ (function () {
    function DaoVehicle() {
        this.tableName = 'tb_dealership';
    }
    DaoVehicle.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DaoVehicle.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    DaoVehicle.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return new Vehicle('', []);
    };
    DaoVehicle.prototype.select = function (id) {
        console.log('lógica de select');
        return new Vehicle('', []);
    };
    DaoVehicle.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [new Vehicle('', [])];
    };
    return DaoVehicle;
}());
exports.DaoVehicle = DaoVehicle;
