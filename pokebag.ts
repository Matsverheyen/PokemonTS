import { Pokemon } from './pokemon';

export class PokeBag {
  private pokemons: Pokemon[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.pokemons = [];
  }

  //Met deze functie kun je pokemons toevoegen aan je bag
  public addToBag(pokemon: Pokemon): void {
    if (this.pokemons.length >= this.size) {
      console.log(`Pokebag zit vol!`);
    } else {
      this.pokemons.push(pokemon);
    }
  }

  //Met deze functie kan je pokemons verwijderen uit je bag
  public removeFromBag(pokemon: Pokemon): void {
    let index = this.pokemons.findIndex(obj => obj.name === pokemon.name);
    this.pokemons.splice(index, index + 1);
  }

  //Met deze functie verwijder je alles uit je bag
  public removeAll(): void {
    this.pokemons = [];
  }

  //Met deze functie laat je zien welke pokemons er allemaal in je bag zitten
  public getAllInBag():void {
    console.log(this.pokemons.map(x => x.name));
  }
  
}