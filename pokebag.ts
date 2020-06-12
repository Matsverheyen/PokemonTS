import { Pokemon } from './pokemon';

export class PokeBag {
  private pokemons: Pokemon[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.pokemons = [];
  }

  public addToBag(pokemon: Pokemon): void {
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
      console.log(`Pokebag zit vol!`);
    } else {
      this.pokemons.push(pokemon);
    }
  }

  public removeFromBag(pokemon: Pokemon): void {
    /**
     * removes pokemon from the PokeBag
     *
     * @remarks
     * This method is part of the PokeBag class
     *
     * @param pokemon - the targeted pokemon to remove from the bag
     * @returns void
     */
    let index = this.pokemons.findIndex(obj => obj.name === pokemon.name);
    this.pokemons.splice(index, index + 1);
  }

  public removeAll(): void {
    /**
     * removes all pokemons from the PokeBag
     *
     * @remarks
     * This method is part of the PokeBag class
     *
     */
    this.pokemons = [];
  }

  public getAllInBag(): void {
    /**
     * logs all pokemons in the PokeBag
     *
     * @remarks
     * This method is part of the PokeBag class
     *
     */
    console.log(this.pokemons.map(x => x.name));
  }

}