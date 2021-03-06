"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = __importDefault(require("./Vehicle"));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    //construtor
    function Car(model, numberOfDoors) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    return Car;
}(Vehicle_1.default));
exports.default = Car;
