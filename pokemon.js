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
        Pokemon.population.push({
            name: name,
            hitpoints: hitpoints
        });
    }
    Pokemon.getPopulation = function () {
        /**
         * logs the total population of Pokemons
         *
         * @remarks
         * This method is part of the Pokemon class
         *
         */
        console.log("aantal pokemons die leven: " + Pokemon.population.length + " | Levende pokemons: " + Pokemon.population.map(function (x) { return x.name; }));
    };
    Pokemon.getPopulationHealth = function () {
        /**
         * logs the average health of all populated pokemons
         *
         * @remarks
         * This method is part of the Pokemon class
         */
        console.log("Gemiddelde health van de levende pokemons: " + Pokemon.population.reduce(function (a, b) { return a + b.hitpoints; }, 0) / Pokemon.population.length);
    };
    Pokemon.prototype.getAllInfo = function () {
        /**
         * Logs all info on the Pokemon
         *
         * @remarks
         * This method is part of the Pokemon class
         */
        console.log(this);
    };
    Pokemon.prototype.calculateDamageWeakness = function (target, damage) {
        /**
         * Calculates the damage done on a weakness
         *
         * @remarks
         * This method is part of the Pokemon class
         *
         * @param target - the targeted pokemon object
         * @param damage - the damage done by the attacker
         * @returns the total damage done
         */
        target.hitpoints = target.hitpoints - (damage * target.weakness.multiplier);
        return (damage * target.weakness.multiplier);
    };
    Pokemon.prototype.calculateDamageResistance = function (target, damage) {
        /**
         * Calculates the damage done on a resistance
         *
         * @remarks
         * This method is part of the Pokemon class
         *
         * @param target - the targeted pokemon object
         * @param damage - the damage done by the attacker
         * @returns the total damage done
         */
        target.hitpoints = target.hitpoints - (damage / target.resistance.multiplier);
        return (damage / target.resistance.multiplier);
    };
    //Met deze functie wordt de schade berekent als de pokemon geen weakness en ook geen restiance heeft
    Pokemon.prototype.calculateDamage = function (target, damage) {
        /**
         * Calculates the damage done when there is no restistance nor a weakness
         *
         * @remarks
         * This method is part of the Pokemon class
         *
         * @param target - the targeted pokemon object
         * @param damage - the damage done by the attacker
         * @returns the total damage done
         */
        target.hitpoints = target.hitpoints - damage;
        return damage;
    };
    Pokemon.prototype.attack = function (target, attack) {
        /**
         * damage function that checksif the target has a weakness or resistance
         *
         * @remarks
         * This method is part of the Pokemon class
         *
         * @param target - the targeted pokemon object
         * @param attack - the name of the attack chosen by the attacker
         * @returns void
         */
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
