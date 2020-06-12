"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
//Hier wordt de class Pikachu aangemaakt, Pikachu is altijd een 'Electric' soort en heeft altijd dezelfde weakness en resistance!
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu(name, hitpoints, attacks) {
        var _this = _super.call(this, name, 'Electric', hitpoints, attacks, { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 }) || this;
        _this.name = name;
        _this.hitpoints = hitpoints;
        _this.attacks = attacks;
        return _this;
    }
    return Pikachu;
}(pokemon_1.Pokemon));
exports.Pikachu = Pikachu;
