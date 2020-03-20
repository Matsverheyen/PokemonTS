"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, energyType, hitpoints, attacks, weakness, resistance) {
        this.name = name;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
        this.name = name;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
    }
    Pokemon.prototype.getAllInfo = function () {
        return this;
    };
    return Pokemon;
}());
var Pikachu = new Pokemon("Pikachu", "Normal", 60, [{ 'moveName': 'Tackle', 'damage': 10 }], { 'type': 'Grass', 'multiplier': 1.5 }, { 'type': 'Normal', 'multiplier': 2 });
console.log(Pikachu.getAllInfo());
