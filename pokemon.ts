import { EnergyType, Attack, Weakness, Resistance, Population } from './types';
import { PokeBag } from './pokebag';

export class Pokemon{

  private static population: Population[] = [];

  constructor(protected name: string, protected energyType: EnergyType, protected hitpoints: number, protected attacks: Attack[], protected weakness: Weakness, protected resistance: Resistance) {
    this.name = name;
    this.energyType = energyType;
    this.hitpoints = hitpoints;
    this.attacks = attacks;
    this.weakness = weakness;
    this.resistance = resistance;

    Pokemon.population.push({name, hitpoints})
  }

  //Laat alle populated pokemon zien
  public static getPopulation(): void {
    console.log(`aantal pokemons die leven: ${Pokemon.population.length} | Levende pokemons: ${Pokemon.population.map(function (x) { return x.name; })}`);
  }

  //Laat het gemiddelde hitpoints van de populated pokemon zien
  public static getPopulationHealth(): void {
    console.log(`Gemiddelde health van de levende pokemons: ${Pokemon.population.reduce((a,b) => a + b.hitpoints, 0) / Pokemon.population.length}`)
  }

  //Met deze functie wordt alle info van de pokemon weergeven.
  public getAllInfo(): void {
    console.log(this);
  }

  //Met deze functie wordt de schade berekent als de pokemon een weakness heeft naar de attack
  private calculateDamageWeakness(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - (damage * target.weakness.multiplier);
    return (damage * target.weakness.multiplier);
  }

  //Met deze functie wordt de schade berekent als de pokemon een restistance heeft naar de attack
  private calculateDamageResistance(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - (damage / target.resistance.multiplier);
    return (damage / target.resistance.multiplier);
  }

  //Met deze functie wordt de schade berekent als de pokemon geen weakness en ook geen restiance heeft
  private calculateDamage(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - damage;
    return damage;
  }

  //Hier wordt de attack uitgevoerd en logt hij alles in de terminal
  public attack(target: Pokemon, attack: string): void {
    if (target.hitpoints <= 0) {
      Pokemon.population = Pokemon.population.filter((pokemon) => {
        return pokemon.name !== target.name;
      })
      console.log(`${target.name} is dead!`);
      Pokemon.getPopulation();
    }
    console.log(`${this.name}'s HP: ${this.hitpoints}`);
    if (typeof this.attacks.find(({ move }) => move == attack) === 'undefined') {
      console.log(`${attack} not found!`)
    } else {
      let _attack = this.attacks.find(({ move }) => move == attack);
      if (typeof _attack !== 'undefined') {
        let damage = _attack.damage;
      }
      switch (this.energyType) {
        case target.weakness.type: console.log(`${this.name} Did ${this.calculateDamageWeakness(target, damage)} Damage to ${target.name}!`); break;
        case target.resistance.type: console.log(`${this.name} Did ${this.calculateDamageResistance(target, damage)} Damage to ${target.name}!`); break;
        default: console.log(`${this.name} Did ${this.calculateDamage(target, damage)} Damage to ${target.name}!`); break;
      }
    }
  }
}