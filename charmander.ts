import { Pokemon } from './pokemon';
import { Attack } from './types';

export class Charmander extends Pokemon {
  constructor(public name: string, public hitpoints: number, public attacks: Attack[]) {
    super(name, 'Fire', hitpoints, attacks, { 'type': 'Water', 'multiplier': 2 }, { 'type': 'Electric', 'multiplier': 10 });
  }
}