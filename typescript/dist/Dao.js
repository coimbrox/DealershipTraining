"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.tableName = 'tb_person';
    }
    Dao.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    Dao.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return Object();
    };
    Dao.prototype.select = function (id) {
        console.log('lógica de select');
        return Object();
    };
    Dao.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
