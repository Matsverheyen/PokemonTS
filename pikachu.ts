import { Pokemon } from './pokemon';
import {Attack } from './types';

//Hier wordt de class Pikachu aangemaakt, Pikachu is altijd een 'Electric' soort en heeft altijd dezelfde weakness en resistance!
export class Pikachu extends Pokemon {
  constructor(public name: string, public hitpoints: number, public attacks: Attack[]) {
    super(name, 'Electric', hitpoints, attacks, { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 });
  }
}