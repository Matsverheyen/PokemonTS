import { EnergyType, Attack, Weakness, Resistance } from './types';
import { PokeBag } from './pokebag';

export class Pokemon{

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