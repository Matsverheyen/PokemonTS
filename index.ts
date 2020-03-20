import { PokeBag } from './pokebag';
import { Pokemon } from './pokemon';

let Pikachu: Pokemon = new Pokemon("Pikachu", "Electric", 60, [{ 'move': 'Electric Ring', 'damage': 50 }, { 'move': 'Pika Punch', 'damage': 20 }], { 'type': 'Fire', 'multiplier': 1.5 }, { 'type': 'Fighting', 'multiplier': 20 })
let Charmander: Pokemon = new Pokemon("Charmander", "Fire", 60, [{ 'move': 'Head Butt', 'damage': 10 }, { 'move': 'Flare', 'damage': 30 }], { 'type': 'Water', 'multiplier': 2 }, { 'type': 'Electric', 'multiplier': 10 })

var bag: any = new PokeBag(10);

Pikachu.attack(Charmander, 'Electric Ring');
Charmander.attack(Pikachu, 'Flare');

bag.addToBag(Pikachu);
bag.addToBag(Charmander);

bag.removeFromBag(Charmander);

bag.getAllInBag();
