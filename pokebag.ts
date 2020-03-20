import { Pokemon } from './pokemon';

export class PokeBag {
  private pokemons: Pokemon[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.pokemons = [];
  }

  public addToBag(pokemon: Pokemon): void {
    if (this.pokemons.length >= this.size) {
      console.log(`Pokebag zit vol!`);
    } else {
      this.pokemons.push(pokemon);
    }
  }

  public removeFromBag(pokemon: Pokemon): void {
    let index = this.pokemons.findIndex(obj => obj.name === pokemon.name);
    this.pokemons.splice(index, index + 1);
  }

  public removeAll(): void {
    this.pokemons = [];
  }

  public getAllInBag():void {
    console.log(this.pokemons.map(x => x.name));
  }
  
}