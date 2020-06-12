import { Pokemon } from './pokemon';
import {Attack } from './types';

export class Pikachu extends Pokemon {
  constructor(public name: string, public hitpoints: number, public attacks: Attack[]) {
    super(name, 'Electric', hitpoints, attacks, { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 });
  }
}