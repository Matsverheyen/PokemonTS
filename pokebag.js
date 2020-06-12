"use strict";
exports.__esModule = true;
var PokeBag = /** @class */ (function () {
    function PokeBag(size) {
        this.size = size;
        this.pokemons = [];
    }
    PokeBag.prototype.addToBag = function (pokemon) {
        /**
         * Adds pokemon to the PokeBag
         *
         * @remarks
         * This method is part of the PokeBag class
         *
         * @param pokemon - the targeted pokemon to add to the bag
         * @returns void
         */
        if (this.pokemons.length >= this.size) {
            console.log("Pokebag zit vol!");
        }
        else {
            this.pokemons.push(pokemon);
        }
    };
    PokeBag.prototype.removeFromBag = function (pokemon) {
        /**
         * removes pokemon from the PokeBag
         *
         * @remarks
         * This method is part of the PokeBag class
         *
         * @param pokemon - the targeted pokemon to remove from the bag
         * @returns void
         */
        var index = this.pokemons.findIndex(function (obj) { return obj.name === pokemon.name; });
        this.pokemons.splice(index, index + 1);
    };
    PokeBag.prototype.removeAll = function () {
        /**
         * removes all pokemons from the PokeBag
         *
         * @remarks
         * This method is part of the PokeBag class
         *
         */
        this.pokemons = [];
    };
    PokeBag.prototype.getAllInBag = function () {
        /**
         * logs all pokemons in the PokeBag
         *
         * @remarks
         * This method is part of the PokeBag class
         *
         */
        console.log(this.pokemons.map(function (x) { return x.name; }));
    };
    return PokeBag;
}());
exports.PokeBag = PokeBag;
