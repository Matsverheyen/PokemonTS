import { PokeBag } from './pokebag';
import { Pikachu } from './pikachu';
import { Charmander } from './charmander';
import { Pokemon } from './pokemon';

Pokemon.getPopulation();

let pika = new Pikachu("Pikachu", 60, [{ 'move': 'Electric Ring', 'damage': 50 }, { 'move': 'Pika Punch', 'damage': 20 }]);
let char = new Charmander("Charmander", 60, [{ 'move': 'Head Butt', 'damage': 10 }, { 'move': 'Flare', 'damage': 30 }]);

Pokemon.getPopulation();
Pokemon.getPopulationHealth();

var bag: any = new PokeBag(10);

pika.attack(char, 'Electric Ring');
char.attack(pika, 'Flare');
char.attack(pika, 'Flare');
char.attack(pika, 'Flare');

bag.addToBag(pika);
bag.addToBag(char);

bag.removeFromBag(char);

bag.getAllInBag();
