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
var Charmander = /** @class */ (function (_super) {
    __extends(Charmander, _super);
    function Charmander(name, hitpoints, attacks) {
        var _this = _super.call(this, name, 'Fire', hitpoints, attacks, { 'type': 'Water', 'multiplier': 2 }, { 'type': 'Electric', 'multiplier': 10 }) || this;
        _this.name = name;
        _this.hitpoints = hitpoints;
        _this.attacks = attacks;
        return _this;
    }
    return Charmander;
}(pokemon_1.Pokemon));
exports.Charmander = Charmander;
