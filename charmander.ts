import { Pokemon } from './pokemon';
export class Charmander extends Pokemon {
  /**
   * 
   * @param name - the name of the pokemon
   * @param hitpoints - the hitpoints of the pokemon
   */
  constructor(public name: string, public hitpoints: number) {
    super(
      name,
      'Fire',
      hitpoints,
      [{
          'move': 'Head Butt',
          'damage': 10
        },
        {
          'move': 'Flare',
          'damage': 30
        }
      ], {
        'type': 'Water',
        'multiplier': 2
      }, {
        'type': 'Electric',
        'multiplier': 10
      }
    );
  }
}