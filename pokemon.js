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
        Pokemon.population.push({ name: name, hitpoints: hitpoints });
    }
    //Laat alle populated pokemon zien
    Pokemon.getPopulation = function () {
        console.log("aantal pokemons die leven: " + Pokemon.population.length + " | Levende pokemons: " + Pokemon.population.map(function (x) { return x.name; }));
    };
    //Laat het gemiddelde hitpoints van de populated pokemon zien
    Pokemon.getPopulationHealth = function () {
        console.log("Gemiddelde health van de levende pokemons: " + Pokemon.population.reduce(function (a, b) { return a + b.hitpoints; }, 0) / Pokemon.population.length);
    };
    //Met deze functie wordt alle info van de pokemon weergeven.
    Pokemon.prototype.getAllInfo = function () {
        console.log(this);
    };
    //Met deze functie wordt de schade berekent als de pokemon een weakness heeft naar de attack
    Pokemon.prototype.calculateDamageWeakness = function (target, damage) {
        target.hitpoints = target.hitpoints - (damage * target.weakness.multiplier);
        return (damage * target.weakness.multiplier);
    };
    //Met deze functie wordt de schade berekent als de pokemon een restistance heeft naar de attack
    Pokemon.prototype.calculateDamageResistance = function (target, damage) {
        target.hitpoints = target.hitpoints - (damage / target.resistance.multiplier);
        return (damage / target.resistance.multiplier);
    };
    //Met deze functie wordt de schade berekent als de pokemon geen weakness en ook geen restiance heeft
    Pokemon.prototype.calculateDamage = function (target, damage) {
        target.hitpoints = target.hitpoints - damage;
        return damage;
    };
    //Hier wordt de attack uitgevoerd en logt hij alles in de terminal
    Pokemon.prototype.attack = function (target, attack) {
        if (target.hitpoints <= 0) {
            Pokemon.population = Pokemon.population.filter(function (pokemon) {
                return pokemon.name !== target.name;
            });
            console.log(target.name + " is dead!");
            Pokemon.getPopulation();
        }
        console.log(this.name + "'s HP: " + this.hitpoints);
        if (typeof this.attacks.find(function (_a) {
            var move = _a.move;
            return move == attack;
        }) === 'undefined') {
            console.log(attack + " not found!");
        }
        else {
            var _attack = this.attacks.find(function (_a) {
                var move = _a.move;
                return move == attack;
            });
            if (typeof _attack !== 'undefined') {
                var damage = _attack.damage;
            }
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
    Pokemon.population = [];
    return Pokemon;
}());
exports.Pokemon = Pokemon;
