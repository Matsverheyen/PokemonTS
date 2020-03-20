"use strict";
exports.__esModule = true;
var PokeBag = /** @class */ (function () {
    function PokeBag(size) {
        this.size = size;
        this.pokemons = [];
    }
    PokeBag.prototype.addToBag = function (pokemon) {
        if (this.pokemons.length >= this.size) {
            console.log("Pokebag zit vol!");
        }
        else {
            this.pokemons.push(pokemon);
        }
    };
    PokeBag.prototype.removeFromBag = function (pokemon) {
        var index = this.pokemons.findIndex(function (obj) { return obj.name === pokemon.name; });
        this.pokemons.splice(index, index + 1);
    };
    PokeBag.prototype.removeAll = function () {
        this.pokemons = [];
    };
    PokeBag.prototype.getAllInBag = function () {
        console.log(this.pokemons.map(function (x) { return x.name; }));
    };
    return PokeBag;
}());
exports.PokeBag = PokeBag;
