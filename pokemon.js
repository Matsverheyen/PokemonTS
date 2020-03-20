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
        console.log(this);
    };
    Pokemon.prototype.calculateDamageWeakness = function (target, damage) {
        target.hitpoints = target.hitpoints - (damage * target.weakness.multiplier);
        return (damage * target.weakness.multiplier);
    };
    Pokemon.prototype.calculateDamageResistance = function (target, damage) {
        target.hitpoints = target.hitpoints - (damage / target.resistance.multiplier);
        return (damage / target.resistance.multiplier);
    };
    Pokemon.prototype.calculateDamage = function (target, damage) {
        target.hitpoints = target.hitpoints - damage;
        return damage;
    };
    Pokemon.prototype.attack = function (target, attack) {
        console.log(this.name + "'s HP: " + this.hitpoints);
        if (typeof this.attacks.find(function (_a) {
            var move = _a.move;
            return move == attack;
        }) === 'undefined') {
            console.log(attack + " not found!");
        }
        else {
            var damage = this.attacks.find(function (_a) {
                var move = _a.move;
                return move == attack;
            }).damage;
            switch (this.energyType) {
                case target.weakness.type:
                    console.log(this.name + " Did " + this.calculateDamageWeakness(target, damage) + " Damage to " + target.name + "!");
                    break;
                case target.resistance.type:
                    console.log(this.name + " Did " + this.calculateDamageResistance(target, damage) + " Damage to " + target.name + "!");
                    break;
                default:
                    console.log(this.name + " Did " + this.calculateDamage(target, damage) + " Damage to " + target.name + "!");
                    break;
            }
        }
    };
    return Pokemon;
}());
var Pikachu = new Pokemon("Pikachu", "Electric", 60, [{ 'move': 'Electric Ring', 'damage': 50 }, { 'move': 'Pika Punch', 'damage': 20 }], { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 });
var Charmander = new Pokemon("Charmander", "Fire", 60, [{ 'move': 'Head Butt', 'damage': 10 }, { 'move': 'Flare', 'damage': 30 }], { 'type': 'Water', 'multiplier': 2 }, { 'type': 'Electric', 'multiplier': 10 });
Pikachu.attack(Charmander, 'Electric Ring');
Charmander.attack(Pikachu, 'Flare');
