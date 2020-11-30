"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoPerson = void 0;
var Person_1 = __importDefault(require("./Class/Person"));
var DaoPerson = /** @class */ (function () {
    function DaoPerson() {
        this.tableName = 'tb_person';
    }
    DaoPerson.prototype.insert = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DaoPerson.prototype.update = function (object) {
        console.log('lógica de update');
        return true;
    };
    DaoPerson.prototype.remove = function (id) {
        console.log('lógica de remove/ deleete');
        return new Person_1.default('', '');
    };
    DaoPerson.prototype.select = function (id) {
        console.log('lógica de select');
        return new Person_1.default('', '');
    };
    DaoPerson.prototype.selctAll = function () {
        console.log('lógica de get All');
        return [new Person_1.default('', '')];
    };
    return DaoPerson;
}());
exports.DaoPerson = DaoPerson;
