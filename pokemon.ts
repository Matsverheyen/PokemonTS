import { EnergyType, Attack, Weakness, Resistance } from './types';

class Pokemon {

  constructor(public name: string, public energyType: EnergyType, public hitpoints: number, public attacks: Attack[], public weakness: Weakness, public resistance: Resistance ) {
    this.name = name;
    this.energyType = energyType;
    this.hitpoints = hitpoints;
    this.attacks = attacks;
    this.weakness = weakness;
    this.resistance = resistance;
  }

  public getAllInfo(): void {
    console.log(this);
  }

  private calculateDamageWeakness(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - (damage * target.weakness.multiplier);
    return (damage * target.weakness.multiplier);
  }

  private calculateDamageResistance(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - (damage / target.resistance.multiplier);
    return (damage / target.resistance.multiplier);
  }

  private calculateDamage(target: Pokemon, damage: number): number {
    target.hitpoints = target.hitpoints - damage;
    return damage;
  }

  public attack(target: Pokemon, attack: string): void {
    console.log(`${this.name}'s HP: ${this.hitpoints}`);
    if (typeof this.attacks.find(({ move }) => move == attack) === 'undefined') {
      console.log(`${attack} not found!`)
    } else {
      let damage = this.attacks.find(({ move }) => move == attack).damage;
      switch (this.energyType) {
        case target.weakness.type: console.log(`${this.name} Did ${this.calculateDamageWeakness(target, damage)} Damage to ${target.name}!`); break;
        case target.resistance.type: console.log(`${this.name} Did ${this.calculateDamageResistance(target, damage)} Damage to ${target.name}!`); break;
        default: console.log(`${this.name} Did ${this.calculateDamage(target, damage)} Damage to ${target.name}!`); break;
      }
    }
  }
}

let Pikachu: Pokemon = new Pokemon("Pikachu", "Electric", 60, [{ 'move': 'Electric Ring', 'damage': 50 }, { 'move': 'Pika Punch', 'damage': 20 }], { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 })
let Charmander: Pokemon = new Pokemon("Charmander", "Fire", 60, [{ 'move': 'Head Butt', 'damage': 10 }, { 'move': 'Flare', 'damage': 30 }], { 'type': 'Water', 'multiplier': 2 }, { 'type': 'Electric', 'multiplier': 10 })

Pikachu.attack(Charmander, 'Electric Ring');
Charmander.attack(Pikachu, 'Flare');