import { EnergyType, Attack, Weakness, Resistance } from './types';

class Pokemon {
  private name: string;
  private energyType: EnergyType;
  private hitpoints: number;
  private attacks: Attack[];
  private weakness: Weakness;
  private resistance: Resistance;

  constructor(public name: string, public energyType: EnergyType, public hitpoints: number, public attacks: Attack[], public weakness: Weakness, public resistance: Resistance ) {
    this.name = name;
    this.energyType = energyType;
    this.hitpoints = hitpoints;
    this.attacks = attacks;
    this.weakness = weakness;
    this.resistance = resistance;
  }

  public getAllInfo(): Pokemon {
    return this;
  }

}

let Pikachu: Pokemon = new Pokemon("Pikachu", "Normal", 60, [{ 'moveName': 'Tackle', 'damage': 10 }], { 'type': 'Grass', 'multiplier': 1.5 }, { 'type': 'Normal', 'multiplier': 2 })
console.log(Pikachu.getAllInfo());