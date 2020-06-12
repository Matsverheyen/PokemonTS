"use strict";
exports.__esModule = true;
var PokeBag = /** @class */ (function () {
    function PokeBag(size) {
        this.size = size;
        this.pokemons = [];
    }
    //Met deze functie kun je pokemons toevoegen aan je bag
    PokeBag.prototype.addToBag = function (pokemon) {
        if (this.pokemons.length >= this.size) {
            console.log("Pokebag zit vol!");
        }
        else {
            this.pokemons.push(pokemon);
        }
    };
    //Met deze functie kan je pokemons verwijderen uit je bag
    PokeBag.prototype.removeFromBag = function (pokemon) {
        var index = this.pokemons.findIndex(function (obj) { return obj.name === pokemon.name; });
        this.pokemons.splice(index, index + 1);
    };
    //Met deze functie verwijder je alles uit je bag
    PokeBag.prototype.removeAll = function () {
        this.pokemons = [];
    };
    //Met deze functie laat je zien welke pokemons er allemaal in je bag zitten
    PokeBag.prototype.getAllInBag = function () {
        console.log(this.pokemons.map(function (x) { return x.name; }));
    };
    return PokeBag;
}());
exports.PokeBag = PokeBag;
