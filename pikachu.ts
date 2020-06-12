import { Pokemon } from './pokemon';

export class Pikachu extends Pokemon {
  /**
   * 
   * @param name - the name of the pokemon
   * @param hitpoints - the hitpoints of the pokemon
   */
  constructor(public name: string, public hitpoints: number) {
    super(
      name,
      'Electric',
      hitpoints,
      [{
          'move': 'Electric Ring',
          'damage': 50
        },
        {
          'move': 'Pika Punch',
          'damage': 20
        }
      ], {
        'type': 'Fire',
        'multiplier': 1.5
      }, {
        'type': 'Fighting',
        'multiplier': 20
      }
    );
  }
}